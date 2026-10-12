export const faqs = [
    {
        question: '¿Cómo sé si mi empresa necesita automatizar un proceso empresarial?',
        answer:
            'Si tu equipo dedica horas a tareas repetitivas (copiar datos entre plataformas, responder preguntas frecuentes, conciliar inventario o generar reportes manuales) o si pierdes clientes potenciales por tardar en responder fuera de horario comercial, la automatización e IA te generarán retorno medible desde el primer mes.',
    },
    {
        question: '¿Cuánto tiempo toma implementar una solución con Dathink?',
        answer:
            'Un bot funcional para WhatsApp o una automatización operativa clave puede estar operando en 1 a 2 semanas. Proyectos más complejos con integraciones profundas a CRM, ERP o desarrollos de software a medida toman habitualmente entre 3 y 6 semanas con entregas iterativas.',
    },
    {
        question: '¿Es difícil integrar sus soluciones con mi sistema actual?',
        answer:
            'No. Diseñamos soluciones que se acoplan directamente a las herramientas que ya utilizas (WhatsApp Business, HubSpot, Zoho, Google Workspace, bases de datos SQL/NoSQL, ERPs y webhooks) sin obligarte a cambiar de plataforma ni interrumpir tu operación diaria.',
    },
    {
        question: '¿Nuestras herramientas son compatibles con WhatsApp y CRM?',
        answer:
            'Totalmente. Integramos WhatsApp Business con sistemas CRM líderes y bases de datos personalizadas, permitiendo que cada conversación, lead calificado o cita agendada se registre automáticamente en tu pipeline de ventas.',
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
