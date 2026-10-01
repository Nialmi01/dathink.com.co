import { Link, Navigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import { blogArticles, getBlogArticle } from '../data/blog';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl } from '../data/site';
import { articleSchemaFor, breadcrumbSchemaFor } from '../data/schemas';
import { SEO } from '../components/SEO';

const BlogArticle = () => {
    const { slug } = useParams();
    const article = getBlogArticle(slug);

    if (!article) {
        return <Navigate to="/" replace />;
    }

    const path = `/blog/${article.slug}`;
    const ctaUrl = buildWhatsAppUrl(`Hola, lei el articulo "${article.title}" y quiero una asesoria con Dathink.`);
    const schemas = [
        articleSchemaFor(article),
        breadcrumbSchemaFor([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/#blog' },
            { name: article.title, path },
        ]),
    ];
    const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
    const relatedService = servicesData[0];

    return (
        <main style={{ paddingTop: '110px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <SEO
                title={article.metaTitle}
                description={article.description}
                path={path}
                type="article"
                keywords={article.keywords}
                schemas={schemas}
            />
            <article className="container" style={{ maxWidth: '900px', paddingBottom: '5rem' }}>
                <nav aria-label="Ruta de navegación" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <Link to="/" style={{ color: 'var(--text-muted)' }}>Inicio</Link>
                    <span aria-hidden="true"> / </span>
                    <Link to="/#blog" style={{ color: 'var(--text-muted)' }}>Blog</Link>
                    <span aria-hidden="true"> / </span>
                    <span>{article.title}</span>
                </nav>

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

                {/* CTA + enlazado interno */}
                <div className="glass" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '18px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>¿Quieres aplicar esto en tu empresa?</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Revisamos tus procesos y te proponemos una ruta de automatización por fases, sin compromiso.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaWhatsapp /> Asesoría gratis por WhatsApp
                        </a>
                        <Link to={`/service/${relatedService.id}`} className="btn glass">
                            Ver {relatedService.title}
                        </Link>
                    </div>
                </div>

                <section style={{ marginTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Sigue leyendo</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.85rem' }}>
                        {relatedArticles.map((item) => (
                            <li key={item.slug}>
                                <Link to={`/blog/${item.slug}`} style={{ color: 'var(--primary)', fontWeight: '600' }}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/allies" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                                Casos de éxito de automatización
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
};

export default BlogArticle;
