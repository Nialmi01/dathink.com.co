import { useState } from 'react';
import AboutImg from '../assets/ai_agents.png';

// About.jsx
export const About = () => {
    const benefits = [
        {
            title: "Consultoría Tecnológica Integral",
            desc: "Asesoramiento experto para tomar las mejores decisiones tecnológicas.",
            icon: "💡"
        },
        {
            title: "Soporte Técnico Prioritario",
            desc: "Atención preferencial para garantizar la continuidad de tu negocio.",
            icon: "🛠️"
        },
        {
            title: "Transformación Digital",
            desc: "Hoja de ruta clara para modernizar y optimizar tus procesos.",
            icon: "🚀"
        },
        {
            title: "Optimización de Costos TI",
            desc: "Soluciones eficientes que maximizan tu retorno de inversión.",
            icon: "💰"
        }
    ];

    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden', minHeight: '400px' }}>
                        <img src={AboutImg} alt="Innovación Dathink" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', leading: '1.1' }}>
                            Beneficios de ser <span className="text-gradient">Nuestro Aliado</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Al sumarte a nuestro portafolio de clientes, obtienes mucho más que un servicio; ganas un socio estratégico comprometido con el crecimiento sostenible de tu empresa.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {benefits.map((item, index) => (
                                <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '15px', display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                                    <div style={{ fontSize: '2rem', lineHeight: 1 }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Contact.jsx
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
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'linear-gradient(to top, #000, transparent)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Empecemos un Proyecto</h2>
                <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Cuéntanos tu idea y la llevaremos al siguiente nivel.</p>

                {status === 'success' ? (
                    <div className="glass" style={{ padding: '3rem', borderRadius: '20px', textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>¡Mensaje Enviado Correctamente!</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Gracias por contactarnos. Nuestro equipo comercial ha recibido tu mensaje y se comunicará contigo muy pronto.</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>También hemos enviado una confirmación a tu correo electrónico.</p>
                        <button onClick={() => setStatus('')} className="btn" style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer' }}>Enviar otro mensaje</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="glass" style={{ padding: '3rem', borderRadius: '20px', textAlign: 'left', display: 'grid', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <input type="text" name="name" required placeholder="Nombre" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '10px' }} />
                            <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '10px' }} />
                        </div>
                        <textarea name="message" required placeholder="Mensaje" rows="4" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '10px' }}></textarea>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {status === 'error' && (
                            <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
};

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Footer.jsx
export const Footer = () => (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover:text-primary"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover:text-primary"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover:text-primary"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover:text-primary"><FaLinkedin /></a>
        </div>
        <p style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} Dathink. Todos los derechos reservados.</p>
        <Link to="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem' }}>
            Política de Privacidad y Tratamiento de Datos
        </Link>
    </footer>
);
