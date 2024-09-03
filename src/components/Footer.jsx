import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h3 className="text-3xl font-extrabold mb-4">RON CABATUANDO</h3>
          <p className="text-xl text-[#FEDE00]">Fullstack Web Developer</p>
          <p className="text-gray-300">Blending Tech and Business Excellence</p>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FEDE00] transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-[#FEDE00] transition duration-300">Projects</a></li>
            <li><a href="#" className="hover:text-[#FEDE00] transition duration-300">Skills</a></li>
            <li><a href="#" className="hover:text-[#FEDE00] transition duration-300">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center md:text-right">
          <h4 className="text-xl font-bold mb-4">Connect</h4>
          <div className="flex justify-center md:justify-end space-x-6">
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ron-cabatuando-5a2252142/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/ron.theveloper/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
              <FaInstagram size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.tiktok.com/@ron.webdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
              <FaTiktok size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/ron062394/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
              <FaFacebook size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div 
        variants={itemVariants}
        className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
      >
        <p>&copy; {new Date().getFullYear()} Ron Cabatuando. All rights reserved.</p>
      </motion.div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-1/2 bg-gray-900 float-left"></div>
        <div className="h-full w-1/2 bg-white float-right"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
