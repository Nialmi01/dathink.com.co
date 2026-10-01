import { useEffect } from 'react';
import { buildSeoEntries, buildSchemaList } from '../data/seo';

const upsertMeta = (attr, key, content) => {
    let element = document.head.querySelector(`meta[${attr}="${key}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
};

const upsertCanonical = (url) => {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
};

const upsertJsonLd = (id, schema) => {
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
    image,
    type = 'website',
    keywords = [],
    robots = 'index, follow',
    schemas = [],
}) => {
    useEffect(() => {
        const { fullTitle, canonical, entries } = buildSeoEntries({
            title,
            description,
            path,
            image,
            type,
            keywords,
            robots,
        });

        document.title = fullTitle;
        entries.forEach(({ attr, key, content }) => upsertMeta(attr, key, content));
        upsertCanonical(canonical);
        buildSchemaList(schemas).forEach(({ id, schema }) => upsertJsonLd(id, schema));

        return () => {
            schemas.forEach((_, index) => {
                const script = document.getElementById(`page-schema-${index}`);
                if (script) script.remove();
            });
        };
    }, [description, image, keywords, path, robots, schemas, title, type]);

    return null;
};
