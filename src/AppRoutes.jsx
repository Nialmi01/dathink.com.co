import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Sections';
import Home from './pages/Home';
import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppUrl } from './data/site';

// La home va eager (es la landing y define el LCP); el resto de rutas se
// dividen en chunks que solo se descargan al visitarlas.
const defaultRouteComponents = {
  ServiceDetail: lazy(() => import('./pages/ServiceDetail')),
  PrivacyPolicy: lazy(() => import('./pages/PrivacyPolicy')),
  Allies: lazy(() => import('./pages/Allies')),
  ThankYou: lazy(() => import('./pages/ThankYou')),
  BlogArticle: lazy(() => import('./pages/BlogArticle')),
  NotFound: lazy(() => import('./pages/NotFound')),
};

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
    <span
      role="status"
      aria-label="Cargando contenido"
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        border: '3px solid rgba(255,255,255,0.15)',
        borderTopColor: 'var(--primary)',
        animation: 'dathink-spin 0.8s linear infinite',
      }}
    />
  </div>
);

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me gustaria obtener mas informacion sobre los servicios de Dathink.');

/**
 * Cuerpo de la app sin Router propio: lo monta App.jsx con BrowserRouter
 * (cliente) y el prerender con StaticRouter (build).
 *
 * `components` permite al prerender inyectar las paginas ya importadas de forma
 * sincrona: si renderizara con React.lazy, el HTML estatico saldria con el
 * fallback de Suspense en lugar del contenido real.
 */
function AppRoutes({ components }) {
  const {
    ServiceDetail,
    PrivacyPolicy,
    Allies,
    ThankYou,
    BlogArticle,
    NotFound,
  } = components || defaultRouteComponents;

  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/allies" element={<Allies />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/gracias" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros por WhatsApp"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          animation: 'whatsapp-pulse 2s infinite',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
        }}
      >
        <FaWhatsapp style={{ color: '#fff', fontSize: '32px' }} />
      </a>

      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes dathink-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

export default AppRoutes;
