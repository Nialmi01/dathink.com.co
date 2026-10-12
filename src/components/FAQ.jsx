import { useState } from 'react';
import { faqs } from '../data/faq';
import { FaChevronDown } from 'react-icons/fa';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section id="faq" className="section-padding">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-badge">
                        ✦ RESUELVE TUS DUDAS
                    </span>
                    <h2 className="section-title">
                        Preguntas <span className="text-gradient">Frecuentes</span>
                    </h2>
                    <p className="section-subtitle">
                        Respuestas rápidas a las dudas más comunes sobre la implementación de automatización, IA y software a medida en Colombia.
                    </p>
                </div>

                {/* Accordion list */}
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '880px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="glass"
                                style={{
                                    borderRadius: '16px',
                                    border: isOpen ? '1px solid rgba(0, 212, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                                    background: isOpen ? 'rgba(14, 25, 45, 0.85)' : 'rgba(12, 21, 37, 0.7)',
                                    overflow: 'hidden',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.4rem 1.6rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        gap: '1rem',
                                    }}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <span
                                        style={{
                                            color: isOpen ? 'var(--primary)' : '#64748b',
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.25s ease, color 0.25s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '0.9rem',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <FaChevronDown />
                                    </span>
                                </button>
                                {isOpen && (
                                    <div
                                        style={{
                                            padding: '0 1.6rem 1.5rem 1.6rem',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.94rem',
                                            lineHeight: 1.7,
                                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                            paddingTop: '1rem',
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
