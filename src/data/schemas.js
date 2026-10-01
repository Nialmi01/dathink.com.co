import { SITE_NAME, SITE_URL } from './site';

const DEFAULT_ARTICLE_IMAGE = `${SITE_URL}/og-image.jpg`;

/** BreadcrumbList reutilizable (Inicio > nivel > pagina). */
export const breadcrumbSchemaFor = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
    })),
});

export const serviceSchemaFor = (service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.metaTitle || service.title,
    description: service.metaDescription || service.longDesc,
    serviceType: service.title,
    url: `${SITE_URL}/service/${service.id}`,
    provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
    },
    areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'City', name: 'Medellin' },
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: service.title,
        itemListElement: (service.features || []).map((feature) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: feature },
        })),
    },
});

export const articleSchemaFor = (article) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    image: [DEFAULT_ARTICLE_IMAGE],
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.publishedAt ? { dateModified: article.updatedAt || article.publishedAt } : {}),
    author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
    },
    publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.jpg`,
        },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
    inLanguage: 'es-CO',
});

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'es-CO',
    publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
    },
};
