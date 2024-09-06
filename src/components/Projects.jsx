import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDesktop, FaTabletAlt, FaMobileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [device, setDevice] = useState('desktop');
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "OneStep",
      images: {
        desktop: "https://i.imgur.com/bcwQNzL.png",
        tablet: "https://i.imgur.com/SjzWjlT.png",
        mobile: "https://i.imgur.com/aqhU4kV.png"
      },
      description: "OneStep is a sleek shoe e-commerce platform built with React.js, Node.js, Express.js, and MongoDB. Offering a seamless shopping experience, users can explore a curated collection of shoes, enjoy personalized recommendations through secure authentication, and effortlessly track orders in real-time.",
      previewLink: "https://onestep-iota.vercel.app/",
      codeLink: "https://github.com/ron062394/Onestep-MERN",
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vanilla CSS'],
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Checkout Process', 'Order Tracking', 'Responsive Design']
    },
    {
      title: "SerenitySuites",
      images: {
        desktop: "https://i.imgur.com/cBS3mIT.png",
        tablet: "https://i.imgur.com/35AL2rm.png",
        mobile: "https://i.imgur.com/tK8Shjj.png"
      },
      description: "SerenitySuites is a luxurious hotel booking website that offers a tranquil and seamless experience for travelers. With its elegant interface and comprehensive features, users can easily find and book their perfect accommodations for a peaceful stay.",
      previewLink: "https://serenity-suites-tau.vercel.app/",
      codeLink: "https://github.com/ron062394/Serenity-Suites-Hotel---MERN-Tailwind",
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: ['Room Booking System', 'Virtual Tours', 'User Reviews', 'Loyalty Program', 'Concierge Services', 'Mobile Check-in', 'Spa Reservations', 'Dining Reservations']
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
      <div className="max-w-7xl mx-auto relative">
        <ProjectCard project={projects[currentIndex]} device={device} setDevice={setDevice} />
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, device, setDevice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const getDeviceFrame = () => {
    switch(device) {
      case 'desktop':
        return (
          <div className="relative w-full max-w-[600px] aspect-[16/9] bg-gray-800 rounded-lg p-2">
            <div className="absolute top-1 left-1 flex space-x-0.5">
              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
              <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
            <div className="w-full h-full bg-white rounded overflow-hidden">
              <iframe 
                src={project.previewLink}
                title={`${project.title} preview on desktop`}
                className="w-full h-full border-none transform scale-[0.25] origin-top-left"
                style={{ width: '400%', height: '400%' }}
              />
            </div>
          </div>
        );
      case 'tablet':
        return (
          <div className="relative w-3/4 max-w-[450px] aspect-[4/3] bg-gray-800 rounded-3xl p-2">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/4 h-0.5 bg-black rounded"></div>
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              <iframe 
                src={project.previewLink}
                title={`${project.title} preview on tablet`}
                className="w-full h-full border-none transform scale-[0.571] origin-top-left"
                style={{ width: '175%', height: '175%' }}
              />
            </div>
          </div>
        );
      case 'mobile':
        return (
          <div className="relative w-1/2 max-w-[300px] aspect-[9/16] bg-gray-800 rounded-3xl p-1">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-black rounded"></div>
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              <iframe 
                src={project.previewLink}
                title={`${project.title} preview on mobile`}
                className="w-full h-full border-none transform scale-[0.571] origin-top-left"
                style={{ width: '175%', height: '175%' }}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className='bg-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className='md:w-1/2 pr-4'>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {truncateDescription(project.description, 200)}
          {project.description.length > 200 && (
            <button
              className="text-blue-600 hover:underline ml-1"
              onClick={() => setIsModalOpen(true)}
            >
              More
            </button>
          )}
        </p>
        <div className='mb-4'>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Tech Stack</h3>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div className='mb-4'>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features</h3>
          <div className='grid grid-cols-2 gap-2'>
            {project.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='flex space-x-4'>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm"
            href={project.previewLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg>
            Preview
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900 transition duration-300 text-sm"
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Code
          </motion.a>
        </div>
      </div>
      <div className='md:w-1/2 mt-6 md:mt-0'>
        <motion.div 
          className="transform transition duration-300"
          whileHover="hover"
          variants={imageVariants}
        >
          {getDeviceFrame()}
        </motion.div>
        <div className='mt-4 flex justify-center space-x-3'>
          <motion.span whileHover={{ scale: 1.2 }} className={`cursor-pointer text-xl ${device === 'desktop' ? 'text-blue-600' : 'text-gray-600'}`} onClick={() => setDevice('desktop')}>
            <FaDesktop />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} className={`cursor-pointer text-xl ${device === 'tablet' ? 'text-blue-600' : 'text-gray-600'}`} onClick={() => setDevice('tablet')}>
            <FaTabletAlt />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} className={`cursor-pointer text-xl ${device === 'mobile' ? 'text-blue-600' : 'text-gray-600'}`} onClick={() => setDevice('mobile')}>
            <FaMobileAlt />
          </motion.span>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default Projects;