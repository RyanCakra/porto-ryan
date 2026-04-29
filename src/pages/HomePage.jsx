import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FlipWords } from '../components/ui/FlipWords.jsx';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { HoverBorderGradient } from '../components/ui/HoverBorderGradient.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
  { code: 'de', label: 'DE' },
];

function HomePage() {
  const { t, language, setLanguage } = useLanguage();
  const h = t.home;
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState('');

  const greetWords = ['Hai :D', 'Guten Tag', 'こんにちは', 'Hello', '你好', 'Halo', 'السلام عليكم', 'Hola', '안녕하세요'];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB',
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div className="relative min-h-screen bg-gray-900 overflow-hidden flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {/* background beams */}
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 opacity-60 pointer-events-none" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.125]"
        style={{
          backgroundImage: `url('/img/sigma.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* top rule */}
      <motion.div className="absolute top-0 left-0 right-0 h-px bg-white/[0.08] z-20" initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} />

      {/* ─────────────────────────────────────────────────────────────────────
          TOP BAR — clock · lang switcher
      ───────────────────────────────────────────────────────────────────── */}
      <motion.header className="relative z-30 flex items-center justify-between px-6 sm:px-10 py-5" variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-[11px] uppercase tracking-[0.16em] text-gray-500 font-Jakarta hidden sm:block">Jakarta, ID</span>
          <span className="text-[11px] text-gray-600 font-Jakarta hidden sm:block">—</span>
          <span className="text-[11px] text-gray-500 font-Jakarta tabular-nums">{time}</span>
        </div>

        <div className="flex items-center gap-1">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`text-[11px] px-2.5 py-1 rounded font-Jakarta tracking-widest uppercase transition-all duration-200
                ${language === code ? 'text-white bg-white/10 border border-white/15' : 'text-gray-600 hover:text-gray-300 border border-transparent'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────────────── */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center pb-6">
        {/* 1 · FlipWords greeting — biggest visual weight */}
        {isMounted && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
            <FlipWords words={greetWords} />
          </motion.div>
        )}

        {/* 2 · Name + role pill */}
        <motion.div className="mt-4 sm:mt-6" variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
          <h1 className="font-Jakarta font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3rem)' }}>
            Muhammad Ryan Cakraningrat
          </h1>
          <div className="flex items-center justify-center gap-2.5 mt-2">
            <span className="text-gray-600 font-Jakarta text-sm">/'ryan/'</span>
            <span className="w-px h-3 bg-gray-700" />
            <span className="text-pink-500 font-Jakarta text-xs font-semibold uppercase tracking-[0.18em]">{h.role}</span>
          </div>
        </motion.div>

        {/* 3 · One-liner — short, punchy, NOT a bio paragraph */}
        <motion.p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs sm:max-w-sm font-Jakarta" variants={fadeUp} initial="hidden" animate="visible" custom={0.55}>
          {h.description}
        </motion.p>

        {/* 4 · CTAs */}
        <motion.div className="flex flex-col sm:flex-row items-center gap-3 mt-7" variants={fadeUp} initial="hidden" animate="visible" custom={0.7}>
          {/* 1. Menggunakan h.cvFile yang dinamis dari LanguageContext */}
          <a href={h.cvFile} download={h.cvFile}>
            <HoverBorderGradient containerClassName="w-full sm:w-auto" className="px-6 py-2.5 text-center font-Jakarta text-sm font-semibold" roundedClass="rounded-lg">
              {/* 2. Menggunakan teks resume yang dinamis */}
              {h.resume}
            </HoverBorderGradient>
          </a>
          <button
            onClick={() => (window.location.href = 'mailto:ryancakra92@gmail.com?subject=Hi&body=hello, my name is')}
            className="px-6 py-2.5 rounded-lg bg-pink-700 hover:bg-pink-800 border border-transparent hover:border-pink-600 text-white text-sm font-semibold font-Jakarta transition-all duration-200"
          >
            {h.contact}
          </button>
        </motion.div>

        {/* 5 · Socials — small, below CTAs */}
        <motion.div className="flex items-center gap-5 mt-6" variants={fadeUp} initial="hidden" animate="visible" custom={0.82}>
          <a href="https://www.linkedin.com/in/ryancakra/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com/RyanCakra" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors duration-200" aria-label="GitHub">
            <FaGithub size={16} />
          </a>
          <a href="mailto:ryancakra92@gmail.com" className="text-gray-600 hover:text-red-400 transition-colors duration-200" aria-label="Email">
            <SiGmail size={16} />
          </a>
        </motion.div>
      </main>

      {/* ─────────────────────────────────────────────────────────────────────
          BOTTOM BAR — "explore" nav, pinned to bottom
      ───────────────────────────────────────────────────────────────────── */}
      <motion.footer className="relative z-20 border-t border-white/[0.06]" variants={fadeUp} initial="hidden" animate="visible" custom={0.95}>
        <div className="flex items-center justify-center gap-0 divide-x divide-white/[0.06]">
          {/* About */}
          <Link to="/about" className="group flex-1 sm:flex-none flex flex-col items-center gap-1 px-10 sm:px-16 py-5 hover:bg-white/[0.03] transition-colors duration-200">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-Jakarta transition-colors group-hover:text-gray-500">{h.seeMore}</span>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black font-Jakarta text-gray-400 group-hover:text-pink-500 transition-colors duration-200 tracking-tight">{t.nav.about}</span>
              <svg className="w-4 h-4 text-pink-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          {/* Projects */}
          <Link to="/projects" className="group flex-1 sm:flex-none flex flex-col items-center gap-1 px-10 sm:px-16 py-5 hover:bg-white/[0.03] transition-colors duration-200">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-Jakarta transition-colors group-hover:text-gray-500">{h.seeMore}</span>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black font-Jakarta text-gray-400 group-hover:text-pink-500 transition-colors duration-200 tracking-tight">{t.nav.projects}</span>
              <svg className="w-4 h-4 text-pink-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </motion.footer>

      {/* version stamp */}
      <motion.p
        className="hidden sm:block absolute bottom-2 right-2 sm:bottom-3 sm:right-5 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-700 font-Jakarta z-30 pointer-events-none text-right"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.1}
      >
        last updated: 29/04/2026
      </motion.p>
    </motion.div>
  );
}

export default HomePage;
