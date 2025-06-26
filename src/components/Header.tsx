import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const resumeLink = "https://drive.google.com/file/d/1f5ggMLNhxBAZBV1dWKXGeAtM2WNDnSxC/view?usp=drive_link";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            NR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Publications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Rahul20038"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-n-62285a224/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              <Download size={16} />
              <span>View Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 bg-black/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Publications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-white/80 hover:text-yellow-400 transition-colors duration-300 px-4 py-2"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/Rahul20038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/60 hover:text-yellow-400 transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-n-62285a224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/60 hover:text-yellow-400 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-full font-medium text-sm"
                >
                  <Download size={16} />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
