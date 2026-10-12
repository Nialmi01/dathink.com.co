import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-badge">
                        ✦ QUÉ PODEMOS HACER POR TI
                    </span>
                    <h2 className="section-title">
                        Nuestras Soluciones
                    </h2>
                    <p className="section-subtitle">
                        Tecnología de vanguardia aplicada a tu negocio para maximizar eficiencia, reducir errores y escalar tus operaciones.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                to={`/service/${service.id}`}
                                key={index}
                                style={{ display: 'flex', textDecoration: 'none', height: '100%' }}
                            >
                                <motion.div
                                    className="glass"
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        padding: '2.2rem 1.8rem',
                                        borderRadius: '20px',
                                        textAlign: 'left',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        background: 'rgba(12, 21, 37, 0.75)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                    }}
                                >
                                    <div>
                                        {/* Icon Container */}
                                        <div
                                            style={{
                                                fontSize: '1.5rem',
                                                color: service.color,
                                                marginBottom: '1.5rem',
                                                background: `${service.color}18`,
                                                border: `1px solid ${service.color}35`,
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '14px',
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            style={{
                                                fontSize: '1.35rem',
                                                fontWeight: '800',
                                                marginBottom: '0.85rem',
                                                color: '#ffffff',
                                                letterSpacing: '-0.01em',
                                            }}
                                        >
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            style={{
                                                color: 'var(--text-muted)',
                                                fontSize: '0.92rem',
                                                lineHeight: 1.65,
                                            }}
                                        >
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Action link */}
                                    <div
                                        style={{
                                            marginTop: '2rem',
                                            color: service.color,
                                            fontWeight: '700',
                                            fontSize: '0.88rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                        }}
                                    >
                                        Ver Solución <FaArrowRight style={{ fontSize: '0.8rem' }} />
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
