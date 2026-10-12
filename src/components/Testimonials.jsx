import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Carlos Mejía',
        role: 'Director de Operaciones',
        company: 'DistriLog',
        quote: 'Gracias a los bots de WhatsApp de Dathink, redujimos el tiempo de atención en un 70%. Nuestro equipo ahora se enfoca en cerrar ventas estratégicas.',
        initials: 'CM',
        color: '#00d4ff',
    },
    {
        name: 'Diana Palacios',
        role: 'CEO',
        company: 'Grupo Inmobiliario Andino',
        quote: 'Implementaron un agente de IA que califica prospectos al instante. Duplicamos la conversión de clientes en solo dos meses de implementación.',
        initials: 'DP',
        color: '#a855f7',
    },
    {
        name: 'Andrés Ramos',
        role: 'COO',
        company: 'Clínicas Salud Total',
        quote: 'El dashboard y software a medida conectó todas nuestras áreas. Ahorramos decenas de horas semanales en tareas repetitivas.',
        initials: 'AR',
        color: '#22c55e',
    },
];

export const Testimonials = () => (
    <section id="testimonials" className="section-padding">
        <div className="container">
            {/* Header */}
            <div className="section-header">
                <span className="section-badge">
                    ✦ CONFIANZA Y RESULTADOS
                </span>
                <h2 className="section-title">
                    Lo que dicen <span className="text-gradient">Nuestros Clientes</span>
                </h2>
                <p className="section-subtitle">
                    Empresas que confiaron en nosotros para transformar su operación y elevar su productividad.
                </p>
            </div>

            {/* 3 Cards Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.75rem',
                }}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="glass"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            padding: '2.4rem 2rem',
                            borderRadius: '20px',
                            background: 'rgba(12, 21, 37, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                        }}
                    >
                        <div>
                            {/* Star Rating */}
                            <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', fontSize: '1rem', marginBottom: '1.25rem' }}>
                                {[...Array(5)].map((_, s) => (
                                    <FaStar key={s} />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p
                                style={{
                                    color: '#cbd5e1',
                                    fontSize: '0.96rem',
                                    lineHeight: 1.75,
                                    fontStyle: 'normal',
                                    marginBottom: '2rem',
                                }}
                            >
                                "{t.quote}"
                            </p>
                        </div>

                        {/* Author Info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                            <div
                                style={{
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '50%',
                                    background: `${t.color}15`,
                                    border: `1px solid ${t.color}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.95rem',
                                    fontWeight: '800',
                                    color: t.color,
                                }}
                            >
                                {t.initials}
                            </div>
                            <div>
                                <div style={{ fontWeight: '800', color: '#ffffff', fontSize: '1rem' }}>{t.name}</div>
                                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                                    {t.role} &bull; <span style={{ color: t.color }}>{t.company}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
