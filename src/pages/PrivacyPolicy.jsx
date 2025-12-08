import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <Link to="/" className="btn glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <FaArrowLeft /> Volver al Inicio
                </Link>

                <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Política de Privacidad y Tratamiento de Datos</h1>

                    <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            En <strong>Dathink</strong>, nos comprometemos a proteger su privacidad y a garantizar el manejo adecuado de sus datos personales, en cumplimiento con la <strong>Ley Estatutaria 1581 de 2012</strong> de Colombia, el Decreto Reglamentario 1377 de 2013, y estándares internacionales como el RGPD (Reglamento General de Protección de Datos).
                        </p>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Responsable del Tratamiento</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Dathink actúa como responsable del tratamiento de los datos personales recolectados a través de este sitio web y en el curso de nuestras relaciones comerciales.
                        </p>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Tratamiento y Finalidad</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Los datos personales recolectados serán utilizados para las siguientes finalidades:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                            <li>Prestación de servicios de desarrollo de software, inteligencia artificial y marketing digital.</li>
                            <li>Envío de información comercial, cotizaciones y novedades sobre nuestros servicios.</li>
                            <li>Facturación y cumplimiento de obligaciones legales y contables.</li>
                            <li>Mejora de la experiencia del usuario y análisis de tráfico web.</li>
                        </ul>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Derechos de los Titulares</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Conforme a la ley colombiana y normativas globales, usted tiene derecho a:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                            <li>Conocer, actualizar y rectificar sus datos personales.</li>
                            <li>Solicitar prueba de la autorización otorgada.</li>
                            <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
                            <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
                            <li>Revocar la autorización y/o solicitar la supresión del dato.</li>
                        </ul>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Seguridad de la Información</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Implementamos medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                        </p>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Uso de Cookies</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Este sitio web utiliza cookies para mejorar la experiencia de navegación. Al utilizar nuestro sitio, usted acepta el uso de estas tecnologías de acuerdo con nuestra política.
                        </p>

                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>6. Contacto</h3>
                        <p>
                            Para ejercer sus derechos de Habeas Data, puede contactarnos a través de nuestra sección de contacto o al correo electrónico corporativo designado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
