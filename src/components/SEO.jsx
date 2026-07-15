import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, organizationSchema } from '../data/site';

const setMeta = (selector, attr, value) => {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement('meta');
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) {
            element.setAttribute(match[1], match[2]);
        }
        document.head.appendChild(element);
    }

    element.setAttribute(attr, value);
};

const setCanonical = (url) => {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
};

const setJsonLd = (id, schema) => {
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
};

export const SEO = ({
    title,
    description,
    path = '/',
    image = `${SITE_URL}/logo.jpg`,
    type = 'website',
    keywords = [],
    robots = 'index, follow',
    schemas = [],
}) => {
    useEffect(() => {
        const canonical = `${SITE_URL}${path}`;
        const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

        document.title = fullTitle;
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[name="keywords"]', 'content', keywords.join(', '));
        setMeta('meta[name="robots"]', 'content', robots);
        setMeta('meta[property="og:type"]', 'content', type);
        setMeta('meta[property="og:url"]', 'content', canonical);
        setMeta('meta[property="og:title"]', 'content', fullTitle);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:image"]', 'content', image);
        setMeta('meta[property="og:locale"]', 'content', 'es_CO');
        setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);
        setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'content', fullTitle);
        setMeta('meta[name="twitter:description"]', 'content', description);
        setMeta('meta[name="twitter:image"]', 'content', image);
        setCanonical(canonical);
        setJsonLd('organization-schema', organizationSchema);
        schemas.forEach((schema, index) => setJsonLd(`page-schema-${index}`, schema));

        return () => {
            schemas.forEach((_, index) => {
                const script = document.getElementById(`page-schema-${index}`);
                if (script) script.remove();
            });
        };
    }, [description, image, keywords, path, robots, schemas, title, type]);

    return null;
};
