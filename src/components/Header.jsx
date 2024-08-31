import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({ y: 0, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 1)' });
    } else {
      controls.start({ y: 0, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0)' });
    }
  }, [isScrolled, controls]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: 0, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className={`transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}
      >
        <div className="container mx-auto px-4 relative">
          {/* Yellow shapes background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-yellow-200 rounded-full opacity-15 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-10 transform -translate-y-1/2"></div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300 relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">The.Veloper-Ron</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition duration-300 relative group">
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition duration-300 relative group">
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#stacks" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition duration-300 relative group">
                Technologies
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition duration-300 relative group">
                Services
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/resume" className="px-4 py-2 text-sm font-bold bg-transparent rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-[#D9584F] text-gray-700">
                Resume/CV
              </Link>
              <a href="#contact-me" className="px-4 py-2 text-sm text-white font-bold rounded-full hover:bg-[#E06A62] transition duration-300 bg-[#D9584F]">
                Contact Me
              </a>
            </div>

            <button className="lg:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      <div className={`fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <button className="absolute top-4 right-4 text-gray-700" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="space-y-4 mt-8">
            <li>
              <a 
                href="#about" 
                className="block text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="block text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#stacks" 
                className="block text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Technologies
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="block text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
            </li>
          </ul>
          <div className="mt-8 space-y-4">
            <Link 
              to="/resume" 
              className="block w-full px-4 py-2.5 text-sm text-center font-bold bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300 border border-blue-600 text-blue-600"
              onClick={toggleMobileMenu}
            >
              Resume/CV
            </Link>
            <a 
              href="#contact-me" 
              className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600 transition duration-300 bg-gradient-to-r from-blue-600 to-teal-500"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
