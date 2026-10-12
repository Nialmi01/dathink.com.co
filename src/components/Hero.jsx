import { motion } from 'framer-motion';
import HeroBg from '../assets/hero_background.webp';
import { buildWhatsAppUrl } from '../data/site';
import { HeroDashboard } from './HeroDashboard';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaría agendar una llamada y asesoría gratuita con Dathink.');

const stats = [
    { value: '+100', label: 'CLIENTES SATISFECHOS' },
    { value: '80%', label: 'REDUCCIÓN DE TIEMPO OPERATIVO' },
    { value: '24/7', label: 'ATENCIÓN AUTOMATIZADA' },
    { value: '+5 años', label: 'EXPERIENCIA EN IA' },
];

const Hero = () => {
    return (
        <section
            id="home"
            aria-label="Inicio"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '110px',
                paddingBottom: '5rem',
            }}
        >
            {/* Background with overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.22,
                    zIndex: -2,
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse at top, rgba(5, 10, 20, 0.4) 0%, rgba(5, 10, 20, 0.98) 85%)',
                    zIndex: -1,
                }}
            ></div>

            {/* Ambient glows */}
            <div
                style={{
                    position: 'absolute',
                    top: '12%',
                    left: '15%',
                    width: '450px',
                    height: '450px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    filter: 'blur(160px)',
                    borderRadius: '50%',
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: '25%',
                    right: '15%',
                    width: '400px',
                    height: '400px',
                    background: 'rgba(168, 85, 247, 0.12)',
                    filter: 'blur(160px)',
                    borderRadius: '50%',
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            ></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span className="section-badge">
                            ✦ AUTOMATIZACIÓN INTELIGENTE PARA EMPRESAS
                        </span>
                    </div>

                    {/* H1 Heading */}
                    <h1
                        style={{
                            fontSize: 'clamp(2.7rem, 5.5vw, 4.8rem)',
                            fontWeight: '900',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.025em',
                            color: '#ffffff',
                        }}
                    >
                        Reduce Costos y Crece con <br />
                        <span className="text-gradient">Automatización e IA</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                            maxWidth: '740px',
                            margin: '0 auto 2.5rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            fontWeight: '400',
                        }}
                    >
                        Implementamos <strong style={{ color: '#fff', fontWeight: '600' }}>bots de WhatsApp, agentes de IA y software a medida</strong> que
                        automatizan tus procesos, atención a clientes 24/7 y liberan a tu equipo para vender más y cometer menos errores.
                        Hecho a tu medida para resultados reales.
                    </p>

                    {/* CTAs */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '3.5rem',
                        }}
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="hero-cta-asesoria"
                            className="btn btn-primary"
                            style={{ fontSize: '1rem', padding: '0.95rem 2.2rem' }}
                        >
                            <FaCalendarAlt style={{ fontSize: '0.9rem' }} /> Agendar Llamada Gratis
                        </a>
                        <a
                            href="#cases"
                            className="btn btn-secondary"
                            style={{ fontSize: '1rem', padding: '0.95rem 2.2rem' }}
                        >
                            Ver Casos de Éxito <FaArrowRight style={{ fontSize: '0.85rem' }} />
                        </a>
                    </div>

                    {/* Stats row */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            maxWidth: '960px',
                            margin: '0 auto',
                            padding: '1.75rem 0',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        {stats.map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                                        fontWeight: '900',
                                        letterSpacing: '-0.02em',
                                        background: 'linear-gradient(135deg, #00d4ff 0%, #38bdf8 60%, #818cf8 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        color: '#94a3b8',
                                        fontSize: '0.78rem',
                                        fontWeight: '700',
                                        letterSpacing: '0.06em',
                                        marginTop: '0.35rem',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Live System Preview Mockup */}
                    <HeroDashboard />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
