import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { Timeline } from '../components/ui/Timeline';
import { useInView } from 'react-intersection-observer';

// Data for the about section
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

// Timeline data
const timelineData = [
  { title: 'Project Start', content: <p>Started the Aceternity project</p> },
  { title: 'First Milestone', content: <p>Reached first milestone</p> },
  { title: 'Product Launch', content: <p>Launched the product</p> },
];

function AboutPage() {
  const [showContent, setShowContent] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('var(--slate-900)');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [activeCard, setActiveCard] = useState(0);
  const cardLength = aboutContent.length;

  // Detect when the section is in view
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this value based on when you want to trigger the animation
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = aboutContent.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
    const backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
    setBackgroundColor(backgroundColors[closestBreakpointIndex % backgroundColors.length]);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen"
      style={{ backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 h-full opacity-40 pointer-events-none" />
      <Navbar className="fixed top-0 left-0 w-full z-20 bg-gray-900 text-white" />
      <AnimatePresence mode="wait">
        <TransitionEffect />
        <div className="pt-16 container mx-auto mt-[20px] py-10 px-6 relative z-10 flex flex-col lg:flex-row gap-10 min-h-screen">
          {showContent && (
            <div ref={containerRef} className="w-full flex flex-col lg:flex-row justify-center items-start gap-10">
              <div className="w-full flex flex-col justify-center items-center">
                {aboutContent.map((item, index) => {
                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                  });

                  return (
                    <motion.div
                      key={`about-${index}`}
                      ref={ref}
                      className="w-full max-w-4xl mb-20"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: inView ? 1 : 0.3, y: inView ? 0 : 50 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ color: inView ? 'var(--highlight-color)' : 'inherit' }} // Adjust highlight color
                    >
                      <h2 className="text-3xl font-bold">
                        {item.title}
                      </h2>
                      <p className="text-lg mt-4">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
                <div className="w-full max-w-4xl mt-20">
                  <Timeline data={timelineData.map((item, index) => ({ ...item, key: `timeline-${index}` }))} />
                </div>
              </div>

              <div className="hidden lg:block w-80 sticky top-10"></div>
            </div>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default AboutPage;
