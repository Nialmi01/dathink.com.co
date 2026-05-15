const articles = [
    {
        slug: 'automatizar-atencion-cliente-whatsapp',
        title: 'Cómo automatizar la atención al cliente con WhatsApp',
        excerpt: 'Aprende a implementar bots de WhatsApp para responder clientes 24/7 sin aumentar tu equipo.',
        category: 'Automatización',
        color: '#25D366',
        readTime: '5 min',
    },
    {
        slug: '5-procesos-toda-empresa-deberia-automatizar',
        title: '5 procesos que toda empresa debería automatizar en 2025',
        excerpt: 'Desde el seguimiento de leads hasta la facturación: los 5 procesos donde la automatización genera más ROI.',
        category: 'IA para Empresas',
        color: '#00d4ff',
        readTime: '7 min',
    },
    {
        slug: 'reducir-costos-operativos-ia',
        title: 'Cómo reducir costos operativos con inteligencia artificial',
        excerpt: 'Casos reales de empresas colombianas que redujeron costos hasta un 60% implementando IA en sus procesos.',
        category: 'Transformación Digital',
        color: '#a855f7',
        readTime: '6 min',
    },
    {
        slug: 'software-a-medida-vs-software-generico',
        title: 'Software a medida vs. software genérico: ¿cuál conviene más a tu PYME?',
        excerpt: 'Análisis honesto de cuándo vale la pena invertir en desarrollo personalizado y cuándo no.',
        category: 'Software',
        color: '#f59e0b',
        readTime: '8 min',
    },
    {
        slug: 'chatbot-vs-agente-ia',
        title: 'Chatbot básico vs. Agente de IA: diferencias clave para tu negocio',
        excerpt: 'No todos los bots son iguales. Te explicamos cuándo necesitas un agente de IA avanzado.',
        category: 'Inteligencia Artificial',
        color: '#ec4899',
        readTime: '5 min',
    },
    {
        slug: 'dashboard-bi-pymes-colombia',
        title: 'Por qué tu PYME necesita un dashboard de BI en 2025',
        excerpt: 'Visualizar tus datos en tiempo real puede transformar la toma de decisiones de tu empresa.',
        category: 'Análisis de Datos',
        color: '#3b82f6',
        readTime: '6 min',
    },
];

const WHATSAPP_NUMBER = '573151221814';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría recibir el blog de Dathink y agendar una asesoría gratuita.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const BlogPreview = () => (
    <section id="blog" className="section-padding" style={{ background: 'rgba(0,212,255,0.02)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Blog &amp; <span className="text-gradient">Recursos Gratuitos</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Contenido práctico sobre automatización, IA y transformación digital para empresas en Colombia.
                </p>
            </div>

            <div className="grid-auto-fit">
                {articles.map((a, i) => (
                    <article key={i} className="glass" style={{
                        padding: '1.75rem',
                        borderRadius: '18px',
                        borderLeft: `3px solid ${a.color}`,
                        transition: 'transform 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: '700',
                                color: a.color, textTransform: 'uppercase', letterSpacing: '0.08em',
                                background: `${a.color}18`, padding: '0.25rem 0.75rem', borderRadius: '50px'
                            }}>{a.category}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {a.readTime}</span>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', lineHeight: 1.4, color: '#fff' }}>
                            {a.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                            {a.excerpt}
                        </p>
                        <span style={{ color: a.color, fontWeight: '600', fontSize: '0.85rem' }}>
                            Leer artículo →
                        </span>
                    </article>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="blog-cta-asesoria"
                    className="btn btn-primary"
                    style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
                >
                    💬 Habla con un Experto — Gratis
                </a>
            </div>
        </div>
    </section>
);
