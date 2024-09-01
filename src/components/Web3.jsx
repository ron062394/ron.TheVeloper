import React from 'react';
import { motion } from 'framer-motion';
import { FaEthereum, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSolidity, SiWeb3Dotjs } from 'react-icons/si';

const Web3 = () => {
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

  const projects = [
    {
      title: "Crowdfunding App",
      description: "A decentralized crowdfunding platform built on Ethereum, allowing users to fund projects without intermediaries.",
      tech: ["Solidity", "Web3.js", "React"],
      icon: <FaEthereum className="text-3xl text-purple-400" />,
      link: "https://ron062394.github.io/dapp-crowdfunding/"
    },
    {
      title: "Boxing Bonanza",
      description: "A decentralized boxing game built on Ethereum, allowing users to participate in virtual boxing matches.",
      tech: ["Solidity", "Web3.js", "React"],
      icon: <SiWeb3Dotjs className="text-3xl text-green-400" />,
      link: "https://ron062394.github.io/dapp-boxing-bonanza/"
    },
    {
      title: "Learn More About Web3",
      description: "An article explaining the fundamentals and importance of Web3.",
      tech: ["Article"],
      icon: <FaExternalLinkAlt className="text-3xl text-blue-400" />,
      link: "https://hbr.org/2022/05/what-is-web3"
    }
  ];

  return (
    <section id="web3" className="bg-gray-900 bg-[radial-gradient(rgba(223,223,223,0.1)_1px,transparent_1px)] bg-[length:1.1rem_1.1rem] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-6 text-white"
            variants={itemVariants}
          >
            Web3 & Blockchain Innovations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 text-center mb-12"
            variants={itemVariants}
          >
            Pioneering the decentralized future with cutting-edge blockchain solutions
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold ml-3 text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-300 mt-4"
                  >
                    View Article <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Why Web3 Matters</h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-4">
                <p className="text-gray-300 mb-4">
                  Web3 represents the next evolution of the internet, promising a more open, 
                  decentralized, and user-centric digital ecosystem. By leveraging blockchain 
                  technology, we can create applications that are:
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Transparent and immutable</li>
                  <li>Resistant to censorship and control</li>
                  <li>Empowering users with true ownership of their data and digital assets</li>
                </ul>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 w-64 h-64 rounded-full flex items-center justify-center">
                  <FaCode className="text-6xl text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Web3;
