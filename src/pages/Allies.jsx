import { FaBuilding, FaAws, FaGoogle, FaMicrosoft, FaSlack } from 'react-icons/fa';
import { motion } from 'framer-motion';
import frutymaxLogo from '../assets/frutymax_logo.png';

const Allies = () => {
    const partners = [
        { name: 'TechSolutions Inc', icon: FaBuilding },
        { name: 'Cloud Corp', icon: FaAws },
        { name: 'InnovateX', icon: FaGoogle },
        { name: 'SoftSystems', icon: FaMicrosoft },
        { name: 'ConnectHub', icon: FaSlack },
        { name: 'FrutyMax', icon: frutymaxLogo },
    ];

    const testimonials = [
        {
            name: "FrutyMax",
            role: "Despulpadora de Fruta",
            text: "Gracias a estas soluciones, logramos optimizar nuestros procesos internos, mejorar el control operativo y aumentar la visibilidad de la marca en canales digitales. Destacamos el profesionalismo, la atención al detalle y el acompañamiento constante de Dathink.",
            rating: 5
        },
        {
            name: "Carlos Rodriguez",
            role: "CEO, FinTech Colombia",
            text: "La transformación digital que logramos con Dathink fue impresionante. Sus agentes de IA redujeron nuestros tiempos de respuesta en un 60%.",
            rating: 5
        },
        {
            name: "Ana Martinez",
            role: "Directora de Operaciones, Logística Global",
            text: "El dashboard de BI que implementaron nos dio visibilidad total de nuestra cadena de suministro. Un socio estratégico indispensable.",
            rating: 5
        },
        {
            name: "Felipe Gomez",
            role: "Gerente de Marketing, Retail Plus",
            text: "Gracias a su estrategia de datos, nuestras campañas de marketing ahora tienen un ROI del 200%. Profesionales y efectivos.",
            rating: 4
        }
    ];

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            {/* Header */}
            <section className="section-padding text-center">
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                        Nuestros <span className="text-gradient">Aliados y Casos de Éxito</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Colaboramos con empresas líderes para construir el futuro. Conoce a quienes confían en nosotros y lo que dicen sobre nuestro trabajo.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Empresas que Confían en Dathink</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ textAlign: 'center', fontSize: '4rem', color: 'var(--text-muted)', opacity: 0.7 }}
                                whileHover={{ scale: 1.1, color: 'var(--primary)', opacity: 1 }}
                            >
                                {typeof partner.icon === 'string' ? (
                                    <img src={partner.icon} alt={partner.name} style={{ height: '1em', objectFit: 'contain' }} />
                                ) : (
                                    <partner.icon />
                                )}
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '600' }}>{partner.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Experiencias de Nuestros Clientes</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass"
                                style={{ padding: '2rem', borderRadius: '15px' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} style={{ opacity: i < item.rating ? 1 : 0.3 }}>★</span>
                                    ))}
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{item.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>{item.name}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <div className="container glass" style={{ padding: '4rem', borderRadius: '20px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Listo para ser nuestro próximo caso de éxito?</h2>
                    <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Empezar Ahora</a>
                </div>
            </section>
        </div>
    );
};

export default Allies;
