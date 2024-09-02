import React from 'react';
import Typing from 'react-typing-effect';
import { motion } from 'framer-motion';

const greetings = ['Hai :D', 'こんにちは', 'Hello ', '你好 ', 'Halo ', 'السلام عليكم', 'Hola 👋', '안녕하세요'];

const textVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const GreetingAnimation = () => {
  return (
    <motion.div className="flex items-center justify-center mt-20 sm:mt-14 md:mt-28  " initial="hidden" animate="visible" variants={textVariants}>
      <div className="text-[2.5em] sm:text-[2.9em] md:text-[4em]  font-bold text-pink-700 p-2 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
        <Typing text={greetings} speed={100} eraseSpeed={100} eraseDelay={2000} typingDelay={500} className="relative" />
      </div>
    </motion.div>
  );
};

export default GreetingAnimation;
