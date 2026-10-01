import Hero from '../components/Hero';
import Services from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { BlogPreview } from '../components/BlogPreview';
import { About, Contact } from '../components/Sections';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { faqSchema } from '../data/faq';
import { pageMeta } from '../data/pageMeta';
import { websiteSchema } from '../data/schemas';

const Home = () => {
    return (
        <>
            <SEO {...pageMeta.home} schemas={[websiteSchema, faqSchema]} />
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
