import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-12 px-4 md:px-8 lg:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Ron Cabatuando</h3>
          <p className="text-gray-300">Fullstack Web Developer</p>
          <p className="text-gray-300">Blending Tech and Business</p>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Projects</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Skills</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center md:text-right">
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-300 transition duration-300"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-blue-300 transition duration-300"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-blue-300 transition duration-300"><FaTwitter size={24} /></a>
          </div>
        </motion.div>
      </div>
      <motion.div 
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
      >
        <p>&copy; {new Date().getFullYear()} Ron Cabatuando. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
