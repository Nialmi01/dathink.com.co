import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRoutes from '../AppRoutes.jsx';
import { servicesData } from '../data/services';
import { blogArticles } from '../data/blog';
import { pageMeta } from '../data/pageMeta';
import { faqSchema } from '../data/faq';
import { renderHeadHtml } from '../data/seo';
import { articleSchemaFor, breadcrumbSchemaFor, serviceSchemaFor, websiteSchema } from '../data/schemas';

export { SITE_URL as siteUrl } from '../data/site';

/** Render del cuerpo de la app para una URL concreta (build-time). */
export const render = (url) =>
    renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
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
