import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChartBar, FaDatabase, FaPython, FaFileExcel, FaFileCsv, FaBroom } from 'react-icons/fa';
import { SiPandas } from 'react-icons/si';

const DataAnalytics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Data Cleaning', icon: <FaBroom /> },
    { name: 'Excel', icon: <FaFileExcel /> },
    { name: 'CSV', icon: <FaFileCsv /> },
  ];

  return (
    <section id="data-analytics" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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

          <div className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Learn More About Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                If you want to know more about data analytics, here is a video that I found on YouTube. 
                Please note that this video is not mine.
              </p>
              <a href="https://www.youtube.com/watch?v=yZvFH7B6gKI" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Watch the full video
              </a>
            </div>
            <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
              <motion.iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/yZvFH7B6gKI?si=fhuKxL3tYKRHXdcF" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full aspect-video rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              ></motion.iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalytics;
