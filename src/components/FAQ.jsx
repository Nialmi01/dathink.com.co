import { faqs } from '../data/faq';

export const FAQ = () => (
    <section id="faq" className="section-padding">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Preguntas <span className="text-gradient">Frecuentes</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Respuestas rapidas para empresas que quieren implementar automatizacion, IA y software a medida en Colombia.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
                {faqs.map((faq) => (
                    <details key={faq.question} className="glass" style={{ padding: '1.5rem', borderRadius: '14px' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: '700', fontSize: '1.05rem' }}>{faq.question}</summary>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.7 }}>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);
