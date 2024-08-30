import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

const ProjectCard = ({ project, device, setDevice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <motion.div 
      className='bg-white rounded-xl p-6 shadow-lg'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className='flex flex-col items-center justify-center'>
        <motion.div 
          className={`bg-white shadow-2xl rounded-lg overflow-hidden transform transition duration-300 ${device === 'desktop' ? 'w-full aspect-video' : device === 'tablet' ? 'w-3/4 aspect-[3/4]' : 'w-1/2 aspect-[9/16]'}`}
          whileHover="hover"
          variants={imageVariants}
        >
          <div className='flex bg-gray-800 px-2 py-1'>
            <div className='w-2 h-2 m-1 bg-red-500 rounded-full'></div>
            <div className='w-2 h-2 m-1 bg-yellow-500 rounded-full'></div>
            <div className='w-2 h-2 m-1 bg-green-500 rounded-full'></div>
          </div>
          <div className="w-full h-full">
            <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <div className='mt-4 flex space-x-3'>
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
        <div className='mt-4 flex space-x-4'>
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
      <div className="mt-4 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {truncateDescription(project.description, 100)}
          {project.description.length > 100 && (
            <button
              className="text-blue-600 hover:underline ml-1"
              onClick={() => setIsModalOpen(true)}
            >
              More
            </button>
          )}
        </p>
        <div>
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
        <div>
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

const Projects = () => {
  const [device, setDevice] = useState('desktop');

  const projects = [
    {
      title: "OneStep",
      image: "https://i.imgur.com/bcwQNzL.png",
      description: "OneStep is a sleek shoe e-commerce platform built with React.js, Node.js, Express.js, and MongoDB. Offering a seamless shopping experience, users can explore a curated collection of shoes, enjoy personalized recommendations through secure authentication, and effortlessly track orders in real-time.",
      previewLink: "https://onestep-iota.vercel.app/",
      codeLink: "https://github.com/ron062394/Onestep-MERN",
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vanilla CSS'],
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Checkout Process', 'Order Tracking', 'Responsive Design']
    },
    {
      title: "Project 2",
      image: "https://placehold.co/600x400?text=Project+2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      previewLink: "#",
      codeLink: "#",
      techStack: ['Tech 1', 'Tech 2', 'Tech 3'],
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      title: "Project 3",
      image: "https://placehold.co/600x400?text=Project+3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      previewLink: "#",
      codeLink: "#",
      techStack: ['Tech A', 'Tech B', 'Tech C'],
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature D']
    },
    // Add more projects here as needed
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} device={device} setDevice={setDevice} />
        ))}
      </div>
    </section>
  );
};

export default Projects;