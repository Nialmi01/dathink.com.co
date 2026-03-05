import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section className="section-padding" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <div className="glass" style={{ padding: '3rem', borderRadius: '20px', background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
                        ¡Mensaje Enviado Correctamente!
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Gracias por contactarnos. Nuestro equipo comercial ha recibido tu mensaje
                        y se comunicará contigo muy pronto.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                        También hemos enviado una confirmación a tu correo electrónico.
                    </p>
                    <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', padding: '0.8rem 2rem' }}>
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
