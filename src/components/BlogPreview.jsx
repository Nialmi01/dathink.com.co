import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { buildWhatsAppUrl } from '../data/site';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaria recibir el blog de Dathink y agendar una asesoria gratuita.');

export const BlogPreview = () => (
    <section id="blog" className="section-padding" style={{ background: 'rgba(0,212,255,0.02)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Blog &amp; <span className="text-gradient">Recursos Gratuitos</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Contenido práctico sobre automatización, IA y transformación digital para empresas en Colombia.
                </p>
            </div>

            <div className="grid-auto-fit">
                {blogArticles.map((a, i) => (
                    <article key={i} className="glass" style={{
                        padding: '1.75rem',
                        borderRadius: '18px',
                        borderLeft: `3px solid ${a.color}`,
                        transition: 'transform 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: '700',
                                color: a.color, textTransform: 'uppercase', letterSpacing: '0.08em',
                                background: `${a.color}18`, padding: '0.25rem 0.75rem', borderRadius: '50px'
                            }}>{a.category}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {a.readTime}</span>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', lineHeight: 1.4, color: '#fff' }}>
                            {a.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                            {a.description}
                        </p>
                        <Link to={`/blog/${a.slug}`} style={{ color: a.color, fontWeight: '600', fontSize: '0.85rem' }}>
                            Leer artículo →
                        </Link>
                    </article>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="blog-cta-asesoria"
                    className="btn btn-primary"
                    style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
                >
                    💬 Habla con un Experto — Gratis
                </a>
            </div>
        </div>
    </section>
);
