const testimonials = [
    {
        name: 'Carlos Mejía',
        role: 'Gerente General',
        company: 'Distribuidora del Valle',
        quote: 'Gracias a los bots de WhatsApp de Dathink, redujimos el tiempo de atención al cliente en un 70%. Nuestro equipo ahora se enfoca en lo que realmente importa.',
        avatar: '👨‍💼',
        rating: 5,
    },
    {
        name: 'Laura Gómez',
        role: 'Directora Comercial',
        company: 'Grupo Inmobiliario Andino',
        quote: 'Implementaron un sistema de automatización de seguimiento de leads que triplicó nuestras conversiones en 2 meses. El ROI fue inmediato.',
        avatar: '👩‍💼',
        rating: 5,
    },
    {
        name: 'Andrés Torres',
        role: 'CEO',
        company: 'LogiTech Soluciones',
        quote: 'El software a medida que desarrollaron integró todos nuestros sistemas en uno solo. Ahorramos 40 horas semanales en procesos manuales.',
        avatar: '👨‍💻',
        rating: 5,
    },
];

const Stars = ({ count }) => (
    <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '1rem' }}>
        {'★'.repeat(count)}
    </div>
);

export const Testimonials = () => (
    <section id="testimonials" className="section-padding" style={{ background: 'rgba(0,212,255,0.02)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Lo que dicen <span className="text-gradient">Nuestros Clientes</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Empresas colombianas que ya transformaron sus operaciones con Dathink.
                </p>
            </div>
            <div className="grid-auto-fit">
                {testimonials.map((t, i) => (
                    <div key={i} className="glass" style={{
                        padding: '2rem',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        transition: 'transform 0.3s',
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <Stars count={t.rating} />
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>
                            "{t.quote}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                            <div style={{
                                width: '48px', height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(0,212,255,0.1)',
                                border: '1px solid rgba(0,212,255,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>{t.avatar}</div>
                            <div>
                                <div style={{ fontWeight: '700', color: '#fff' }}>{t.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{t.role} · {t.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
