
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
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

  const backgroundTextVariants = {
    animate: {
      x: [300, -200, 300],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0">
        <div className="h-full w-1/2 bg-[#355C44] float-left"></div>
        <div className="h-full w-1/2 bg-[#F7F5EC] float-right"></div>
      </div>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-[20vw] font-extrabold text-[#3D6B4F] whitespace-nowrap opacity-10 pointer-events-none"
        variants={backgroundTextVariants}
        animate="animate"
      >
        FULL STACK WEB DEVELOPER
      </motion.div>
      <div className="max-w-7xl w-full space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
              RON CABATUANDO
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FEDE00]">
              Fullstack Web Developer
            </h2>
            <p className="text-xl text-white max-w-2xl leading-relaxed">
              Blending the Best of Tech and Business: Elevating Digital Solutions with Expertise in IT and Business Administration. Explore My Portfolio and Witness the Fusion of Innovation and Operational Excellence.
            </p>
            <div className="flex space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="px-8 py-4 bg-[#FEDE00] text-[#355C44] font-semibold rounded-full hover:bg-[#FFE433] transition duration-300 ease-in-out flex items-center space-x-2 shadow-lg">
                  <span>Contact me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/path-to-your-cv.pdf" download className="px-8 py-4 bg-white text-[#355C44] font-semibold rounded-full hover:bg-gray-100 transition duration-300 ease-in-out flex items-center space-x-2 shadow-lg">
                  <span>Download CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-white font-semibold">FOLLOW ME ON</span>
              <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEDE00]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </motion.a>
            </div>
          </motion.div>
          <motion.div className="relative" variants={itemVariants}>
            <motion.img 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
              src="https://i.imgur.com/rbKcDFf.png" 
              alt="Ron Cabatuando"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" 
              className="h-24 w-auto absolute -top-12 -left-12" 
              alt="React Logo"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.img 
              src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" 
              className="h-20 w-auto absolute -bottom-10 -right-10" 
              alt="Node.js Logo"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" 
              className="h-16 w-auto absolute top-1/2 -right-8" 
              alt="VS Code Logo"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;