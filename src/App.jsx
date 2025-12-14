import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;