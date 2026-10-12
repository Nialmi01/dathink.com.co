import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { buildWhatsAppUrl } from '../data/site';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaría agendar una llamada con Dathink.');

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/#home' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Casos de Éxito', href: '/#cases' },
        { name: 'Testimonios', href: '/#testimonials' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Contacto', href: '/#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: scrolled ? 'rgba(5, 10, 20, 0.92)' : 'rgba(5, 10, 20, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                padding: scrolled ? '0.75rem 0' : '1.15rem 0',
                transition: 'all 0.3s ease',
                zIndex: 1000,
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand Logo */}
                <a
                    href="/#home"
                    style={{
                        fontSize: '1.45rem',
                        fontWeight: '900',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none',
                    }}
                >
                    <img
                        src={Logo}
                        alt="Dathink Logo"
                        style={{
                            height: '36px',
                            width: '36px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                        }}
                    />
                    <span className="text-gradient" style={{ letterSpacing: '0.08em' }}>DATHINK</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{
                                    fontWeight: '500',
                                    fontSize: '0.92rem',
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-cyan"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0.55rem 1.35rem',
                                fontSize: '0.88rem',
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                        >
                            <FaCalendarAlt style={{ fontSize: '0.85rem' }} />
                            Agendar Llamada
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div
                    className="md:hidden"
                    style={{
                        cursor: 'pointer',
                        fontSize: '1.4rem',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(5, 10, 20, 0.98)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 999,
                        }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar menú"
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontSize: '1.8rem',
                                cursor: 'pointer',
                            }}
                        >
                            <FaTimes />
                        </button>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', textAlign: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff' }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li style={{ marginTop: '1rem' }}>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaCalendarAlt /> Agendar Llamada
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
