import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <FloatingElements />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;