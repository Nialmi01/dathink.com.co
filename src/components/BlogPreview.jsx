import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { FaArrowRight, FaBookOpen, FaClock } from 'react-icons/fa';

export const BlogPreview = () => (
    <section id="blog" className="section-padding">
        <div className="container">
            {/* Header */}
            <div className="section-header">
                <span className="section-badge">
                    ✦ APRENDE Y OPTIMIZA
                </span>
                <h2 className="section-title">
                    Blog &amp; <span className="text-gradient">Recursos Gratuitos</span>
                </h2>
                <p className="section-subtitle">
                    Contenido práctico sobre automatización, IA, transformación digital y optimización de negocios en Colombia.
                </p>
            </div>

            {/* 6 Cards Grid (3x2) */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                    gap: '1.75rem',
                }}
            >
                {blogArticles.slice(0, 6).map((a, i) => (
                    <motion.article
                        key={i}
                        className="glass"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            padding: '2rem 1.8rem',
                            borderRadius: '20px',
                            background: 'rgba(12, 21, 37, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <div>
                            {/* Card Top: Category badge and read time */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.25rem',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '0.72rem',
                                        fontWeight: '800',
                                        color: a.color || 'var(--primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        background: `${a.color || '#00d4ff'}15`,
                                        border: `1px solid ${a.color || '#00d4ff'}35`,
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                    }}
                                >
                                    {a.category}
                                </span>
                                <span
                                    style={{
                                        fontSize: '0.78rem',
                                        color: '#94a3b8',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                >
                                    <FaClock style={{ fontSize: '0.75rem' }} /> {a.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '800',
                                    lineHeight: 1.4,
                                    color: '#ffffff',
                                    marginBottom: '0.85rem',
                                }}
                            >
                                {a.title}
                            </h3>

                            {/* Excerpt */}
                            <p
                                style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {a.description}
                            </p>
                        </div>

                        {/* Read link */}
                        <Link
                            to={`/blog/${a.slug}`}
                            style={{
                                color: a.color || 'var(--primary)',
                                fontWeight: '700',
                                fontSize: '0.88rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                textDecoration: 'none',
                            }}
                        >
                            Leer artículo <FaArrowRight style={{ fontSize: '0.75rem' }} />
                        </Link>
                    </motion.article>
                ))}
            </div>

            {/* Bottom Button */}
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <a
                    href="#contact"
                    className="btn btn-secondary"
                    style={{
                        padding: '0.85rem 2.2rem',
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                    }}
                >
                    <FaBookOpen style={{ color: 'var(--primary)' }} /> Ver más contenido en el blog
                </a>
            </div>
        </div>
    </section>
);
