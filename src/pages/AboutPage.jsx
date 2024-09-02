import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { WobbleCard } from '../components/ui/WobbleCard.jsx';

const aboutContent = [
  {
    title: 'About Me',
    description: 'I am a Fullstack Developer with a passion for creating interactive and dynamic web applications. I love learning new technologies and applying them to solve real-world problems.',
  },
  {
    title: 'Skills',
    description: 'HTML, CSS, JavaScript, React.js, PHP, Laravel, Tailwind CSS, MySQL, GSAP.',
  },
  {
    title: 'Education',
    description: 'Bachelor of Information Computer Technology from Asia e University.',
  },
  {
    title: 'Hobbies',
    description: 'In my free time, I enjoy exploring new technology trends, playing video games, and working on personal coding projects. I also have a keen interest in Japanese culture and language.',
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
};

function AboutPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="relative min-h-screen bg-gray-900 bg-opacity-95" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 h-full opacity-40 pointer-events-none" />
      <Navbar className="relative z-10" />
      <AnimatePresence mode="wait">
        <TransitionEffect />
        <div className="container mx-auto py-10 px-6 relative z-10">
          {showContent && (
            <>
              {aboutContent.map((section, index) => (
                <motion.div key={index} className="mb-8" initial="hidden" animate="visible" variants={sectionVariants}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  <p className="text-base text-gray-300">{section.description}</p>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default AboutPage;
