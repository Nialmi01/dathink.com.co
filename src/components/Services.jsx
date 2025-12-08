import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nuestras Soluciones</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Tecnología de vanguardia aplicada a tu negocio.
                    </p>
                </div>

                <div className="grid-auto-fit">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={`/service/${service.id}`} key={index} style={{ display: 'block', textDecoration: 'none' }}>
                                <motion.div
                                    className="glass"
                                    whileHover={{ y: -10 }}
                                    style={{
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        textAlign: 'left',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '2.5rem',
                                        color: service.color,
                                        marginBottom: '1.5rem',
                                        background: `rgba(255,255,255,0.05)`,
                                        display: 'inline-flex',
                                        padding: '1rem',
                                        borderRadius: '15px'
                                    }}>
                                        <Icon />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>

                                    <div style={{ marginTop: '1.5rem', color: service.color, fontWeight: '600', fontSize: '0.9rem' }}>
                                        Ver Detalles →
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
