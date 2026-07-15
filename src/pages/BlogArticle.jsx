import { Link, Navigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getBlogArticle } from '../data/blog';
import { SITE_URL, buildWhatsAppUrl } from '../data/site';
import { SEO } from '../components/SEO';

const BlogArticle = () => {
    const { slug } = useParams();
    const article = getBlogArticle(slug);

    if (!article) {
        return <Navigate to="/" replace />;
    }

    const path = `/blog/${article.slug}`;
    const ctaUrl = buildWhatsAppUrl(`Hola, lei el articulo "${article.title}" y quiero una asesoria con Dathink.`);
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        author: {
            '@type': 'Organization',
            name: 'Dathink',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Dathink',
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.jpg`,
            },
        },
        mainEntityOfPage: `${SITE_URL}${path}`,
        inLanguage: 'es-CO',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/#blog` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}${path}` },
        ],
    };

    return (
        <main style={{ paddingTop: '110px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <SEO
                title={article.metaTitle}
                description={article.description}
                path={path}
                type="article"
                keywords={article.keywords}
                schemas={[articleSchema, breadcrumbSchema]}
            />
            <article className="container" style={{ maxWidth: '900px', paddingBottom: '5rem' }}>
                <Link to="/#blog" className="btn glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <FaArrowLeft /> Volver al Blog
                </Link>

                <div style={{ marginBottom: '2rem' }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: article.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        background: `${article.color}18`,
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        marginBottom: '1.25rem',
                    }}>
                        {article.category} · {article.readTime}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '900', lineHeight: 1.08, marginBottom: '1rem' }}>
                        {article.title}
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        {article.description}
                    </p>
                </div>

                <div className="glass" style={{ padding: '2rem', borderRadius: '18px', display: 'grid', gap: '2rem' }}>
                    {article.sections.map((section) => (
                        <section key={section.heading}>
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{section.heading}</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{section.body}</p>
                        </section>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Solicitar asesoria sobre este tema
                    </a>
                </div>
            </article>
        </main>
    );
};

export default BlogArticle;
