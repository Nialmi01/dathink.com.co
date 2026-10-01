import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRoutes from '../AppRoutes.jsx';
import ServiceDetail from '../pages/ServiceDetail';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Allies from '../pages/Allies';
import ThankYou from '../pages/ThankYou';
import BlogArticle from '../pages/BlogArticle';
import NotFound from '../pages/NotFound';
import { servicesData } from '../data/services';
import { blogArticles } from '../data/blog';
import { pageMeta } from '../data/pageMeta';
import { faqSchema } from '../data/faq';
import { renderHeadHtml } from '../data/seo';
import { articleSchemaFor, breadcrumbSchemaFor, serviceSchemaFor, websiteSchema } from '../data/schemas';

export { SITE_URL as siteUrl } from '../data/site';

// El cliente carga estas paginas con React.lazy; en el build las pasamos ya
// resueltas para que el HTML estatico contenga el contenido y no el fallback.
const eagerRouteComponents = {
    ServiceDetail,
    PrivacyPolicy,
    Allies,
    ThankYou,
    BlogArticle,
    NotFound,
};

/**
 * Render del cuerpo de la app para una URL concreta (build-time).
 *
 * Usa renderToString con las paginas ya importadas de forma sincrona: al no
 * quedar ningun limite de Suspense pendiente, el HTML sale con el contenido
 * real y sin el fallback del spinner. scripts/prerender.mjs falla el build si
 * detecta ese fallback en la salida.
 */
export const render = (url) =>
    renderToString(
        <StaticRouter location={url}>
            <AppRoutes components={eagerRouteComponents} />
        </StaticRouter>
    );

/** Head HTML completo (title, meta, canonical, OG y JSON-LD) de una ruta. */
export const renderHead = (meta, schemas = []) => renderHeadHtml(meta, schemas);

const staticRoutes = [
    { ...pageMeta.home, schemas: [websiteSchema, faqSchema] },
    {
        ...pageMeta.allies,
        schemas: [
            breadcrumbSchemaFor([
                { name: 'Inicio', path: '/' },
                { name: 'Aliados y Casos de Éxito', path: '/allies' },
            ]),
        ],
    },
    { ...pageMeta.privacy, schemas: [] },
    { ...pageMeta.gracias, schemas: [] },
];

const serviceRoutes = servicesData.map((service) => ({
    path: `/service/${service.id}`,
    title: service.metaTitle || `${service.title} | Dathink`,
    description: service.metaDescription || service.desc,
    keywords: service.keywords || [],
    changefreq: 'monthly',
    priority: '0.9',
    schemas: [
        serviceSchemaFor(service),
        breadcrumbSchemaFor([
            { name: 'Inicio', path: '/' },
            { name: service.title, path: `/service/${service.id}` },
        ]),
    ],
}));

const blogRoutes = blogArticles.map((article) => ({
    path: `/blog/${article.slug}`,
    title: article.metaTitle || `${article.title} | Dathink`,
    description: article.description,
    keywords: article.keywords || [],
    type: 'article',
    changefreq: 'monthly',
    priority: '0.8',
    schemas: [
        articleSchemaFor(article),
        breadcrumbSchemaFor([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/#blog' },
            { name: article.title, path: `/blog/${article.slug}` },
        ]),
    ],
}));

export const routes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

export const notFoundRoute = { ...pageMeta.notFound, schemas: [] };
