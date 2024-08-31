import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutMe = () => {
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
    <motion.section 
      id="about"
      className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passionate Developer</h3>
            <p className="text-gray-600">
              With a keen eye for detail and a love for clean, efficient code, I strive to create seamless user experiences through innovative web solutions.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <FaGraduationCap className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
            <p className="text-gray-600">
              In the ever-evolving world of tech, I'm committed to staying ahead of the curve, constantly expanding my skillset and exploring new technologies.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <FaBriefcase className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Acumen</h3>
            <p className="text-gray-600">
              Combining my technical expertise with a strong business background, I bring a unique perspective to every project, ensuring solutions that are not just functional, but strategically aligned.
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            I'm Ron Cabatuando, a fullstack developer with a passion for creating robust, user-centric web applications. With a background in both technology and business, I bring a holistic approach to every project I undertake.
          </p>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
