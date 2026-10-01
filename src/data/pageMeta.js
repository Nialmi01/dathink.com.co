/**
 * Metadatos de las rutas estaticas. Fuente unica: los consumen las paginas
 * (via <SEO />) y el prerender de build (src/ssr/entry-server.jsx).
 */
export const pageMeta = {
    home: {
        path: '/',
        title: 'Automatización de Procesos e IA para Empresas | Dathink',
        description:
            'Automatizamos procesos con bots de WhatsApp, agentes de IA y software a medida para empresas en Colombia. Reduce costos, gana tiempo y escala con Dathink.',
        keywords: [
            'automatizacion de procesos',
            'inteligencia artificial para empresas',
            'bots de WhatsApp para empresas',
            'agentes de IA',
            'software a medida',
            'transformacion digital PYME',
        ],
        changefreq: 'weekly',
        priority: '1.0',
    },
    allies: {
        path: '/allies',
        title: 'Casos de Éxito de Automatización e IA | Dathink',
        description:
            'Empresas que digitalizaron procesos, mejoraron trazabilidad y redujeron errores operativos con Dathink. Conoce nuestros aliados y resultados reales.',
        keywords: ['casos de exito automatizacion', 'aliados Dathink', 'transformacion digital empresas'],
        changefreq: 'monthly',
        priority: '0.7',
    },
    privacy: {
        path: '/privacy',
        title: 'Política de Privacidad y Tratamiento de Datos | Dathink',
        description:
            'Política de privacidad y tratamiento de datos personales de Dathink, conforme a la Ley 1581 de 2012 y estándares internacionales de protección de datos.',
        keywords: ['politica de privacidad', 'tratamiento de datos personales', 'Dathink'],
        changefreq: 'yearly',
        priority: '0.3',
    },
    gracias: {
        path: '/gracias',
        title: 'Gracias por Contactar a Dathink',
        description: 'Gracias por escribirnos. El equipo de Dathink revisara tu solicitud y se comunicara contigo muy pronto.',
        keywords: ['contacto Dathink'],
        robots: 'noindex, nofollow',
        sitemap: false,
    },
    notFound: {
        path: '/404',
        title: 'Página no encontrada | Dathink',
        description: 'La página que buscas no existe o cambió de dirección. Explora nuestros servicios de automatización, IA y software a medida.',
        robots: 'noindex, follow',
        sitemap: false,
    },
};
