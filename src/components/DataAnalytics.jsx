import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaPython, FaRProject } from 'react-icons/fa';
import { SiTableau, SiPowerbi } from 'react-icons/si';

const DataAnalytics = () => {
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

  const skills = [
    { name: 'Data Visualization', icon: <FaChartBar /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'R', icon: <FaRProject /> },
    { name: 'Tableau', icon: <SiTableau /> },
    { name: 'Power BI', icon: <SiPowerbi /> },
  ];

  return (
    <section id="data-analytics" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-6 text-gray-800"
            variants={itemVariants}
          >
            Data Analytics Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-12"
            variants={itemVariants}
          >
            Transforming raw data into actionable insights
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-2xl mr-2 text-blue-600">{skill.icon}</span>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data-Driven Insights</h3>
              <p className="text-gray-600 mb-4">
                Specializing in transforming complex datasets into clear, actionable insights. 
                My analytical approach combines statistical rigor with creative problem-solving 
                to uncover hidden patterns and drive informed decision-making.
              </p>
              <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-blue-800 font-semibold">
                  "Data is the new oil. It's valuable, but if unrefined it cannot really be used."
                </p>
                <p className="text-blue-600 text-right mt-2">- Clive Humby</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Featured Project: E-commerce Analytics Dashboard</h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-4">
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive analytics dashboard for an e-commerce platform, 
                  providing real-time insights into sales trends, customer behavior, and 
                  inventory management. The dashboard leverages advanced data visualization 
                  techniques to present complex data in an intuitive, actionable format.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Increased sales by 15% through data-driven recommendations</li>
                  <li>Optimized inventory turnover by 20%</li>
                  <li>Improved customer retention rate by 25%</li>
                </ul>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Dashboard Image Placeholder</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalytics;
