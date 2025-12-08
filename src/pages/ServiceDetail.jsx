import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const Icon = service.icon;

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <div className="container">
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

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Características Clave</h3>
                        <ul style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                            {service.features.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem' }}>
                                    <FaCheckCircle style={{ color: service.color }} /> {feature}
                                </li>
                            ))}
                        </ul>

                        <Link to="/#contact" className="btn btn-primary">Solicitar Cotización</Link>
                    </motion.div>

                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass"
                        style={{ borderRadius: '20px', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {service.image ? (
                            <img src={service.image} alt={service.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', ...service.imgStyle }} />
                        ) : (
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <Icon style={{ fontSize: '8rem', color: service.color, opacity: 0.2 }} />
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
