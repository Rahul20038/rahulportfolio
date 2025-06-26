import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Full Stack Developer',
    'DevOps Engineer',
    'Cloud Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Nallamothu Rahul
            </span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
              <span className="inline-block animate-pulse">
                {titles[currentTitle]}
              </span>
              <span className="animate-pulse text-yellow-400 ml-1">|</span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate about building scalable web applications and optimizing cloud infrastructure. 
          I bridge the gap between development and operations to deliver robust, efficient solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Rahul20038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/rahul-n-62285a224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:+919959265198"
              className="flex items-center space-x-2 text-white/70 hover:text-yellow-400 transition-colors duration-300"
            >
              <Phone size={16} />
              <span className="text-sm">+91-9959265198</span>
            </a>
            
            <a
              href="mailto:rahulchowdarynallamothu@gmail.com"
              className="flex items-center space-x-2 text-white/70 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail size={16} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-white/60 hover:text-yellow-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;