import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { servicesData } from '../data/services';
import { SEO } from '../components/SEO';
import { breadcrumbSchemaFor, serviceSchemaFor } from '../data/schemas';
import { buildWhatsAppUrl } from '../data/site';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const Icon = service.icon;
    const path = `/service/${service.id}`;
    const schemas = [
        serviceSchemaFor(service),
        breadcrumbSchemaFor([
            { name: 'Inicio', path: '/' },
            { name: service.title, path },
        ]),
    ];
    const ctaUrl = buildWhatsAppUrl(`Hola, me interesa ${service.title} para mi empresa. Quiero agendar una asesoria gratuita.`);
    const relatedServices = servicesData.filter(s => s.id !== service.id);

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <SEO
                title={service.metaTitle || `${service.title} para Empresas`}
                description={service.metaDescription || service.desc}
                path={path}
                keywords={service.keywords || []}
                schemas={schemas}
            />
            <div className="container">
                <nav aria-label="Ruta de navegación" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <Link to="/" style={{ color: 'var(--text-muted)' }}>Inicio</Link>
                    <span aria-hidden="true"> / </span>
                    <span>{service.title}</span>
                </nav>

                <Link to="/" className="btn glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <FaArrowLeft /> Volver al Inicio
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

                    {/* Content Side */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '15px',
                            color: service.color,
                            fontSize: '2rem',
                            marginBottom: '1rem'
                        }}>
                            <Icon />
                        </div>

                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            {service.title}
                        </h1>

                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                            {service.longDesc}
                        </p>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Características Clave</h2>
                        <ul style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                            {service.features.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem' }}>
                                    <FaCheckCircle style={{ color: service.color }} /> {feature}
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/#contact" className="btn btn-primary">Solicitar Cotización</Link>
                            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaWhatsapp /> Asesoría por WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass"
                        style={{ borderRadius: '20px', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {service.image ? (
                            <img src={service.image} alt={`${service.title} - solución de Dathink para empresas`} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', objectFit: 'cover', ...service.imgStyle }} />
                        ) : (
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <Icon style={{ fontSize: '8rem', color: service.color, opacity: 0.2 }} />
                            </div>
                        )}
                    </motion.div>

                </div>

                {/* Enlazado interno entre servicios */}
                <section style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                        Otros servicios que se complementan
                    </h2>
                    <div className="grid-auto-fit">
                        {relatedServices.map((related) => {
                            const RelatedIcon = related.icon;
                            return (
                                <Link key={related.id} to={`/service/${related.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '18px', height: '100%' }}>
                                        <div style={{ color: related.color, fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                                            <RelatedIcon />
                                        </div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>{related.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{related.desc}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetail;
