import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Divider = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      await controls.start({
        x: ['-100%', '100%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 50, // Increased duration for slower animation
            ease: 'linear',
          },
        },
      });
    };

    animateText();
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="bg-black h-[5vh] overflow-hidden flex items-center"
    >
      <motion.div
        className="whitespace-nowrap"
        animate={controls}
      >
        <span className="text-3xl font-bold text-[#FEDE00] mx-4">
          🚀 Open for employment opportunities! 💼 Looking for exciting collaborations! 🌟 Let's create something amazing together!
        </span>
      </motion.div>
    </div>
  );
};

export default Divider;
