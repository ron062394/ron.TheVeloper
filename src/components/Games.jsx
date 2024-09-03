import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad, FaChess, FaExternalLinkAlt, FaLock } from 'react-icons/fa';

const Games = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

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
      link: "https://umbra-digital-tic-tac-toe.vercel.app/",
      images: [
        "https://i.imgur.com/JT44UFT.png",
        "https://i.imgur.com/VZMXXE6.png",
        "https://i.imgur.com/xXjUJfq.png"
      ]
    },
    {
      title: "Quiz App",
      description: "Test your knowledge with this quiz app for frontend fundamentals.",
      icon: <FaChess className="text-4xl text-indigo-500" />,
      link: "https://quiz-hub-iota.vercel.app/",
      images: [
        "https://i.imgur.com/tC6wBiN.png",
        "https://i.imgur.com/niOlmrf.png",
        "https://i.imgur.com/UGR4Y6V.png"
      ],
      topics: {
        "Mastering CLI": "CLI123",
        "Git & GitHub": "OCTOCAT",
        "HTML": "DOCTYPE",
        "CSS Basics": "CSS101",
        "Intermediate CSS": "RWD201",
        "JavaScript Basics": "JSLINGO",
        "DOM Manipulation": "JSDOM"
      }
    }
  ];

  useEffect(() => {
    setCurrentImages(games.map(game => game.images[0]));
    const interval = setInterval(() => {
      setCurrentImages(prevImages => 
        prevImages.map((_, index) => {
          const currentIndex = games[index].images.indexOf(prevImages[index]);
          const nextIndex = (currentIndex + 1) % games[index].images.length;
          return games[index].images[nextIndex];
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <img 
                    src={currentImages[index]} 
                    alt={`${game.title} screenshot`} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    style={{ height: '300px' }}  // Added fixed height
                  />
                  <div className="flex items-center">
                    {game.icon}
                    <h3 className="text-2xl font-bold ml-3 text-gray-800">{game.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Play Game <FaExternalLinkAlt className="ml-2" />
                  </a>
                  {game.topics && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-300"
                    >
                      View Topics <FaLock className="ml-2" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
              className="bg-white p-6 rounded-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Quiz Topics and Passwords</h3>
              <ul className="space-y-2">
                {Object.entries(games[1].topics).map(([topic, password]) => (
                  <li key={topic} className="flex justify-between items-center">
                    <span>{topic}</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">{password}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Games;
