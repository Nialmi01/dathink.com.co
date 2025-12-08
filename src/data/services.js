import { FaCode, FaRobot, FaChartLine, FaDatabase } from 'react-icons/fa';
import CustomAppsImg from '../assets/custom_apps.svg';
import N8nWorkflowImg from '../assets/n8n_workflow.svg';
import MarketingImg from '../assets/marketing.svg';
import DataAnalysisImg from '../assets/data_analysis.svg';

export const servicesData = [
    {
        id: 'custom-apps',
        title: "Aplicaciones a Medida",
        icon: FaCode,
        desc: "Desarrollo de software web y escritorio personalizado para tus necesidades operativas.",
        longDesc: "Creamos soluciones de software robustas y escalables adaptadas específicamente a los flujos de trabajo de tu empresa. Ya sea una plataforma web compleja o una aplicación de escritorio de alto rendimiento, nuestro equipo utiliza las últimas tecnologías para garantizar seguridad, velocidad y usabilidad.",
        features: [
            "Desarrollo Web Full Stack (React, Node, Python)",
            "Aplicaciones de Escritorio Modernas",
            "Integración de APIs y Sistemas Legacy",
            "Diseño UI/UX Centrado en el Usuario"
        ],
        color: "#00d4ff",
        image: CustomAppsImg
    },
    {
        id: 'ai-agents',
        title: "Agentes de IA",
        icon: FaRobot,
        desc: "Automatización inteligente y agentes autónomos para optimizar tus procesos.",
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
        title: "Análisis de Datos y BI",
        icon: FaDatabase,
        desc: "Transformamos tus datos empresariales en reportes accionables para la toma de decisiones.",
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
        icon: FaChartLine,
        desc: "Estrategias de crecimiento, SEO y campañas para posicionar tu marca.",
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
