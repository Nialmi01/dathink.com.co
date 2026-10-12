import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle, FaBolt, FaDatabase, FaCogs, FaRobot } from 'react-icons/fa';

export const HeroDashboard = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '1100px',
                margin: '3.5rem auto 0 auto',
                background: 'rgba(10, 18, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 212, 255, 0.12)',
                overflow: 'hidden',
                textAlign: 'left',
            }}
        >
            {/* Window Top Bar */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(6, 11, 20, 0.95)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                    <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }}></span>
                    <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                    <span style={{ marginLeft: '12px', fontSize: '0.78rem', color: '#64748b', fontFamily: 'monospace' }}>
                        dashboard.dathink.io &bull; live-system-monitor
                    </span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#22c55e',
                        background: 'rgba(34, 197, 94, 0.12)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(34, 197, 94, 0.25)',
                    }}
                >
                    <span
                        style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            boxShadow: '0 0 8px #22c55e',
                            display: 'inline-block',
                        }}
                    ></span>
                    Sistema Activo &bull; 99.9% Uptime
                </div>
            </div>

            {/* Dashboard Inner Grid (3 Columns) */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.25rem',
                    padding: '1.5rem',
                }}
            >
                {/* Column 1: WhatsApp Channel */}
                <div
                    style={{
                        background: 'rgba(14, 24, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: '#25D366',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    <FaWhatsapp />
                                </div>
                                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff', letterSpacing: '0.04em' }}>
                                    CANAL WHATSAPP ACTIVO
                                </span>
                            </div>
                            <span
                                style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    color: '#22c55e',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                }}
                            >
                                &bull; ONLINE
                            </span>
                        </div>

                        {/* Simulated Chat */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
                            {/* User bubble 1 */}
                            <div
                                style={{
                                    alignSelf: 'flex-start',
                                    background: 'rgba(255, 255, 255, 0.07)',
                                    color: '#e2e8f0',
                                    padding: '0.65rem 0.85rem',
                                    borderRadius: '12px 12px 12px 2px',
                                    maxWidth: '85%',
                                    lineHeight: '1.4',
                                }}
                            >
                                <div>Hola, necesito automatizar la atención a clientes y agendar citas.</div>
                                <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', textAlign: 'right', marginTop: '3px' }}>10:24 AM</span>
                            </div>

                            {/* Bot bubble 1 */}
                            <div
                                style={{
                                    alignSelf: 'flex-end',
                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.18), rgba(0, 100, 255, 0.22))',
                                    border: '1px solid rgba(0, 212, 255, 0.25)',
                                    color: '#f8fafc',
                                    padding: '0.65rem 0.85rem',
                                    borderRadius: '12px 12px 2px 12px',
                                    maxWidth: '88%',
                                    lineHeight: '1.4',
                                }}
                            >
                                <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.72rem', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <FaRobot /> Dathink AI Agent
                                </div>
                                <div>¡Hola! Con gusto. Nuestro sistema atiende 24/7 y sincroniza citas con tu calendario. ¿Qué día prefieres?</div>
                                <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block', textAlign: 'right', marginTop: '3px' }}>10:24 AM</span>
                            </div>

                            {/* User bubble 2 */}
                            <div
                                style={{
                                    alignSelf: 'flex-start',
                                    background: 'rgba(255, 255, 255, 0.07)',
                                    color: '#e2e8f0',
                                    padding: '0.55rem 0.75rem',
                                    borderRadius: '12px 12px 12px 2px',
                                    maxWidth: '85%',
                                    lineHeight: '1.4',
                                }}
                            >
                                <div>El jueves por la tarde estaría perfecto.</div>
                                <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', textAlign: 'right', marginTop: '3px' }}>10:25 AM</span>
                            </div>

                            {/* Bot bubble 2 */}
                            <div
                                style={{
                                    alignSelf: 'flex-end',
                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.18), rgba(0, 100, 255, 0.22))',
                                    border: '1px solid rgba(0, 212, 255, 0.25)',
                                    color: '#f8fafc',
                                    padding: '0.55rem 0.75rem',
                                    borderRadius: '12px 12px 2px 12px',
                                    maxWidth: '88%',
                                    lineHeight: '1.4',
                                }}
                            >
                                <div>¡Listo! Quedó agendada para el jueves a las 3:00 PM. Confirmación enviada a tu CRM.</div>
                                <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block', textAlign: 'right', marginTop: '3px' }}>10:25 AM</span>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: '1rem',
                            padding: '0.55rem 0.75rem',
                            background: 'rgba(0, 212, 255, 0.05)',
                            border: '1px solid rgba(0, 212, 255, 0.15)',
                            borderRadius: '8px',
                            fontSize: '0.72rem',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                    >
                        <FaBolt /> Respuesta Inmediata (0.4s) &bull; 100% Citas Sincronizadas
                    </div>
                </div>

                {/* Column 2: Operations Impact & Chart */}
                <div
                    style={{
                        background: 'rgba(14, 24, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff', letterSpacing: '0.04em' }}>
                                IMPACTO EN OPERACIONES
                            </span>
                            <span
                                style={{
                                    fontSize: '0.7rem',
                                    color: '#94a3b8',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '9999px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                Últimos 30 días
                            </span>
                        </div>

                        {/* Big Metric */}
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '0.25rem' }}>
                            <div
                                style={{
                                    fontSize: '2.4rem',
                                    fontWeight: '900',
                                    letterSpacing: '-0.02em',
                                    background: 'linear-gradient(135deg, #00d4ff, #38bdf8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                -74%
                            </div>
                            <span
                                style={{
                                    fontSize: '0.72rem',
                                    fontWeight: '700',
                                    color: '#22c55e',
                                    background: 'rgba(34, 197, 94, 0.12)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                }}
                            >
                                ▲ Eficiencia récord
                            </span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem' }}>
                            Tiempo promedio de respuesta operativa
                        </p>

                        {/* Spline Area Chart */}
                        <div style={{ width: '100%', height: '110px', position: 'relative' }}>
                            <svg viewBox="0 0 300 110" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                <defs>
                                    <linearGradient id="cyanAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.45" />
                                        <stop offset="60%" stopColor="#00d4ff" stopOpacity="0.1" />
                                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Grid lines */}
                                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                                {/* Filled gradient curve */}
                                <path
                                    d="M 0 85 Q 50 80, 90 65 T 180 50 T 240 25 T 300 15 L 300 110 L 0 110 Z"
                                    fill="url(#cyanAreaGradient)"
                                />

                                {/* Glowing Stroke line */}
                                <path
                                    d="M 0 85 Q 50 80, 90 65 T 180 50 T 240 25 T 300 15"
                                    fill="none"
                                    stroke="#00d4ff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />

                                {/* Pulse Data Point at end */}
                                <circle cx="300" cy="15" r="4.5" fill="#00d4ff" />
                                <circle cx="300" cy="15" r="8" fill="rgba(0,212,255,0.4)" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom mini stats */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.75rem' }}>
                        <div
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.6rem 0.75rem',
                                borderRadius: '10px',
                            }}
                        >
                            <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Consultas resueltas</div>
                            <div style={{ fontSize: '1rem', fontWeight: '800', color: '#fff' }}>1.4 mil+</div>
                        </div>
                        <div
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.6rem 0.75rem',
                                borderRadius: '10px',
                            }}
                        >
                            <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Tasa satisfacción</div>
                            <div style={{ fontSize: '1rem', fontWeight: '800', color: '#22c55e' }}>98.6%</div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Active Connections */}
                <div
                    style={{
                        background: 'rgba(14, 24, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff', letterSpacing: '0.04em' }}>
                                CONEXIONES ACTIVAS
                            </span>
                            <span
                                style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    color: 'var(--primary)',
                                    background: 'rgba(0, 212, 255, 0.1)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(0, 212, 255, 0.2)',
                                }}
                            >
                                4 Activas
                            </span>
                        </div>

                        {/* Integration rows */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {[
                                { name: 'WhatsApp Business API', icon: FaWhatsapp, color: '#25D366', status: 'Conectado' },
                                { name: 'HubSpot / CRM Ventas', icon: FaDatabase, color: '#00d4ff', status: 'Sincronizado' },
                                { name: 'n8n Automatizaciones', icon: FaCogs, color: '#a855f7', status: 'Activo' },
                                { name: 'Agentes IA & Webhooks', icon: FaRobot, color: '#38bdf8', status: 'Tiempo real' },
                            ].map((item, idx) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '0.55rem 0.75rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <ItemIcon style={{ color: item.color, fontSize: '0.9rem' }} />
                                            <span style={{ fontSize: '0.78rem', color: '#f1f5f9', fontWeight: '500' }}>{item.name}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', color: '#22c55e', fontWeight: '600' }}>
                                            <FaCheckCircle style={{ fontSize: '0.65rem' }} /> {item.status}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Status Banner */}
                    <div
                        style={{
                            marginTop: '1rem',
                            padding: '0.75rem',
                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 85, 255, 0.15))',
                            border: '1px solid rgba(0, 212, 255, 0.25)',
                            borderRadius: '10px',
                            textAlign: 'center',
                        }}
                    >
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#fff', letterSpacing: '0.04em' }}>
                            FLUJO AUTOMATIZADO ACTIVO
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--primary)', marginTop: '2px' }}>
                            100% Disponibilidad sin interrupciones
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
