import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import './../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/#home' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Nosotros', href: '/#about' },
        { name: 'Aliados', href: '/allies' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`} style={{
            position: 'fixed', top: 0, left: 0, right: 0,
            background: scrolled ? 'rgba(5, 10, 20, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            transition: 'all 0.3s ease',
            zIndex: 1000
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo" style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={Logo} alt="Dathink Logo" style={{ height: '40px', borderRadius: '5px' }} />
                    <span className="text-gradient">DATHINK</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontWeight: '500', fontSize: '1rem' }} className="hover:text-primary transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/#contact" className="btn btn-primary">Empezar</a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="md:hidden" style={{ cursor: 'pointer', fontSize: '1.5rem', zIndex: 60 }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: 'rgba(5, 10, 20, 0.95)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 55,
                        opacity: 1,
                        transition: 'opacity 0.3s ease'
                    }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        style={{ fontSize: '1.5rem', fontWeight: '600' }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="/#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Empezar</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
