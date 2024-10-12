import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import { ExpandableCard } from '../components/ui/ExpandableCard.jsx';
import TransitionEffect from '../components/ui/TransitionEffect.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';

import { FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiPhp, SiKotlin, SiExpress } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

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

const hoverVariants = {
  hover: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const projects = [
  {
    title: 'Personal News Portal',
    description: 'A dynamic blogging platform built with Laravel 10, featuring user interactions, multimedia posts, and full admin control.',
    src: '/img/project/news-portal.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            Built with Laravel 10, this platform serves as a comprehensive and user-friendly blog. Users can register, login, and interact with posts through comments and likes. It includes advanced search and sorting by date or tags,
            trending categories, and the latest comments, with embedded YouTube videos enhancing the multimedia experience. The admin side, using MySQL, allows editors to create, edit, and moderate posts, categories, and user profiles,
            while administrators manage all platform operations for a smooth, efficient experience.
            <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-10 items-center justify-center gap-5">
            {[
              { icon: <FaLaravel size={50} className="text-red-700" />, label: 'Laravel' },
              { icon: <SiMysql size={60} className="text-gray-200" />, label: 'MySQL' },
              { icon: <SiTailwindcss size={50} className="text-cyan-500" />, label: 'Tailwindcss' },
              { icon: <SiPhp size={70} className="text-purple-300/70" />, label: 'PHP' },
            ].map(({ icon, label }, i) => (
              <motion.div key={i} className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={i}>
                {icon}
                <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                  {label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </>
      );
    },
  },
  {
    title: 'Landing Page for Chill',
    description: 'An interactive UI for a responsive landing page.',
    src: '/img/project/chill.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            This landing page was crafted as part of a bootcamp mini-project, adhering closely to a provided Figma design. I implemented a responsive layout using pure CSS and a touch of JavaScript for the burger menu on smaller screens,
            covering pages like home, register, and sign-in.
            <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-4 items-center justify-center gap-5">
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={0}>
              <FaHtml5 size={50} className="text-red-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                HTML5
              </motion.span>
            </motion.div>
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={1}>
              <FaCss3Alt size={50} className="text-sky-400" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                CSS3
              </motion.span>
            </motion.div>
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={2}>
              <DiJavascript size={50} className="text-yellow-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                JavaScript
              </motion.span>
            </motion.div>
          </div>
        </>
      );
    },
  },
  {
    title: 'Portofolio Website',
    description: 'A clean and interactive portfolio site built with React and Tailwind CSS.',
    src: '/img/project/porto.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            This project showcases my portfolio with React.js, Tailwind CSS, and other libraries, featuring home, about, and project pages. Using customized components from Aceternity, I achieved a cohesive theme. I also incorporated
            animations and transitions with GSAP and Anime.js for a dynamic user experience.
            <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-4 items-center justify-center gap-5">
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={0}>
              <FaReact size={50} className="text-cyan-400" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                React.js
              </motion.span>
            </motion.div>
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={1}>
              <DiJavascript size={50} className="text-yellow-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Javascript
              </motion.span>
            </motion.div>
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={2}>
              <SiTailwindcss size={50} className="text-sky-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Tailwindcss
              </motion.span>
            </motion.div>
          </div>
        </>
      );
    },
  },
  {
    title: 'Ordering a drink Application',
    description: 'A simple Android app for ordering drinks, built with Kotlin.',
    src: '/img/project/odrin.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            My first Android project, this app allows users to order various international drinks, created with Kotlin and a touch of JavaScript. Using SQLite, each device stores user data locally, offering a straightforward and effective
            ordering experience.
            <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-4 items-center justify-center gap-5">
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={1}>
              <SiKotlin size={50} className="text-purple-700" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Kotlin
              </motion.span>
            </motion.div>
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={2}>
              <DiJavascript size={60} className="text-yellow-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Javascript
              </motion.span>
            </motion.div>
          </div>
        </>
      );
    },
  },
  {
    title: 'Movie Ticketing App',
    description: 'A simple, memorable movie ticketing app built with Java.',
    src: '/img/project/java-ticket.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            My first executable Java project, this app lets users select movies and ticket types in a format reminiscent of cinema experiences. This project holds significance as my introduction to building functional Java applications.
            <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-4 items-center justify-center gap-5">
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={1}>
              <FaJava size={60} className="text-red-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Java
              </motion.span>
            </motion.div>
          </div>
        </>
      );
    },
  },
  {
    title: 'Online Course Website',
    description: 'An evolving e-learning platform built with React and Node.js.',
    src: '/img/project/videobelajar.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            Developed as an online learning site, this project started with core pages like home, login, register, and a product list. Over time, it evolved with an admin panel and a custom API using Node.js and Express linked to a MySQL
            database. CRUD operations are now fully integrated into the frontend, accessible via the admin panel.
            <br /> <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-10 items-center justify-center gap-2">
            {[
              { icon: <FaReact size={50} className="text-cyan-400" />, label: 'React.js' },
              { icon: <DiJavascript size={50} className="text-yellow-500" />, label: 'Javascript' },
              { icon: <SiTailwindcss size={50} className="text-sky-500" />, label: 'Tailwindcss' },
              { icon: <FaNodeJs size={50} className="text-green-500" />, label: 'Node.js' },
              { icon: <SiExpress size={50} className="text-gray-300" />, label: 'Express.js' },
              { icon: <SiMysql size={60} className="text-gray-200" />, label: 'MySql' },
            ].map(({ icon, label }, i) => (
              <motion.div key={i} className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={i}>
                {icon}
                <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                  {label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </>
      );
    },
  },
  {
    title: 'Todolist application',
    description: 'A mobile-inspired to-do list app with categorization features.',
    src: '/img/project/todolist.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <>
          <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
            Designed with a smartphone-inspired layout, this app helps users track tasks, categorized into sections like personal needs and schedules. I'm considering a future React Native version to enhance its functionality on mobile
            devices. <br /> <br />
          </motion.p>
          <div className="flex mx-auto px-5 pt-2 pb-4 items-center justify-center gap-5">
            <motion.div className="group flex flex-col items-center" whileHover="hover" initial="hidden" animate="visible" variants={entranceVariants} custom={0}>
              <DiJavascript size={50} className="text-yellow-500" />
              <motion.span variants={hoverVariants} className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100">
                Javascript
              </motion.span>
            </motion.div>
          </div>
        </>
      );
    },
  },
];

function ProjectsPage() {
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    setIsExiting(true);
  };

  return (
    <motion.div className="relative min-h-screen bg-gray-900 bg-opacity-95" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 h-full opacity-65 pointer-events-none" />
      <Navbar className="relative z-10" />

      <AnimatePresence onExitComplete={handleExitComplete} mode="wait">
        {!isExiting && <TransitionEffect />}
        {showContent && (
          <div className="container mx-auto py-10 px-6 relative z-10">
            <motion.h1 className="text-3xl font-bold text-center text-pink-700 mb-10" initial="hidden" animate="visible" variants={titleVariants}>
              My Projects
            </motion.h1>
            <motion.div initial="hidden" animate="visible" variants={entranceVariants}>
              <ExpandableCard cards={projects} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectsPage;
