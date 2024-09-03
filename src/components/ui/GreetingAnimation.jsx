import React from 'react';
import Typing from 'react-typing-effect';
import { motion } from 'framer-motion';

const greetings = ['Hai :D', 'こんにちは', 'Hello ', '你好 ', 'Halo ', 'السلام عليكم', 'Hola ', '안녕하세요'];

const textVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const bounceVariants = {
  hidden: { y: 0 },
  visible: { y: [0, -10, 0], transition: { duration: 0.5, ease: 'easeInOut' } },
};

const GreetingAnimation = () => {
  return (
    <motion.div className="flex items-center justify-center mt-20 sm:mt-14 md:mt-28" initial="hidden" animate="visible" variants={textVariants}>
      <motion.div className="text-[2.5em] sm:text-[2.9em] md:text-[4em] font-bold text-pink-700 p-2 mx-4 sm:mx-6 md:mx-8 lg:mx-10" variants={bounceVariants}>
        <Typing text={greetings} speed={100} eraseSpeed={100} eraseDelay={2000} typingDelay={500} className="relative text-shadow" />
      </motion.div>

      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .text-shadow {
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default GreetingAnimation;
