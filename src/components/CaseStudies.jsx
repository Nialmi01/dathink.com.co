import { motion } from 'framer-motion';
import { FaBox, FaBuilding, FaHospital, FaShoppingCart, FaExclamationTriangle, FaBolt, FaChartLine } from 'react-icons/fa';

const cases = [
    {
        title: 'Distribución & Logística',
        tag: 'LOGÍSTICA',
        icon: FaBox,
        iconColor: '#f59e0b',
        problem: 'Seguimiento manual de pedidos causaba demoras, errores humanos y sobrecarga constante en atención a clientes.',
        solution: 'Bot de WhatsApp integrado a su sistema de inventario y ERP para rastreo instantáneo y confirmación automática.',
        result: '-70% tiempo de respuesta · Cero demoras en rastreo',
        tagColor: '#00d4ff',
    },
    {
        title: 'Sector Inmobiliario',
        tag: 'INMOBILIARIA',
        icon: FaBuilding,
        iconColor: '#38bdf8',
        problem: 'Pérdida continua de prospectos por demora en responder consultas en portales y redes durante fines de semana.',
        solution: 'Agente de IA 24/7 para calificación automática, envío de fichas técnicas y agendamiento directo con asesores.',
        result: '+200% visitas agendadas · Calificación en tiempo récord',
        tagColor: '#a855f7',
    },
    {
        title: 'Salud & Clínicas',
        tag: 'SALUD',
        icon: FaHospital,
        iconColor: '#22c55e',
        problem: 'Líneas telefónicas saturadas para agendamiento, ausentismo de pacientes y quejas por tiempos de espera.',
        solution: 'Sistema automatizado de agendamiento, confirmación y recordatorios preventivos vía WhatsApp y SMS.',
        result: '+40% citas efectivas · -85% llamadas a recepción',
        tagColor: '#22c55e',
    },
    {
        title: 'E-commerce Multi-Canal',
        tag: 'E-COMMERCE',
        icon: FaShoppingCart,
        iconColor: '#ec4899',
        problem: 'La sincronización manual de ventas e inventario entre plataformas provocaba quiebres de stock y reclamos.',
        solution: 'Integración centralizada con n8n y webhooks que actualiza stock y emite reportes de venta en tiempo real.',
        result: 'Reportes instantáneos · 100% stock sincronizado',
        tagColor: '#00d4ff',
    },
];

export const CaseStudies = () => (
    <section id="cases" className="section-padding">
        <div className="container">
            {/* Header */}
            <div className="section-header">
                <span className="section-badge">
                    ✦ RESULTADOS COMPROBADOS
                </span>
                <h2 className="section-title">
                    Casos de <span className="text-gradient">Éxito Real</span>
                </h2>
                <p className="section-subtitle">
                    Conoce cómo ayudamos a empresas como la tuya a optimizar procesos, reducir costos y multiplicar resultados mediante automatización e IA.
                </p>
            </div>

            {/* 2x2 Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
                    gap: '1.75rem',
                }}
            >
                {cases.map((c, i) => {
                    const IconComponent = c.icon;
                    return (
                        <motion.div
                            key={i}
                            className="glass"
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                padding: '2.2rem 2rem',
                                borderRadius: '20px',
                                background: 'rgba(12, 21, 37, 0.75)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                {/* Header Row */}
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div
                                            style={{
                                                width: '42px',
                                                height: '42px',
                                                borderRadius: '12px',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: c.iconColor,
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            <IconComponent />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
                                            {c.title}
                                        </h3>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '0.72rem',
                                            fontWeight: '700',
                                            color: c.tagColor,
                                            background: `${c.tagColor}15`,
                                            border: `1px solid ${c.tagColor}35`,
                                            padding: '0.3rem 0.75rem',
                                            borderRadius: '9999px',
                                            letterSpacing: '0.06em',
                                        }}
                                    >
                                        {c.tag}
                                    </span>
                                </div>

                                {/* Problem Block */}
                                <div
                                    style={{
                                        padding: '0.9rem 1.1rem',
                                        background: 'rgba(239, 68, 68, 0.06)',
                                        border: '1px solid rgba(239, 68, 68, 0.15)',
                                        borderRadius: '12px',
                                        marginBottom: '0.9rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '800',
                                            color: '#ef4444',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            marginBottom: '0.35rem',
                                            letterSpacing: '0.04em',
                                        }}
                                    >
                                        <FaExclamationTriangle /> PROBLEMA
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.55' }}>
                                        {c.problem}
                                    </p>
                                </div>

                                {/* Solution Block */}
                                <div
                                    style={{
                                        padding: '0.9rem 1.1rem',
                                        background: 'rgba(0, 212, 255, 0.06)',
                                        border: '1px solid rgba(0, 212, 255, 0.15)',
                                        borderRadius: '12px',
                                        marginBottom: '1.25rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '800',
                                            color: 'var(--primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            marginBottom: '0.35rem',
                                            letterSpacing: '0.04em',
                                        }}
                                    >
                                        <FaBolt /> SOLUCIÓN
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.55' }}>
                                        {c.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Result Block */}
                            <div
                                style={{
                                    padding: '0.9rem 1.1rem',
                                    background: 'rgba(34, 197, 94, 0.08)',
                                    border: '1px solid rgba(34, 197, 94, 0.25)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <div
                                    style={{
                                        color: '#22c55e',
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FaChartLine />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#22c55e', letterSpacing: '0.04em' }}>
                                        RESULTADO DESTACADO
                                    </div>
                                    <div style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: '700', marginTop: '2px' }}>
                                        {c.result}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);
