import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Img } from 'react-image';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaJava, FaNodeJs, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiPhp, SiKotlin, SiExpress } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext.jsx';
import '/src/assets/css/public.css';

// ─── tech tag color map ───────────────────────────────────────────────────────
const TECH_COLOR = {
  React: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
  'Vue.js': 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
  Laravel: 'text-red-400 border-red-400/20 bg-red-400/5',
  'Node.js': 'text-green-400 border-green-400/20 bg-green-400/5',
  Express: 'text-gray-300 border-gray-300/20 bg-gray-300/5',
  MySQL: 'text-blue-300 border-blue-300/20 bg-blue-300/5',
  SQLite: 'text-blue-300 border-blue-300/20 bg-blue-300/5',
  Tailwind: 'text-sky-400 border-sky-400/20 bg-sky-400/5',
  PHP: 'text-purple-300 border-purple-300/20 bg-purple-300/5',
  JavaScript: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  HTML5: 'text-orange-400 border-orange-400/20 bg-orange-400/5',
  CSS3: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
  Kotlin: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
  Java: 'text-red-300 border-red-300/20 bg-red-300/5',
  GSAP: 'text-green-300 border-green-300/20 bg-green-300/5',
};

const techClass = (t) => TECH_COLOR[t] ?? 'text-gray-400 border-gray-400/20 bg-gray-400/5';

// ─── modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ card, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', fn);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const isGithub = card.ctaText.toLowerCase().includes('git');

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* panel */}
      <motion.div
        className="relative z-10 w-full max-w-xl rounded-2xl bg-gray-900 border border-white/[0.09] shadow-2xl shadow-black/60 overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxHeight: '90vh' }}
      >
        {/* ── image ── */}
        <div className="relative flex-shrink-0">
          <Img src={card.src} alt={card.title} className="w-full object-cover object-top" style={{ height: '220px' }} />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

          {/* index badge */}
          <span className="absolute top-4 left-4 text-[11px] font-black font-Jakarta text-white/25 tabular-nums">{String(card._index + 1).padStart(2, '0')}</span>

          {/* close */}
          <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* title overlay on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <h2 className="text-white font-black font-Jakarta text-xl leading-tight">{card.title}</h2>
            <p className="text-gray-400 text-xs mt-1 font-Jakarta">{card.description}</p>
          </div>
        </div>

        {/* ── body ── */}
        <div className="px-5 py-4 overflow-y-auto custom-scrollbar flex-1">
          <p className="text-gray-300 text-sm leading-relaxed font-Jakarta">{card.detail}</p>

          {/* tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {card.tech.map((t) => (
              <span key={t} className={`text-[11px] px-2.5 py-1 rounded-full border font-Jakarta font-medium ${techClass(t)}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── footer ── */}
        <div className="px-5 py-4 border-t border-white/[0.06] flex items-center justify-between flex-shrink-0">
          <button onClick={onClose} className="text-xs text-gray-600 hover:text-gray-400 font-Jakarta transition-colors">
            ← Back
          </button>
          <a href={card.ctaLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-800 text-white text-xs font-semibold font-Jakarta transition-colors duration-200">
            {isGithub ? <FaGithub size={12} /> : <FaExternalLinkAlt size={10} />}
            {card.ctaText}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── card ─────────────────────────────────────────────────────────────────────
function ProjectCard({ card, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      onClick={onClick}
      className="group relative flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.045] hover:border-pink-700/30 cursor-pointer overflow-hidden transition-all duration-300"
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <Img src={card.src} alt={card.title} className="w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]" style={{ height: '200px' }} />

        {/* index */}
        <span className="absolute top-3 left-3 text-[10px] font-black font-Jakarta text-white/25 tabular-nums select-none">{String(index + 1).padStart(2, '0')}</span>

        {/* hover reveal */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex items-end p-3" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <span className="text-[10px] uppercase tracking-[0.15em] text-gray-200 font-Jakarta flex items-center gap-1.5">
            View details
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </div>

      {/* info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="text-white font-semibold text-sm font-Jakarta leading-snug">{card.title}</h3>
        <p className="text-gray-500 text-[11px] leading-relaxed font-Jakarta flex-1">{card.description}</p>

        {/* tech preview — first 3 only */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {card.tech.slice(0, 3).map((t) => (
            <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full border font-Jakarta ${techClass(t)}`}>
              {t}
            </span>
          ))}
          {card.tech.length > 3 && <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-600 font-Jakarta">+{card.tech.length - 3}</span>}
        </div>

        {/* bottom row */}
        <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/[0.05]">
          <span className="text-[10px] uppercase tracking-[0.12em] text-pink-600/60 font-Jakarta font-semibold">{card.ctaText}</span>
          <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────
function ProjectsPage() {
  const { t } = useLanguage();
  const p = t.projects;
  const [active, setActive] = useState(null);

  return (
    <motion.div className="relative min-h-screen bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 opacity-65 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        {/* ── header ─────────────────────────────────────────────────────── */}
        <motion.div className="mb-10 sm:mb-12" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-Jakarta mb-2">
            {p.label} — {p.items.length} projects
          </p>
          <h1 className="font-Jakarta font-black text-white leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
            {p.title}
          </h1>
          <motion.div className="mt-3 h-px bg-gradient-to-r from-pink-700/60 via-pink-600/20 to-transparent" initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} />
        </motion.div>

        {/* ── grid — 2 cols on md, 3 on xl ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {p.items.map((card, i) => (
            <ProjectCard key={card.id} card={card} index={i} onClick={() => setActive({ ...card, _index: i })} />
          ))}
        </div>
      </div>

      {/* ── modal ─────────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">{active && <ProjectModal key={active.id} card={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </motion.div>
  );
}

export default ProjectsPage;
