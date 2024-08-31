import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init("Lyv3M_31JlinMbp1e"); // Replace with your actual EmailJS user ID
    emailjs.send(
      'service_en973fn', // Replace with your EmailJS service ID
      'template_ot66xyr', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ron062394@gmail.com'
      }
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });
  };

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
      id="contact-me"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-[20vw] font-extrabold text-[#3D6B4F] whitespace-nowrap opacity-10 pointer-events-none"
        variants={backgroundTextVariants}
        animate="animate"
      >
        CONTACT ME
      </motion.div>
      <div className="max-w-7xl w-full space-y-12 relative z-10">
        <motion.h2 
          className="text-5xl font-extrabold text-center text-gray-900 mb-12"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FEDE00] focus:ring-[#FEDE00] bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FEDE00] focus:ring-[#FEDE00] bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FEDE00] focus:ring-[#FEDE00] bg-white text-gray-900"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full flex justify-center py-4 px-8 border border-transparent rounded-full shadow-lg text-[#355C44] font-semibold bg-[#FEDE00] hover:bg-[#FFE433] transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-8 text-gray-700">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#3D6B4F]" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">ron062394@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-[#3D6B4F]" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+63 920-938-7622</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-[#3D6B4F]" />
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-600">Gapan City, Nueva Ecija, 3105, Philippines</p>
              </div>
            </div>
            <motion.div 
              className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-[#355C44] mb-4">Let's Connect!</h3>
              <p className="text-gray-700">
                I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
