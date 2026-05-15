const cases = [
    {
        industry: 'Distribución & Logística',
        icon: '📦',
        problem: 'Seguimiento manual de pedidos causaba errores y retrasos.',
        solution: 'Bot de WhatsApp + integración con sistema de inventario.',
        result: '70% menos errores, respuesta al cliente en segundos.',
        color: '#00d4ff',
    },
    {
        industry: 'Inmobiliaria',
        icon: '🏠',
        problem: 'El equipo perdía leads por falta de seguimiento rápido.',
        solution: 'Agente de IA para calificación automática de leads 24/7.',
        result: 'Conversión de leads +200% en 60 días.',
        color: '#a855f7',
    },
    {
        industry: 'Salud & Clínicas',
        icon: '🏥',
        problem: 'Agendamiento de citas por teléfono congestionaba la recepción.',
        solution: 'Sistema de agendamiento automático vía WhatsApp.',
        result: '40% más citas, cero llamadas de agendamiento.',
        color: '#22c55e',
    },
    {
        industry: 'E-commerce',
        icon: '🛒',
        problem: 'Reportes de ventas tardaban días en generarse manualmente.',
        solution: 'Dashboard BI automatizado con datos en tiempo real.',
        result: 'Reportes instantáneos, decisiones 10x más rápidas.',
        color: '#f59e0b',
    },
];

export const CaseStudies = () => (
    <section id="cases" className="section-padding">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Casos de <span className="text-gradient">Éxito Real</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Cómo ayudamos a empresas colombianas a reducir costos y aumentar resultados con automatización e IA.
                </p>
            </div>
            <div className="grid-auto-fit">
                {cases.map((c, i) => (
                    <div key={i} className="glass" style={{
                        padding: '2rem',
                        borderRadius: '20px',
                        borderTop: `3px solid ${c.color}`,
                        transition: 'transform 0.3s',
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '700', color: c.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                            {c.industry}
                        </div>
                        <div style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: '600' }}>⚠ PROBLEMA: </span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{c.problem}</span>
                        </div>
                        <div style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.8rem', color: '#00d4ff', fontWeight: '600' }}>💡 SOLUCIÓN: </span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{c.solution}</span>
                        </div>
                        <div style={{
                            marginTop: '1.25rem',
                            padding: '0.75rem 1rem',
                            background: `rgba(${c.color === '#00d4ff' ? '0,212,255' : c.color === '#a855f7' ? '168,85,247' : c.color === '#22c55e' ? '34,197,94' : '245,158,11'},0.08)`,
                            borderRadius: '10px',
                            border: `1px solid ${c.color}33`,
                        }}>
                            <span style={{ fontSize: '0.8rem', color: c.color, fontWeight: '700' }}>✅ RESULTADO: </span>
                            <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600' }}>{c.result}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
