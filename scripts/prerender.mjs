/**
 * Prerender estatico (SSG) posterior a `vite build`.
 *
 * Genera un HTML propio por ruta con su title, description, canonical, Open Graph
 * y JSON-LD ya en el markup, mas sitemap.xml y 404.html. Sin esto, todas las URLs
 * servian el mismo shell vacio y los crawlers sociales no veian nada por pagina.
 */
import { access, cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const templatePath = path.join(distDir, 'index.html');
const ssrEntryPath = path.join(ssrDir, 'entry-server.js');

const exists = async (target) => {
    try {
        await access(target);
        return true;
    } catch {
        return false;
    }
};

if (!(await exists(templatePath))) {
    throw new Error(`No existe ${templatePath}. Ejecuta "vite build" antes del prerender.`);
}
if (!(await exists(ssrEntryPath))) {
    throw new Error(`No existe ${ssrEntryPath}. Ejecuta el build SSR antes del prerender.`);
}

const template = await readFile(templatePath, 'utf8');
if (!template.includes('<!--seo-start-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('index.html no contiene los marcadores esperados (<!--seo-start--> y <div id="root"></div>).');
}

// Los assets que emite el build SSR usan el mismo hash de contenido que el build
// cliente; copiarlos garantiza que las URLs del HTML prerenderizado resuelvan.
if (await exists(path.join(ssrDir, 'assets'))) {
    await cp(path.join(ssrDir, 'assets'), path.join(distDir, 'assets'), { recursive: true, force: false });
}

const { routes, notFoundRoute, render, renderHead, siteUrl } = await import(pathToFileURL(ssrEntryPath).href);

const inject = (head, body) =>
    template
        .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, () => `<!--seo-start-->\n    ${head}\n    <!--seo-end-->`)
        .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);

const writePage = async (filePath, html) => {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, html, 'utf8');
};

let rendered = 0;

for (const route of routes) {
    const head = renderHead(route, route.schemas || []);
    const body = await render(route.path);
    const html = inject(head, body);

    const target = route.path === '/' ? templatePath : path.join(distDir, route.path, 'index.html');
    await writePage(target, html);

    const written = await readFile(target, 'utf8');
    const expectedCanonical = `href="${siteUrl}${route.path}"`;
    if (!written.includes('<title>') || !written.includes(expectedCanonical)) {
        throw new Error(`El HTML prerenderizado de ${route.path} no contiene los metadatos esperados.`);
    }
    // Defensa contra regresiones: si una pagina se renderiza con React.lazy sin
    // resolver, el HTML saldria con el fallback de Suspense en vez del contenido.
    if (written.includes('Cargando contenido') || written.includes('<div id="root"></div>')) {
        throw new Error(`El HTML de ${route.path} salio sin contenido renderizado (fallback de Suspense o root vacio).`);
    }

    rendered += 1;
    console.log(`  prerender ${route.path} -> ${path.relative(root, target)} (${html.length} bytes)`);
}

// Pagina 404 estatica: Vercel la sirve con estado 404 en rutas inexistentes.
const notFoundHtml = inject(renderHead(notFoundRoute, []), render(notFoundRoute.path));
await writePage(path.join(distDir, '404.html'), notFoundHtml);
console.log('  prerender /404 -> dist/404.html');

// Sitemap generado desde los datos reales (servicios y blog incluidos).
const sitemapEntries = routes
    .filter((route) => route.sitemap !== false)
    .map(
        (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.5'}</priority>
  </url>`
    )
    .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

console.log(`Prerender completo: ${rendered} rutas + 404.html + sitemap.xml (${routes.length} rutas en el sitemap).`);
