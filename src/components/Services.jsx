import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaChartBar, FaGraduationCap } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, isInView }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-5xl text-blue-400 mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Crafting bespoke web applications utilizing cutting-edge technologies to address your unique requirements and optimize user experience."
    },
    {
      icon: <FaChartBar />,
      title: "Data Science & Visualization",
      description: "Leveraging advanced analytics to transmute raw data into strategic insights, facilitating data-driven decision-making processes."
    },
    {
      icon: <FaGraduationCap />,
      title: "Web Development Mentorship",
      description: "Imparting comprehensive knowledge and industry-standard practices to cultivate proficient web developers through personalized guidance."
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-100 py-24 px-4 md:px-8 lg:px-16">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Professional Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
