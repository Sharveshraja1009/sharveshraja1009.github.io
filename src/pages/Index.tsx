import { useEffect } from 'react';
import Hero from '@/components/pf/Hero';
import Work from '@/components/pf/Work';
import AllProjects from '@/components/pf/AllProjects';
import Experience from '@/components/pf/Experience';
import Contact from '@/components/pf/Contact';
import Footer from '@/components/pf/Footer';
import { useReveal } from '@/components/pf/useReveal';

const Index = () => {
  useReveal();
  useEffect(() => {
    document.body.classList.add('pf');
  }, []);

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <main>
        <Hero />
        <Work />
        <AllProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
