import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiDjango, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { MdDataUsage } from 'react-icons/md';
import { GrWorkshop } from 'react-icons/gr';

const Stacks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-[#222] bg-[radial-gradient(rgba(223,223,223,0.1)_1px,transparent_1px)] bg-[length:1.1rem_1.1rem] overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-extrabold text-center text-white mb-12"
          variants={itemVariants}
        >
          My Tech Stack
        </motion.h2>
        <motion.div 
          className="grid grid-cols-3 grid-rows-3 gap-4 h-[30rem]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants} 
            className="col-span-2 bg-[#046FAC] flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold mb-4 text-white">Full Stack {"</>"}</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaHtml5 size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">HTML5</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaCss3Alt size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">CSS3</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaJs size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaReact size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">ReactJS</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaNodeJs size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">NodeJS</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaPython size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">Python</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Full Stack" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-100 text-gray-700 flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-2xl font-semibold mb-4">Styling</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiTailwindcss size={30} />
                  <span className="text-xs mt-1">Tailwind</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaFigma size={30} />
                  <span className="text-xs mt-1">Figma</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiAdobephotoshop size={30} />
                  <span className="text-xs mt-1">Photoshop</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiAdobeillustrator size={30} />
                  <span className="text-xs mt-1">Illustrator</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Styling" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-100 text-gray-700 flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-2xl font-semibold mb-4">Version Control</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <BsGit size={30} />
                  <span className="text-xs mt-1">Git</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaGithub size={30} />
                  <span className="text-xs mt-1">GitHub</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Version Control" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="col-start-2 col-span-2 bg-[#03A185] flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold mb-4 text-white">Frontend {"{}"}</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaReact size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">ReactJS</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiTailwindcss size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">Tailwind</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaJs size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Frontend" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="col-span-2 bg-[#EA8787] flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold mb-4 text-white">Backend</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaNodeJs size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">NodeJS</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiExpress size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">ExpressJS</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiDjango size={30} className="text-white" />
                  <span className="text-white text-xs mt-1">Django</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Backend" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-100 text-gray-700 flex rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-2xl font-semibold mb-4">Database & Analytics</span>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <SiMongodb size={30} />
                  <span className="text-xs mt-1">MongoDB</span>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                  <FaDatabase size={30} />
                  <span className="text-xs mt-1">SQL</span>
                </div>

              </div>
            </div>
            <div className="flex-1 bg-gray-300">
              <img src="https://via.placeholder.com/300x300" alt="Database & Analytics" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="mt-8 p-4 bg-gray-800 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300"
        >
          <div className="flex items-center justify-center space-x-4">
            <GrWorkshop size={30} className="text-white" />
            <span className="text-xl font-semibold text-white">Fully-equipped remote set-up (Equipment & internet connection)</span>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="mt-4 flex justify-center space-x-8"
        >
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
            <FaLinkedin size={40} className="text-blue-500 hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
            <FaGithub size={40} className="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stacks;