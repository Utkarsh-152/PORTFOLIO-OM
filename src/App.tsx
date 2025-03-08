import React, { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set the background color of the body
    document.body.style.backgroundColor = '#000';
    
    return () => {
      // Reset the background color when component unmounts
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="relative text-white">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;