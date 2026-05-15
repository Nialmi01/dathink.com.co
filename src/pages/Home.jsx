import Hero from '../components/Hero';
import Services from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { BlogPreview } from '../components/BlogPreview';
import { About, Contact } from '../components/Sections';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <CaseStudies />
            <Testimonials />
            <BlogPreview />
            <About />
            <Contact />
        </>
    );
};

export default Home;
