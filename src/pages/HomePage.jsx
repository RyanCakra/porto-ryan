import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Greeting from '../components/ui/GreetingAnimation.jsx';
import LanternDisplay from '../components/lantern/LanternDisplay.jsx';
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { HoverBorderGradient } from '../components/ui/HoverBorderGradient.jsx';
import { FlipWords } from '../components/ui/FlipWords.jsx';

const sendEmail = () => {
  window.location.href = 'mailto:ryancakra92@gmail.com?subject=Hi &body=hello, my name is';
};

// Animation variants for the overall page
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Animation variants for the text and buttons
const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

function HomePage() {
  const [transitionDone, setTransitionDone] = useState(false);
  const words = ['Hai :D', 'こんにちは', 'Hello ', '你好 ', 'Halo ', 'السلام عليكم', 'Hola ', '안녕하세요'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionDone(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="relative min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/img/sigma.png')" }} initial="hidden" animate="visible" exit="hidden" variants={pageVariants}>
      {/* Background Layer */}
      <div className="absolute w-full min-h-screen inset-0 z-0">
        <BackgroundBeamsWithCollision className="absolute inset-0 opacity-60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full sm:min-h-screen 2xl:h-screen px-4 py-0 sm:px-6 sm:py-10 bg-gray-900 bg-opacity-70">
        <AnimatePresence mode="wait">
          <TransitionEffect key="transitionEffect" />
        </AnimatePresence>
        {transitionDone && (
          <motion.div className="flex flex-col items-center justify-center px-4 py-6" variants={contentVariants} initial="hidden" animate="visible" exit="hidden">
            <div className="flex flex-col items-center text-white mt-10 p-4 rounded-lg">
              {/* <LanternDisplay className="hidden" /> */}

              <div>
                <FlipWords words={words} />
              </div>

              <div className="flex flex-col mt-20 w-full max-w-lg text-center sm:max-w-2xl sm:text-left sm:mx-0 items-center sm:p-2">
                <div className="mb-6 sm:mb-4 md:max-w-2xl">
                  <motion.h1 className="text-start text-[0.95em] sm:text-[1.3em] font-bold mt-4 md:mt-0" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                    Muhammad Ryan Cakraningrat <p className="hidden sm:inline ml-2 font-light">/'ryan/</p>
                  </motion.h1>
                  <motion.p className="mt-2 text-[0.78em] text-start sm:text-lg" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}>
                    A bachelor degree of Information Computer Technology from Asia e University. Experienced as a Fullstack Developer who works with HTML, CSS, Javascript, PHP, React.js and Laravel. Currently attending Fullstack Web
                    Developer bootcamp program for deepening skills in Web development.
                  </motion.p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-2 w-full">
                  <a href="/Ryancakra_CV.pdf" download="Ryancakra_CV.pdf">
                    <HoverBorderGradient containerClassName="w-full md:w-auto" className="px-4 py-2" roundedClass="rounded-lg">
                      Résumé
                    </HoverBorderGradient>
                  </a>
                  <motion.button
                    onClick={sendEmail}
                    className="w-auto md:w-auto bg-pink-700 hover:bg-pink-900 border border-transparent hover:border-pink-700 text-white hover:text-pink-200 px-4 py-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                  >
                    Contact Me
                  </motion.button>
                </div>
                <div className="flex flex-col w-full items-center sm:justify-start sm:items-start sm:flex-row  gap-4 mt-10">
                  <p>See more at </p>
                  <div className="flex flex-row gap-3">
                    <Link to="/about" className="text-base underline text-pink-700 hover:text-slate-600 hover:scale-105 transition duration-150">
                      About
                    </Link>
                    {/* <Link to="/works" className="text-base underline text-pink-700 hover:text-slate-600 hover:scale-105 transition duration-150">
                      Works
                    </Link> */}
                    <Link to="/projects" className="text-base underline text-pink-700 hover:text-slate-600 hover:scale-105 transition duration-150">
                      Projects
                    </Link>
                  </div>
                </div>
                <motion.div className="flex flex-row w-full h-full items-center justify-evenly mt-20 text-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                  <a className="opacity-30 hover:opacity-100 transition-opacity duration-300" href="https://www.linkedin.com/in/ryancakra/">
                    <FaLinkedin />
                  </a>
                  <a className="opacity-30 hover:opacity-100 transition-opacity duration-300" href="https://github.com/RyanCakra">
                    <FaGithub />
                  </a>
                  <a className="opacity-30 hover:opacity-100 transition-opacity duration-300" href="mailto:ryancakra92@gmail.com?subject=Hi &body=hello, my name is">
                    <SiGmail />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default HomePage;
