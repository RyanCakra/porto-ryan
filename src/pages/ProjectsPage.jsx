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

// ─── modal responsif ──────────────────────────────────────────────────────────
function ProjectModal({ card, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const isGithub = card.ctaText.toLowerCase().includes('git');

  return (
    <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8">
      {/* Backdrop */}
      <motion.div className="absolute inset-0 bg-black/85 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />

      {/* Panel Modal */}
      <motion.div
        className="relative z-10 w-full max-w-5xl bg-[#16161a] border-t sm:border border-white/10 shadow-2xl rounded-t-[2rem] sm:rounded-3xl overflow-hidden flex flex-col md:flex-row cursor-default"
        initial={{ opacity: 0, y: 100, scale: 1 }} // Muncul dari bawah di mobile
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: '92vh', // Memberikan ruang di atas agar user sadar bisa klik luar
          height: 'auto',
        }}
      >
        {/* Tombol Close Mobile (Floating) */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white sm:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── BAGIAN GAMBAR ── */}
        <div className="relative w-full md:w-3/5 bg-black flex-shrink-0 overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">
          <Img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover object-top"
            style={{
              aspectRatio: '16 / 10',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#16161a]/40" />

          <span className="absolute bottom-4 left-6 text-[10px] font-black font-Jakarta text-pink-500 bg-black/40 px-2 py-1 rounded backdrop-blur-sm sm:top-6 sm:bottom-auto">{String(card._index + 1).padStart(2, '0')}</span>
        </div>

        {/* ── BAGIAN KONTEN ── */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header Desktop */}
          <div className="hidden sm:flex px-8 py-6 justify-between items-start border-b border-white/[0.05]">
            <div>
              <h2 className="text-white font-black font-Jakarta text-2xl leading-tight">{card.title}</h2>
              <p className="text-pink-500 text-[10px] mt-1 font-bold font-Jakarta tracking-[0.2em]">{card.description}</p>
            </div>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Header Mobile (Simple) */}
          <div className="sm:hidden px-6 pt-6 pb-2">
            <h2 className="text-white font-black font-Jakarta text-xl leading-tight">{card.title}</h2>
            <p className="text-pink-500 text-[9px] mt-1 font-bold font-Jakarta uppercase tracking-widest">{card.description}</p>
          </div>

          {/* Body Scrollable */}
          <div className="px-6 sm:px-8 py-4 overflow-y-auto custom-scrollbar flex-1 space-y-6">
            <section>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Overview</h4>
              <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed font-Jakarta">{card.detail}</p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {card.tech.map((t) => (
                  <span key={t} className={`text-[10px] px-2.5 py-1.5 rounded-lg border font-bold ${techClass(t)}`}>
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Footer (Fixed at Bottom) */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 mt-auto border-t border-white/[0.05] bg-black/20 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={card.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-pink-700 hover:bg-pink-600 text-white text-xs font-black font-Jakarta shadow-lg transition-all active:scale-95"
            >
              {isGithub ? <FaGithub size={16} /> : <FaExternalLinkAlt size={14} />}
              {card.ctaText.toUpperCase()}
            </a>
            <button onClick={onClose} className="hidden sm:block text-[11px] font-bold text-gray-500 hover:text-gray-300 uppercase tracking-widest transition-colors">
              Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
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
      // PERUBAHAN: Warna bg diubah ke bg-gray-900 agar sama dengan modal, border diperjelas
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-gray-900 hover:bg-[#16161a] hover:border-pink-700/40 cursor-pointer overflow-hidden transition-all duration-300 shadow-xl shadow-black/20"
    >
      {/* image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <Img src={card.src} alt={card.title} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" />

        {/* Index badge ala Modal */}
        <span className="absolute top-3 left-3 text-[10px] font-black font-Jakarta text-white/30 tabular-nums select-none bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/5">{String(index + 1).padStart(2, '0')}</span>

        {/* Hover overlay yang lebih smooth */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-Jakarta flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </div>

      {/* info */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-white font-bold text-[15px] font-Jakarta leading-tight group-hover:text-pink-500 transition-colors">{card.title}</h3>
          <p className="text-gray-400 text-[11px] mt-1.5 leading-relaxed font-Jakarta line-clamp-2">{card.description}</p>
        </div>

        {/* tech preview */}
        <div className="flex flex-wrap gap-1.5">
          {card.tech.slice(0, 3).map((t) => (
            <span key={t} className={`text-[9px] px-2 py-0.5 rounded-md border font-bold font-Jakarta uppercase tracking-wider ${techClass(t)}`}>
              {t}
            </span>
          ))}
          {card.tech.length > 3 && <span className="text-[9px] px-2 py-0.5 rounded-md border border-white/10 text-gray-500 font-Jakarta font-bold">+{card.tech.length - 3}</span>}
        </div>

        {/* bottom row */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/[0.05]">
          <span className="text-[10px] uppercase tracking-[0.15em] text-pink-600 font-black font-Jakarta">{card.ctaText}</span>
          <div className="w-6 h-6 rounded-full bg-white/[0.03] flex items-center justify-center group-hover:bg-pink-700 transition-colors duration-300">
            <svg className="w-3 h-3 text-gray-500 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
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
