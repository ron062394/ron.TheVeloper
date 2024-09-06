import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, isInView }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies to meet your specific needs."
    },
    {
      icon: <FaDesktop />,
      title: "Responsive Design",
      description: "Crafting websites that look great and function flawlessly on all devices and screen sizes."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-First Approach",
      description: "Ensuring your web presence is optimized for the growing mobile user base."
    }
  ];

  return (
    <section id="services" className="bg-gray-900 bg-[radial-gradient(rgba(223,223,223,0.1)_1px,transparent_1px)] bg-[length:1.1rem_1.1rem] py-20 px-4 md:px-8 lg:px-16">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Services I Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
