export const faqs = [
    {
        question: 'Cuanto cuesta automatizar un proceso empresarial?',
        answer:
            'Depende del alcance, las integraciones y la complejidad del flujo. En Dathink empezamos con una asesoria para identificar procesos de alto impacto y proponer una ruta por fases.',
    },
    {
        question: 'En cuanto tiempo se implementa un bot de WhatsApp?',
        answer:
            'Un primer bot funcional puede estar listo en pocas semanas si el flujo esta claro. Los proyectos con CRM, inventario, pagos o agentes de IA avanzados requieren mas validacion e integraciones.',
    },
    {
        question: 'Dathink trabaja con empresas fuera de Medellin?',
        answer:
            'Si. Atendemos empresas en Medellin, Antioquia y el resto de Colombia mediante reuniones remotas, diagnostico de procesos y seguimiento digital.',
    },
    {
        question: 'Pueden integrarse con mi CRM o sistema actual?',
        answer:
            'Si. Disenamos automatizaciones e integraciones con CRMs, hojas de calculo, bases de datos, formularios, WhatsApp Business, dashboards y sistemas internos.',
    },
];

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};
