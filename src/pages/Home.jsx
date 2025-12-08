import Hero from '../components/Hero';
import Services from '../components/Services';
import { About, Contact } from '../components/Sections';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Contact />
        </>
    );
};

export default Home;
