import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Companies from '../sections/Companies';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Companies />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
