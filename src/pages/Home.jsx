import Hero from '../components/Hero';
import Services from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { BlogPreview } from '../components/BlogPreview';
import { About, Contact } from '../components/Sections';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { faqSchema } from '../data/faq';

const Home = () => {
    return (
        <>
            <SEO
                title="Automatizacion de Procesos e Inteligencia Artificial para Empresas en Colombia"
                description="Dathink ayuda a PYMEs colombianas a reducir costos y crecer con automatizacion de procesos, bots de WhatsApp, agentes de IA y software a medida."
                path="/"
                keywords={[
                    'automatizacion de procesos Colombia',
                    'inteligencia artificial para empresas',
                    'bots WhatsApp empresas',
                    'software a medida Colombia',
                    'automatizacion empresarial Medellin',
                    'agentes IA',
                    'transformacion digital PYME',
                ]}
                schemas={[faqSchema]}
            />
            <Hero />
            <Services />
            <CaseStudies />
            <Testimonials />
            <BlogPreview />
            <FAQ />
            <About />
            <Contact />
        </>
    );
};

export default Home;
