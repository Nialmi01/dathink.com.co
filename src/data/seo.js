import { SITE_NAME, SITE_URL, organizationSchema } from './site';

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_WIDTH = '1200';
export const OG_IMAGE_HEIGHT = '630';

export const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

export const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

/**
 * Fuente unica de verdad de los metadatos: la usan tanto el cliente (SEO.jsx)
 * como el prerender de build (src/ssr/entry-server.jsx).
 */
export const buildSeoEntries = ({
    title,
    description,
    path = '/',
    image = OG_IMAGE,
    type = 'website',
    keywords = [],
    robots = 'index, follow',
}) => {
    const fullTitle = title && title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonical = `${SITE_URL}${path}`;

    const entries = [
        { attr: 'name', key: 'description', content: description },
        { attr: 'name', key: 'robots', content: robots },
        { attr: 'property', key: 'og:type', content: type },
        { attr: 'property', key: 'og:url', content: canonical },
        { attr: 'property', key: 'og:title', content: fullTitle },
        { attr: 'property', key: 'og:description', content: description },
        { attr: 'property', key: 'og:image', content: image },
        { attr: 'property', key: 'og:image:width', content: OG_IMAGE_WIDTH },
        { attr: 'property', key: 'og:image:height', content: OG_IMAGE_HEIGHT },
        { attr: 'property', key: 'og:image:alt', content: `${SITE_NAME} - Automatizacion e Inteligencia Artificial` },
        { attr: 'property', key: 'og:locale', content: 'es_CO' },
        { attr: 'property', key: 'og:site_name', content: SITE_NAME },
        { attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
        { attr: 'name', key: 'twitter:title', content: fullTitle },
        { attr: 'name', key: 'twitter:description', content: description },
        { attr: 'name', key: 'twitter:image', content: image },
    ];

    if (keywords.length > 0) {
        entries.splice(1, 0, { attr: 'name', key: 'keywords', content: keywords.join(', ') });
    }

    return { fullTitle, canonical, entries };
};

/**
 * Lista de bloques JSON-LD con ids estables, de modo que el prerender y el
 * cliente escriban exactamente en los mismos nodos (sin duplicar schema).
 */
export const buildSchemaList = (pageSchemas = []) =>
    [organizationSchema, ...pageSchemas].map((schema, index) => ({
        id: index === 0 ? 'organization-schema' : `page-schema-${index - 1}`,
        schema,
    }));

/** Genera el bloque <head> de una ruta como HTML plano (solo build/prerender). */
export const renderHeadHtml = (meta, schemas = []) => {
    const { fullTitle, canonical, entries } = buildSeoEntries(meta);
    const tags = [
        `<title>${escapeHtml(fullTitle)}</title>`,
        `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
        ...entries.map(({ attr, key, content }) => `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`),
    ];

    const jsonLd = buildSchemaList(schemas).map(
        ({ id, schema }) => `<script id="${id}" type="application/ld+json">${safeJson(schema)}</script>`
    );

    return [...tags, ...jsonLd].join('\n    ');
};
