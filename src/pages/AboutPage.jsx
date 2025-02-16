import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { Timeline } from '../components/ui/Timeline.jsx';
import FileViewer from '../components/FileViewer.jsx';
import '/src/assets/css/public.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -40, rotate: -3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  hover: { scale: 1.05, rotate: 2 },
};

function AboutPage() {
  const [isFileViewerVisible, setIsFileViewerVisible] = useState(false);
  const [fileLink, setFileLink] = useState(null);

  const handleImageClick = (link) => {
    setFileLink(link);
    setIsFileViewerVisible(true);
  };

  const closeFileViewer = () => {
    setIsFileViewerVisible(false);
    setFileLink(null);
  };

  const timelineData = [
    //2021
    {
      title: '2021',
      content: (
        <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
          <p className="mb-8">
            In 2021, my introduction to programming was somewhat unplanned. It started when I stumbled upon online coding courses on Progate purely out of curiosity. Initially, it was just a fun distraction amidst my busy routine. But as I
            worked through Python, HTML, and CSS, my casual interest quickly transformed into a genuine passion for programming. Even though I couldn’t finish all the courses due to time constraints, this early exploration opened a door to
            the world of coding that I would soon embrace wholeheartedly.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/p_html.png" loading="eager" alt="Brute Force PPT" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-65 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://drive.google.com/file/d/1b_-mDOU-Tt-NR8V2YL_lNYYRlmPO98ri/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-start items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Introduction to Html & Css</span>
              </div>
            </motion.div>
            <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/p_html.png" loading="eager" alt="Brute Force PPT" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-65 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://drive.google.com/file/d/1r3BVaPjO9jAPzLqtcrwtAzeqySP8pekj/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-end items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Introduction to Python</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    //2022
    {
      title: '2022',
      content: (
        <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          {/* <h1 className="text-white text-sm md:text-2xl font-semibold mb-2">Advancing My Knowledge in Information Technology</h1> */}
          <p className="mb-8">
            As my curiosity in programming grew, I knew I had to dive deeper, and so I enrolled in a double-degree program in Information Technology. This phase involved a lot of small projects, mostly academic assignments. While I wasn’t
            yet fully immersed in coding, the practical exercises helped me grasp the fundamentals. I chose to work individually, partly because my friends were in different classes, but also as a personal challenge. This allowed me to
            measure my growing abilities and develop the independence that would later become a key strength in my journey.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <motion.div className="col-span-2 row-span-2 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/doc-isas-qs.png" loading="eager" alt="Learning Coding" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://docs.google.com/document/d/1yVNPiu9aB0HwPsaG__Ei8-74eRQx1qBy/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-lg md:text-base lg:text-lg font-semibold">Isas Quick Sort</span>
              </div>
            </motion.div>

            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/ppt-2-bf.png" loading="eager" alt="Brute Force PPT" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-65 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://docs.google.com/presentation/d/1mTGMHrN6jGZDdSNC4R4d7cmX3rDnaofJ/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Penetration Testing Brute Force</span>
              </div>
            </motion.div>

            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/ppt-1-ntp.png" loading="eager" alt="Learning Coding" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer "
                onClick={() => handleImageClick('https://docs.google.com/presentation/d/1M-1OnOXmbMQFf1eQzdNA_MccbCEV11Vq/preview')}
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Analysis of NTP</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    //2023
    {
      title: '2023',
      content: (
        <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <p className="mb-8">
            2023 became the turning point in my journey. It started with advanced coding projects from university that introduced me to languages like C++, Java, and Kotlin. Midway through the year, I was lucky enough to land an internship
            at the House of Representatives (DPR), where I worked as a Fullstack Web and Android Developer. This was my first taste of real-world development, where I learned to navigate the complexities of large-scale projects. By the time
            I completed my internship, I felt like I had evolved significantly both as a programmer and as a professional. Soon after, I finalized my academic journey at the CCIT FTUI university, and now, I am continuing my education at
            Asia E University as part of my double degree program.
          </p>

          <div className="grid grid-cols-6 gap-4 auto-rows-[minmax(100px, 1fr)]">
            {/* First Image - Vertical layout */}
            <motion.div className="col-span-2 row-span-3 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/doksli2.JPG" loading="eager" alt="Learning Coding" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer"
                onClick={() => handleImageClick('https://drive.google.com/file/d/18ZPJn37ipz9pTPwNNbSqLL60KLC7LWF-/preview')}
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold mb-10">Graduated</span>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div className="col-span-2 row-span-2 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/sertif-dpr.png" loading="eager" alt="Brute Force PPT" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-65 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://drive.google.com/file/d/17Cha63VtCPyopWSzmsSGtP-FEfnPNuq1/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">First Internship</span>
              </div>
            </motion.div>

            {/* Third Image */}
            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/ppt-cinema.png" loading="eager" alt="Cinema Ticket" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://docs.google.com/presentation/d/137YL14nu3X46bxkDx5Cf7MXG5zqqvd48/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-pointer"
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Cinema Ticket</span>
              </div>
            </motion.div>

            {/* Fourth Image */}
            <motion.div className="col-span-2 row-span-2 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/ppt-odrin.png" loading="eager" alt="Order a drink app" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-end items-end p-4 cursor-pointer"
                onClick={() => handleImageClick('https://docs.google.com/presentation/d/1KfTkbz0l7cUsWSqYYEsvl_JUOyh6L6kL/preview')}
              >
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Order a drink app</span>
              </div>
            </motion.div>

            {/* Fifth Image */}
            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/evo.png" loading="eager" alt="Learning Coding - 2021" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-end p-4 cursor-disabled">
                <span className="text-white sm:text-base md:text-sm lg:text-base font-semibold">Small Project from university</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    //2024
    {
      title: '2024',
      content: (
        <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <p className="mb-8">
            In 2024, I feel more confident than ever in pursuing a career as a Fullstack Developer. At the end of 2023, I took on a freelance project that involved creating a personal web blog using Laravel. This three-month project not
            only honed my skills but also gave me valuable experience working with a real client. Completing this project boosted my confidence and inspired me to start applying for full-time roles. Although I faced rejections after several
            interviews, these experiences helped me identify areas for improvement. To bridge these gaps, I enrolled in an intensive Fullstack Developer bootcamp at harisenin.com, which I am set to complete in October. This program has
            further strengthened my skills and prepares me to fully step into my career.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/news-portal.png" loading="eager" alt="Learning Coding" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://drive.google.com/file/d/18ZPJn37ipz9pTPwNNbSqLL60KLC7LWF-/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-end items-end p-4 "
              >
                <span className="text-white text-lg font-semibold">portal</span>
              </div>
            </motion.div>
            <motion.div className="col-span-2 row-span-1 relative group" whileHover={{ scale: 1.05 }}>
              <img src="/dokumen/ppt-journey.png" loading="eager" alt="Learning Coding" className="rounded-lg object-cover h-full w-full shadow-lg group-hover:opacity-75 transition-opacity duration-300" />
              <div
                onClick={() => handleImageClick('https://drive.google.com/file/d/1Qxb3QBWGg_uX9IaBhxcQQ1u4Q02-qSWd/preview')}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-end items-end p-4 "
              >
                <span className="text-white text-lg font-semibold">portal</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    //2025
    // {
    //   title: '2025',
    //   content: (
    //     <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
    //       <p>
    //         As I reflect on my journey so far, I feel a deep sense of accomplishment, but I know that the road ahead is full of even greater challenges and opportunities. With the foundation I've built in web development, mobile
    //         applications, and real-world project experiences, I am now focused on taking my skills to the global stage. My ultimate goal is to become a Fullstack Developer at an internationally recognized company.
    //         <br />
    //         <br />
    //         To achieve this, I am continuously improving my technical and soft skills, whether through professional development programs, hands-on projects, or self-learning. I understand that adapting to new environments and collaborating
    //         with diverse teams will be key to thriving in a global market. I am fully committed to expanding my horizons, embracing new technologies, and learning from experienced professionals in the field. The experiences I've had so far
    //         are just the beginning, and I’m excited for what lies ahead in my journey toward becoming a Fullstack Developer abroad.
    //       </p>
    //     </motion.div>
    //   ),
    // },
    // looking ahead
    {
      title: 'Looking Ahead',
      content: (
        <motion.div className="text-white font-Jakarta text-sm md:text-base lg:text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <p>
            As I look back on my journey, I see more than just lines of code and completed projects—I see growth, challenges overcome, and a clear vision of where I want to go next. With a strong foundation in web and mobile development, I
            am ready to take my career to an international stage, starting with Germany.
            <br /> <br /> In 2025, I am fully committed to learning German and joining an Ausbildung program. This step is not just about gaining technical skills, but also about adapting to a new work culture, collaborating with talented
            professionals, and proving myself in a global tech environment. I see Germany as a place where I can refine my expertise, work on innovative projects, and push my abilities to new levels. <br /> <br /> My goal is clear: to
            become a well-rounded and highly skilled developer with international experience. Germany is the perfect place to start that journey. Here, I aim to grow, contribute, and build something meaningful—both for the teams I work with
            and for my own career. Beyond that, I remain open to opportunities that will take me even further. Technology is always evolving, and so am I. The road ahead is filled with challenges, but that’s what makes it exciting. This
            isn’t just a career path—it’s a lifelong adventure. And I’m just getting started.
          </p>
        </motion.div>
      ),
    },
  ];

  return (
    <motion.div className="relative min-h-screen bg-gray-900 bg-opacity-95" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 h-full opacity-65 pointer-events-none" />
      <Navbar className="relative z-10" />

      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div className="flex flex-col lg:flex-row justify-between items-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.div className="text-white font-Jakarta sm:text-base md:text-lg lg:text-lg max-w-xl" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.h2 variants={headingVariants} className="text-2xl md:text-4xl font-semibold text-pink-600 mb-6">
              My Journey as a Fullstack Developer
            </motion.h2>
            <motion.p variants={paragraphVariants} className="leading-relaxed mb-6">
              Since discovering my passion for web and mobile development in 2021, I have continuously expanded my skills through formal education and various projects. These experiences have strengthened my expertise in fullstack
              development.
            </motion.p>
            <motion.p variants={paragraphVariants} className="leading-relaxed">
              To stay ahead in this fast-evolving field, I have completed several bootcamps and training programs, further enhancing my technical abilities. I am committed to lifelong learning and always ready to embrace new challenges as I
              continue my journey as a Fullstack Developer.
            </motion.p>
          </motion.div>

          <motion.div className="mt-10 lg:mt-0 lg:ml-10 hidden lg:block" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center">
              <motion.img
                src="/dokumen/profil.jpg"
                alt="Journey illustration"
                loading="eager"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-pink-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Timeline data={timelineData} key={window.location.pathname} />
      {isFileViewerVisible && <FileViewer fileLink={fileLink} onClose={closeFileViewer} />}
    </motion.div>
  );
}

export default AboutPage;
