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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition duration-300">
              The.Veloper-Ron
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {['About', 'Projects', 'Technologies', 'Services'].map((item, index) => (
                <Link key={index} to={`/${item.toLowerCase()}`} className="text-sm font-bold text-gray-700 hover:text-blue-600 transition duration-300 relative group">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link to="/resume" className="px-4 py-2 text-sm font-bold bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300 border border-blue-600 text-blue-600">
                Resume/CV
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600 transition duration-300 bg-gradient-to-r from-blue-600 to-teal-500">
                Contact Me
              </Link>
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
            {['About', 'Projects', 'Technologies', 'Services'].map((item, index) => (
              <li key={index}>
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="block text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <Link 
              to="/resume" 
              className="block w-full px-4 py-2.5 text-sm text-center font-bold bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300 border border-blue-600 text-blue-600"
              onClick={toggleMobileMenu}
            >
              Resume/CV
            </Link>
            <Link 
              to="/contact" 
              className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600 transition duration-300 bg-gradient-to-r from-blue-600 to-teal-500"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;