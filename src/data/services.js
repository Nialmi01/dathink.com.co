import { FaProjectDiagram, FaRobot, FaChartLine, FaChartBar } from 'react-icons/fa';
import CustomAppsImg from '../assets/custom_apps.svg';
import N8nWorkflowImg from '../assets/n8n_workflow.svg';
import MarketingImg from '../assets/marketing.svg';
import DataAnalysisImg from '../assets/data_analysis.svg';

export const servicesData = [
    {
        id: 'custom-apps',
        title: "Automatizaciones a Medida",
        metaTitle: "Automatizaciones a Medida para Empresas en Colombia | Dathink",
        metaDescription: "Desarrollamos automatizaciones a medida, flujos de trabajo e integraciones para eliminar tareas repetitivas y conectar tus sistemas.",
        seoTitle: "Automatizaciones a medida para empresas",
        keywords: ["automatizaciones a medida Colombia", "flujos automatizados", "integracion de sistemas", "software empresarial"],
        icon: FaProjectDiagram,
        desc: "Desarrollamos flujos automáticos que conectan tus herramientas actuales, eliminando tareas repetitivas y acelerando tiempos.",
        longDesc: "Creamos soluciones de software y flujos automatizados robustos adaptados específicamente a los procesos de tu empresa. Conectamos tus herramientas (CRM, ERP, hojas de cálculo, APIs y WhatsApp) para eliminar la fricción operativa y permitir que tu equipo se concentre en tareas de alto valor.",
        features: [
            "Automatización de Procesos End-to-End",
            "Integración de APIs, Webhooks y ERPs",
            "Desarrollo Full Stack a Medida",
            "Monitoreo Continuo y Alta Disponibilidad"
        ],
        color: "#00d4ff",
        image: CustomAppsImg
    },
    {
        id: 'ai-agents',
        title: "Agentes de IA",
        metaTitle: "Agentes de IA para Empresas en Colombia | Dathink",
        metaDescription: "Implementamos agentes de IA, chatbots inteligentes y automatizaciones conectadas a WhatsApp, CRM y sistemas internos.",
        seoTitle: "Agentes de inteligencia artificial para empresas",
        keywords: ["agentes de IA", "inteligencia artificial para empresas", "chatbots inteligentes", "automatizacion con IA"],
        icon: FaRobot,
        desc: "Asistentes de IA inteligentes para atención al cliente, ventas y soporte interno que operan 24/7 con el tono y conocimiento de tu empresa.",
        longDesc: "Revoluciona tu operativa con agentes de Inteligencia Artificial diseñados para trabajar por ti 24/7. Desde atención al cliente automatizada hasta análisis de datos complejos y toma de decisiones, nuestros agentes se integran perfectamente en tu ecosistema digital. Implementamos flujos de trabajo complejos (tipo n8n) para conectar todas tus Apps.",
        features: [
            "Automatización de Flujos de Trabajo (n8n/Make)",
            "Chatbots Inteligentes y Asistentes Virtuales",
            "Procesamiento de Lenguaje Natural (NLP)",
            "Análisis Predictivo de Datos"
        ],
        color: "#a855f7",
        image: N8nWorkflowImg
    },
    {
        id: 'data-analytics',
        title: "Análisis de Datos e BI",
        metaTitle: "Análisis de Datos y Business Intelligence en Colombia | Dathink",
        metaDescription: "Creamos dashboards BI, reportes automatizados y soluciones de analítica para tomar mejores decisiones con datos empresariales.",
        seoTitle: "Análisis de datos y business intelligence",
        keywords: ["business intelligence Colombia", "dashboard BI", "analisis de datos", "reportes automatizados"],
        icon: FaChartBar,
        desc: "Transformamos tus datos en tableros interactivos y reportes automatizados para la toma de decisiones estratégicas en tiempo real.",
        longDesc: "El valor de tu empresa reside en sus datos. Implementamos soluciones de Business Intelligence (BI), manejo de bases de datos y analítica avanzada para generar reportes dinámicos que te permitan visualizar KPIs en tiempo real, identificar tendencias y optimizar tu estrategia comercial.",
        features: [
            "Diseño y Gestión de Bases de Datos (SQL/NoSQL)",
            "Dashboards Interactivos (PowerBI, Tableau, Custom)",
            "Limpieza y Migración de Datos",
            "Reportes Automatizados de Rendimiento"
        ],
        color: "#3b82f6",
        image: DataAnalysisImg
    },
    {
        id: 'digital-marketing',
        title: "Marketing Digital",
        metaTitle: "Marketing Digital y Crecimiento para Empresas | Dathink",
        metaDescription: "Diseñamos estrategias de SEO, pauta digital, contenido y automatización de marketing para generar leads cualificados.",
        seoTitle: "Marketing digital orientado a resultados",
        keywords: ["marketing digital Colombia", "SEO para empresas", "generacion de leads", "publicidad digital"],
        icon: FaChartLine,
        desc: "Estrategias de crecimiento, SEO y flujos automatizados que potencian tus ventas y fidelizan clientes de manera predecible.",
        longDesc: "Impulsa tu presencia online con estrategias de marketing orientadas a resultados. Combinamos creatividad con datos para conectar tu marca con la audiencia ideal, maximizando el retorno de inversión y generando leads cualificados.",
        features: [
            "Gestión de Redes Sociales y Comunidad",
            "SEO y Posicionamiento Web",
            "Publicidad Digital (Ads)",
            "Email Marketing Automatizado"
        ],
        color: "#f59e0b",
        image: MarketingImg
    }
];
