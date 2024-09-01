import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaChess, FaExternalLinkAlt } from 'react-icons/fa';

const Games = () => {
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

  const games = [
    {
      title: "Tic-Tac-Toe",
      description: "A classic two-player game with a modern twist.",
      icon: <FaGamepad className="text-4xl text-indigo-500" />,
      link: "https://umbra-digital-tic-tac-toe.vercel.app/"
    },
    {
      title: "Quiz App",
      description: "Test your knowledge with this quiz app for frontend fundamentals.",
      icon: <FaChess className="text-4xl text-indigo-500" />,
      link: "https://quiz-hub-iota.vercel.app/"
    }
  ];

  return (
    <section id="games" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
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
            Mini Web-Based JS Games
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-12"
            variants={itemVariants}
          >
            Check out these fun and interactive games I've created using JavaScript!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  {game.icon}
                  <h3 className="text-2xl font-bold ml-3 text-gray-800">{game.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-300"
                >
                  Play Game <FaExternalLinkAlt className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
