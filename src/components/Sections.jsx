import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaBolt,
    FaShieldAlt,
    FaRocket,
    FaChartLine,
    FaCheckCircle,
} from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { buildWhatsAppUrl } from '../data/site';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaría empezar un proyecto con Dathink.');

// Anchor helper for legacy links to #about
export const About = () => (
    <div id="about" style={{ position: 'relative', top: '-80px' }} />
);

// Unified Allies & Contact Section matching the design image
export const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const benefits = [
        {
            title: 'Escalabilidad Inmediata',
            desc: 'Crece en volumen de operaciones sin disparar tus costos fijos ni sobrecargar a tu equipo.',
            icon: FaBolt,
            color: '#00d4ff',
        },
        {
            title: 'Soporte Continuo',
            desc: 'Acompañamiento técnico, monitoreo y mantenimiento proactivo siempre disponible.',
            icon: FaShieldAlt,
            color: '#a855f7',
        },
        {
            title: 'Transformación Integral',
            desc: 'Modernizamos tus procesos con herramientas de última generación adaptadas a tu realidad.',
            icon: FaRocket,
            color: '#38bdf8',
        },
        {
            title: 'Retorno de Inversión Claro',
            desc: 'Soluciones diseñadas para generar ahorros e ingresos medibles desde el primer mes.',
            icon: FaChartLine,
            color: '#22c55e',
        },
    ];

    return (
        <section
            id="contact"
            className="section-padding"
            style={{
                position: 'relative',
                background: 'linear-gradient(to bottom, rgba(5, 10, 20, 0.4), rgba(3, 7, 14, 0.95))',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
                        gap: '3.5rem',
                        alignItems: 'center',
                    }}
                >
                    {/* Left Column: Beneficios de ser Nuestro Aliado */}
                    <div>
                        <span className="section-badge">
                            IMPULSA TU CRECIMIENTO
                        </span>

                        <h2
                            style={{
                                fontSize: 'clamp(2.3rem, 4.2vw, 3.2rem)',
                                fontWeight: '900',
                                lineHeight: '1.15',
                                marginBottom: '1.25rem',
                                color: '#ffffff',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Beneficios de ser <br />
                            <span className="text-gradient">Nuestro Aliado</span>
                        </h2>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.05rem',
                                lineHeight: '1.7',
                                marginBottom: '2.5rem',
                            }}
                        >
                            Potencia tu empresa y acompaña el camino de la innovación. Brindamos soporte total para que tu proyecto genere un retorno de inversión comprobable desde las primeras semanas.
                        </p>

                        {/* 4 Feature mini cards (2x2 grid) */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1.25rem',
                            }}
                        >
                            {benefits.map((item, index) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="glass"
                                        style={{
                                            padding: '1.35rem',
                                            borderRadius: '16px',
                                            background: 'rgba(12, 21, 37, 0.65)',
                                            border: '1px solid rgba(255, 255, 255, 0.07)',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '38px',
                                                height: '38px',
                                                borderRadius: '10px',
                                                background: `${item.color}15`,
                                                border: `1px solid ${item.color}35`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: item.color,
                                                fontSize: '1rem',
                                                marginBottom: '0.85rem',
                                            }}
                                        >
                                            <ItemIcon />
                                        </div>
                                        <h4
                                            style={{
                                                fontWeight: '800',
                                                marginBottom: '0.35rem',
                                                fontSize: '0.98rem',
                                                color: '#ffffff',
                                            }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            style={{
                                                color: 'var(--text-muted)',
                                                fontSize: '0.84rem',
                                                lineHeight: 1.55,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Empecemos un Proyecto (Contact Form) */}
                    <div
                        className="glass"
                        style={{
                            padding: '2.75rem 2.25rem',
                            borderRadius: '24px',
                            background: 'rgba(12, 21, 37, 0.85)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 212, 255, 0.08)',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.75rem',
                                fontWeight: '900',
                                marginBottom: '0.4rem',
                                color: '#ffffff',
                            }}
                        >
                            Empecemos un Proyecto
                        </h3>
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.92rem',
                                marginBottom: '2rem',
                                lineHeight: '1.5',
                            }}
                        >
                            Cuéntanos tu reto y te contactaremos en menos de 24 horas con una solución a tu medida.
                        </p>

                        {status === 'success' ? (
                            <div
                                style={{
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.25)',
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', color: '#22c55e' }}>
                                    <FaCheckCircle />
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
                                    ¡Solicitud Enviada con Éxito!
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                    Gracias por escribirnos. Nuestro equipo comercial analizará tus requerimientos y te contactará en breve.
                                </p>
                                <button
                                    onClick={() => setStatus('')}
                                    className="btn btn-secondary"
                                    style={{ marginTop: '1.5rem', fontSize: '0.85rem', padding: '0.6rem 1.4rem' }}
                                >
                                    Enviar otra consulta
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: '0.82rem',
                                            fontWeight: '700',
                                            color: '#cbd5e1',
                                            marginBottom: '0.45rem',
                                        }}
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Ej. Carlos Martínez"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.9rem 1.1rem',
                                            background: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: '#ffffff',
                                            borderRadius: '12px',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                                    />
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: '0.82rem',
                                            fontWeight: '700',
                                            color: '#cbd5e1',
                                            marginBottom: '0.45rem',
                                        }}
                                    >
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="carlos@tuempresa.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.9rem 1.1rem',
                                            background: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: '#ffffff',
                                            borderRadius: '12px',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                                    />
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: '0.82rem',
                                            fontWeight: '700',
                                            color: '#cbd5e1',
                                            marginBottom: '0.45rem',
                                        }}
                                    >
                                        ¿Qué proceso deseas automatizar?
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Describe brevemente tus procesos, número de clientes o el reto a solucionar..."
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.9rem 1.1rem',
                                            background: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: '#ffffff',
                                            borderRadius: '12px',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            fontFamily: 'inherit',
                                            resize: 'vertical',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        opacity: status === 'loading' ? 0.75 : 1,
                                        cursor: status === 'loading' ? 'wait' : 'pointer',
                                    }}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Enviando solicitud...' : 'Enviar Solicitud'}
                                </button>

                                {status === 'error' && (
                                    <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.85rem' }}>
                                        Hubo un error al enviar el mensaje. También puedes escribirnos directamente por WhatsApp.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer component matching the 4-column design in the image
export const Footer = () => (
    <footer
        style={{
            padding: '5rem 0 2rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(4, 8, 16, 0.98)',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
        }}
    >
        <div className="container">
            {/* Top 4 Columns */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '3.5rem',
                }}
            >
                {/* Column 1: Brand */}
                <div>
                    <a
                        href="/#home"
                        style={{
                            fontSize: '1.45rem',
                            fontWeight: '900',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '1rem',
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Dathink Logo"
                            style={{
                                height: '34px',
                                width: '34px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                        <span className="text-gradient">DATHINK</span>
                    </a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '300px' }}>
                        Ayudamos a las empresas a optimizar sus operaciones con soluciones de automatización e IA en Colombia y Latinoamérica.
                    </p>
                </div>

                {/* Column 2: Soluciones */}
                <div>
                    <h4
                        style={{
                            color: '#ffffff',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}
                    >
                        SOLUCIONES
                    </h4>
                    <ul style={{ display: 'grid', gap: '0.75rem', fontSize: '0.88rem' }}>
                        <li>
                            <Link to="/service/custom-apps" className="hover:text-primary">
                                Automatizaciones a Medida
                            </Link>
                        </li>
                        <li>
                            <Link to="/service/ai-agents" className="hover:text-primary">
                                Agentes de IA
                            </Link>
                        </li>
                        <li>
                            <Link to="/service/data-analytics" className="hover:text-primary">
                                Análisis de Datos e BI
                            </Link>
                        </li>
                        <li>
                            <Link to="/service/digital-marketing" className="hover:text-primary">
                                Marketing Digital
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Empresa */}
                <div>
                    <h4
                        style={{
                            color: '#ffffff',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}
                    >
                        EMPRESA
                    </h4>
                    <ul style={{ display: 'grid', gap: '0.75rem', fontSize: '0.88rem' }}>
                        <li>
                            <a href="/#home" className="hover:text-primary">Inicio</a>
                        </li>
                        <li>
                            <a href="/#cases" className="hover:text-primary">Casos de Éxito</a>
                        </li>
                        <li>
                            <a href="/#testimonials" className="hover:text-primary">Testimonios</a>
                        </li>
                        <li>
                            <a href="/#blog" className="hover:text-primary">Blog &amp; Recursos</a>
                        </li>
                        <li>
                            <a href="/#faq" className="hover:text-primary">Preguntas Frecuentes</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contacto & Redes */}
                <div>
                    <h4
                        style={{
                            color: '#ffffff',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}
                    >
                        CONTACTO &amp; REDES
                    </h4>
                    <div style={{ display: 'grid', gap: '0.85rem', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25D366' }}
                        >
                            <FaWhatsapp style={{ fontSize: '1.1rem' }} /> +57 (315) 122-1814
                        </a>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaEnvelope style={{ color: 'var(--primary)' }} /> contacto@dathink.com.co
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaMapMarkerAlt style={{ color: '#a855f7' }} /> Medellín, Colombia &bull; Remoto
                        </div>
                    </div>

                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a
                            href="https://www.linkedin.com/company/105494935/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/dathink_sas_col"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61594401025622"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#3b82f6')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Privacy */}
            <div
                style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                    paddingTop: '1.75rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.82rem',
                }}
            >
                <div>&copy; {new Date().getFullYear()} Dathink. Todos los derechos reservados.</div>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <Link to="/privacy" style={{ color: 'var(--text-muted)' }} className="hover:text-primary">
                        Políticas de Privacidad
                    </Link>
                    <span>&bull;</span>
                    <Link to="/privacy" style={{ color: 'var(--text-muted)' }} className="hover:text-primary">
                        Términos del Servicio
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);
