import { motion } from 'framer-motion';
import HeroBg from '../assets/hero_background.png';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // For navbar
        }}>
            {/* Background with overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${HeroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -2
            }}></div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 1))',
                zIndex: -1
            }}></div>

            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '50px',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        marginBottom: '1.5rem',
                        color: 'var(--primary)',
                        fontWeight: '600'
                    }}>
                        Innovación Tecnológica
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        De Datos a <br />
                        <span className="text-gradient">Resultados</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--text-muted)'
                    }}>
                        El camino digital con Dathink. Creamos agentes de IA, aplicaciones a medida y estrategias de marketing para potenciar tu PYME.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#contact" className="btn btn-primary">Contáctanos</a>
                        <a href="#services" className="btn glass">Nuestros Servicios</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
