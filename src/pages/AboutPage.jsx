import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import '/src/assets/css/public.css';

// ─── animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

// ─── helpers ──────────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[11px] uppercase tracking-[0.2em] text-pink-500 font-semibold font-Jakarta">{children}</span>
    <span className="flex-1 h-px bg-gradient-to-r from-pink-700/40 to-transparent" />
  </div>
);

const Tag = ({ children }) => <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-pink-700/35 text-pink-400 bg-pink-900/15 font-medium whitespace-nowrap font-Jakarta">{children}</span>;

const SkillPill = ({ children }) => (
  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:border-pink-600/40 hover:text-white transition-all duration-200 font-Jakarta">{children}</span>
);

// ─── cert popup modal ─────────────────────────────────────────────────────────
const CertModal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-gray-900 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between px-5 py-4 border-b border-white/[0.07]">
            <div>
              <p className="text-white font-semibold text-sm font-Jakarta">{cert.name}</p>
              <p className="text-gray-400 text-xs mt-0.5 font-Jakarta">
                {cert.issuer} · {cert.year}
              </p>
              {cert.id && <p className="text-gray-600 text-[10px] mt-1 font-Jakarta font-mono">ID: {cert.id}</p>}
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/8 ml-4 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="w-full bg-gray-950" style={{ height: '480px' }}>
            {cert.previewLink ? (
              <iframe src={cert.previewLink} title={cert.name} className="w-full h-full border-0" allow="autoplay" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-600">
                <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-Jakarta">Preview not available</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── main component ────────────────────────────────────────────────────────────
function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  const [activeCert, setActiveCert] = useState(null);

  const skillGroups = [
    { label: 'Frontend', items: a.skills.frontend },
    { label: 'Backend', items: a.skills.backend },
    { label: 'Mobile', items: a.skills.mobile },
    { label: 'Database', items: a.skills.database },
    { label: 'Tools', items: a.skills.tools },
  ];

  const stats = [
    { value: '9+', label: a.stats?.projects ?? 'Projects' },
    { value: '3', label: a.stats?.internships ?? 'Work Exp.' },
    { value: '6+', label: a.stats?.certs ?? 'Certifications' },
  ];

  return (
    <motion.div className="relative min-h-screen bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 opacity-65 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <motion.div className="mb-14" variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
            {/* ── Left: text content ── */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-black text-white font-Jakarta leading-tight">Muhammad Ryan Cakraningrat</h1>
              <p className="text-pink-500 text-sm font-semibold mt-1.5 font-Jakarta">{a.subtitle}</p>
              <p className="text-gray-500 text-xs font-Jakarta mt-0.5">{a.tagline}</p>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed font-Jakarta max-w-xl">{a.bio}</p>

              {/* languages */}
              {a.languages && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {a.languages.map(({ lang, level }) => (
                    <span key={lang} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 font-Jakarta">
                      <span className="text-gray-600">🌐</span>
                      <span className="text-gray-300 font-medium">{lang}</span>
                      <span className="text-gray-600">·</span>
                      <span>{level}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs — CV file is language-specific */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={a.cvFile}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-800 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-pink-900/30 font-Jakarta"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {a.downloadCV}
                </a>
                <a
                  href="mailto:ryancakra92@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-pink-700/40 hover:border-pink-600 text-pink-400 hover:text-white text-sm font-semibold transition-all duration-200 font-Jakarta"
                >
                  {a.contact}
                </a>
              </div>
            </div>

            {/* ── Right: photo + stats ── */}
            <motion.div className="flex-shrink-0 flex flex-col items-center gap-5 sm:pt-1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
              {/* profile photo */}
              <div className="relative">
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-pink-600 via-pink-800 to-transparent opacity-80" />
                <div className="absolute -inset-5 rounded-full bg-pink-700/10 blur-2xl pointer-events-none" />
                <img src="/dokumen/profil.jpg" alt={a.profileAlt ?? 'Profile'} className="relative w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-2 border-gray-900" loading="eager" />
                <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-gray-900 animate-pulse" />
              </div>

              {/* stats row */}
              <div className="flex items-center gap-4 sm:gap-5">
                {stats.map(({ value, label }, i) => (
                  <React.Fragment key={label}>
                    <div className="flex flex-col items-center">
                      <span className="text-lg sm:text-xl font-black text-white font-Jakarta leading-none">{value}</span>
                      <span className="text-[10px] text-gray-500 font-Jakarta mt-1 whitespace-nowrap text-center">{label}</span>
                    </div>
                    {i < stats.length - 1 && <span className="w-px h-6 bg-white/[0.08]" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
        <motion.section className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <SectionLabel>{a.sections.experience}</SectionLabel>
          <div className="space-y-3">
            {a.experience.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] hover:border-pink-700/25 transition-all duration-300 p-5 overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-pink-600 to-pink-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-sm font-Jakarta">{exp.role}</h3>
                    <p className="text-pink-400 text-xs font-Jakarta">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-xs whitespace-nowrap font-Jakarta flex-shrink-0">{exp.period}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 font-Jakarta">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── EDUCATION ──────────────────────────────────────────────────────── */}
        <motion.section className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <SectionLabel>{a.sections.education}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {a.education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.025] hover:border-pink-700/25 transition-all duration-300 p-5"
              >
                <p className="text-white font-semibold text-sm font-Jakarta mb-1 leading-snug">{edu.degree}</p>
                <p className="text-pink-400 text-xs font-Jakarta">{edu.school}</p>
                <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                  <span className="text-gray-500 text-xs font-Jakarta">{edu.period}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-900/25 border border-pink-700/25 text-pink-400 font-Jakarta whitespace-nowrap">{edu.note}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── TECH STACK ─────────────────────────────────────────────────────── */}
        <motion.section className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <SectionLabel>{a.sections.skills}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {skillGroups.map(({ label, items }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-Jakarta">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <SkillPill key={s}>{s}</SkillPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── CERTIFICATIONS ─────────────────────────────────────────────────── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <SectionLabel>{a.sections.certifications}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {a.certifications.map((cert, i) => (
              <motion.button
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => cert.previewLink && setActiveCert(cert)}
                className={`group text-left flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] transition-all duration-300 p-4 w-full
                  ${cert.previewLink ? 'hover:border-pink-700/35 hover:bg-white/[0.05] cursor-pointer' : 'cursor-default opacity-60'}`}
              >
                <div className="mt-0.5 w-7 h-7 rounded-lg bg-pink-900/35 border border-pink-700/25 flex items-center justify-center flex-shrink-0 group-hover:border-pink-600/50 transition-colors">
                  <svg className="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs sm:text-sm font-semibold font-Jakarta leading-snug">{cert.name}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5 font-Jakarta">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                {cert.previewLink && (
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
                    <svg className="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          <p className="text-[11px] text-gray-600 mt-3 font-Jakarta">{a.certHint ?? '↑ Click a certificate to preview'}</p>
        </motion.section>
      </div>

      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </motion.div>
  );
}

export default AboutPage;
