import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';

// Example work data; replace with your actual data
const workExperiences = [
  {
    company: 'Freelancer',
    role: 'Fullstack Developer',
    duration: '2024 - Present',
    description: 'Developing and maintaining web applications using React.js and Laravel.',
  },
  {
    company: 'Contract Projects',
    role: 'Web Developer',
    duration: '2023 - 2024',
    description: 'Worked on various freelance projects, building websites and web apps using modern web technologies.',
  },
  {
    company: 'Asia e University',
    role: 'student',
    duration: '2021 - 2022',
    description: 'learning in developing internal tools and platforms for the university using PHP and MySQL.',
  },
];

// Animation variants for work sections
const workVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function WorkPage() {
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
              <motion.h1 className="text-3xl font-bold text-center text-white mb-10" initial="hidden" animate="visible" variants={workVariants}>
                Work Experience
              </motion.h1>
              {workExperiences.map((work, index) => (
                <motion.div key={index} className="mb-8" initial="hidden" animate="visible" variants={workVariants}>
                  <h2 className="text-xl font-bold text-pink-700">{work.company}</h2>
                  <p className="text-base text-gray-400">
                    {work.role} | {work.duration}
                  </p>
                  <p className="text-base text-gray-300 mt-2">{work.description}</p>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default WorkPage;
