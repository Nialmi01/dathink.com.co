import { motion } from 'framer-motion';
import HeroBg from '../assets/hero_background.webp';
import { buildWhatsAppUrl } from '../data/site';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaria agendar una asesoria gratuita con Dathink.');

const stats = [
    { value: '+100', label: 'Clientes Satisfechos' },
    { value: '80%', label: 'Reducción de Costos Operativos' },
    { value: '24/7', label: 'Automatización Sin Parar' },
    { value: '+5 años', label: 'Experiencia en IA' },
];

const Hero = () => {
    return (
        <section id="home" aria-label="Inicio" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '3rem'
        }}>
            {/* Background with overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url(${HeroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -2
            }}></div>
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to bottom, rgba(5, 10, 20, 0.85), rgba(5, 10, 20, 1))',
                zIndex: -1
            }}></div>

            {/* Decorative glows */}
            <div style={{
                position: 'absolute', top: '20%', left: '5%',
                width: '400px', height: '400px',
                background: 'var(--primary)', filter: 'blur(160px)',
                opacity: 0.15, borderRadius: '50%', zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute', bottom: '10%', right: '5%',
                width: '300px', height: '300px',
                background: '#a855f7', filter: 'blur(130px)',
                opacity: 0.12, borderRadius: '50%', zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(0, 212, 255, 0.1)',
                            borderRadius: '50px',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em'
                        }}
                    >
                        🚀 Automatización &amp; Inteligencia Artificial para PYMEs
                    </motion.span>

                    {/* H1 — Keyword: automatización de procesos Colombia */}
                    <h1 style={{
                        fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                        fontWeight: '900',
                        lineHeight: 1.08,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Reduce Costos y Crece <br />
                        con <span className="text-gradient">Automatización e IA</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '680px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7
                    }}>
                        Implementamos <strong style={{ color: '#fff' }}>bots de WhatsApp, agentes de IA y software a medida</strong> para
                        que tu empresa en Colombia y Medellin opere mas eficiente, ahorre tiempo y escale sin limites.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="hero-cta-asesoria"
                            className="btn btn-primary"
                            style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
                        >
                            📅 Agenda tu Asesoría Gratuita
                        </a>
                        <a href="#services" className="btn glass" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
                            Ver Nuestros Servicios
                        </a>
                    </div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            borderTop: '1px solid var(--glass-border)',
                            paddingTop: '2rem'
                        }}
                    >
                        {stats.map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, var(--primary), #a855f7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
