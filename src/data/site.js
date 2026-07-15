export const SITE_URL = 'https://www.dathink.com.co';
export const SITE_NAME = 'Dathink';
export const WHATSAPP_NUMBER = '573151221814';

export const buildWhatsAppUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: `${SITE_URL}/logo.jpg`,
    description:
        'Empresa colombiana especializada en automatizacion de procesos, inteligencia artificial, software a medida y transformacion digital para PYMEs.',
    telephone: '+57-315-122-1814',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'CO',
        addressRegion: 'Antioquia',
        addressLocality: 'Medellin',
    },
    areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'City', name: 'Medellin' },
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+57-315-122-1814',
        contactType: 'customer service',
        availableLanguage: ['Spanish'],
    },
    sameAs: [
        'https://www.linkedin.com/company/dathink',
        'https://www.instagram.com/dathink_sas_col',
    ],
};
