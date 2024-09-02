import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import { ExpandableCard } from '../components/ui/ExpandableCard.jsx'; // Adjust the import path as necessary
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';

// Example project data; replace with your actual data
const projects = [
  {
    title: 'Personal News Portal',
    description: 'A comprehensive news portal.',
    src: '/src/assets/img/project/news-portal.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and
          introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    title: 'Landing Page for Chill',
    description: 'A interaktif ui for landing page.',
    src: '/src/assets/img/project/chill.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, in recusandae voluptatibus ut pariatur quod aspernatur voluptate sed delectus esse vitae ad quam? Ab, impedit in? Voluptatum explicabo voluptas vitae. <br />{' '}
          <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    title: 'Ordering a drink Application',
    description: 'simple application for order using kotlin',
    src: '/src/assets/img/project/odrin.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and
          introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    title: 'Movie Ticketing App',
    description: 'an simple ticketing application using java',
    src: '/src/assets/img/project/java-ticket.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and
          introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    title: 'Online Course Website',
    description: 'creating a web application using react.js',
    src: '/src/assets/img/project/videobelajar.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and
          introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
  {
    title: 'Todolist application',
    description: 'an simple todolist application using javascript',
    src: '/src/assets/img/project/todolist.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and
          introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del Rey has
          established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      );
    },
  },
];

// Animation variants for the H1 element
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const entranceVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: i * 0.2,
    },
  }),
};

function ProjectsPage() {
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
              <motion.h1 className="text-3xl font-bold text-center text-white mb-10" initial="hidden" animate="visible" variants={titleVariants}>
                My Projects
              </motion.h1>
              <motion.div initial="hidden" animate="visible" variants={entranceVariants}>
                <ExpandableCard cards={projects} />
              </motion.div>
            </>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectsPage;
