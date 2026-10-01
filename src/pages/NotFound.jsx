import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { pageMeta } from '../data/pageMeta';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl } from '../data/site';

const WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero asesoria para automatizar procesos en mi empresa.');

const NotFound = () => {
    return (
        <main style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--bg-dark)' }}>
            <SEO {...pageMeta.notFound} schemas={[]} />
            <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
                <p style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>404</p>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1rem' }}>
                    Esta página no existe
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    Puede que el enlace haya cambiado o que la dirección esté mal escrita.
                    Explora nuestras soluciones o escríbenos y te ayudamos a encontrar lo que buscas.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <Link to="/" className="btn btn-primary">Ir al Inicio</Link>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn glass">
                        Escribir por WhatsApp
                    </a>
                </div>

                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Nuestros servicios</h2>
                <ul style={{ display: 'grid', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    {servicesData.map((service) => (
                        <li key={service.id}>
                            <Link to={`/service/${service.id}`} style={{ color: 'var(--primary)', fontWeight: '600' }}>
                                {service.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default NotFound;
