import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
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

  return (
    <section id="contact-me" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
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
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-12"
            variants={itemVariants}
          >
            Have a question or want to work together? Let's connect!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-indigo-500 mr-2" />
                  <span>ron062394@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-indigo-500 mr-2" />
                  <span>+63 920-938-7622</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-indigo-500 mr-2" />
                  <span>Gapan City, Nueva Ecija, 3105, Philippines</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-700">
                  I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Or contact me via</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/ron-cabatuando-5a2252142/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.facebook.com/ron062394/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/ron.theveloper/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@ron.webdev" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">
                    <FaTiktok size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
