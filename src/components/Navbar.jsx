// ─── Navbar.jsx ───────────────────────────────────────────────────────────────
// Drop-in replacement for your existing Navbar.
// Adds a language switcher (EN / ID / DE) in the top-right area.
// Reads / writes language through LanguageContext.
//
// Usage: wrap your app in <LanguageProvider> (see LanguageContext.jsx) then
// everything works automatically.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import Logo from './ui/Logo.jsx';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

function Navbar({ className, activePath }) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/projects', label: t.nav.projects },
  ];

  const activeLang = LANGS.find((l) => l.code === language);

  return (
    <nav className={`relative z-50 ${className ?? ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3 transition-all duration-300">
          <Logo size={40} />
          {/* <span className="text-white font-Jakarta font-bold text-sm sm:text-lg tracking-wide group-hover:text-pink-400 transition-colors">
            ryan<span className="text-pink-600">.</span>
          </span> */}
        </Link>

        {/* Desktop nav links + language switcher */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className={`text-sm font-Jakarta transition-colors duration-300 ${activePath === path ? 'text-pink-500 font-semibold' : 'text-gray-400 hover:text-white'}`}>
              {label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-Jakarta text-gray-400 hover:text-white border border-white/10 hover:border-pink-600/50 rounded-lg px-3 py-1.5 transition-all duration-200"
            >
              <span>{activeLang.flag}</span>
              <span className="font-semibold">{activeLang.label}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-28 rounded-xl border border-white/10 bg-gray-900/95 backdrop-blur-sm shadow-xl overflow-hidden"
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-Jakarta transition-colors ${
                        language === lang.code ? 'bg-pink-900/40 text-pink-400 font-semibold' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <svg className="w-3 h-3 ml-auto text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Mobile: hamburger + lang button */}
        <div className="flex sm:hidden items-center gap-3">
          {/* compact lang switcher on mobile */}
          <div className="relative">
            <button onClick={() => setLangOpen((v) => !v)} className="flex items-center gap-1 text-xs font-Jakarta text-gray-400 border border-white/10 rounded-lg px-2 py-1.5">
              <span>{activeLang.flag}</span>
              <span>{activeLang.label}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-24 rounded-xl border border-white/10 bg-gray-900/95 backdrop-blur-sm shadow-xl overflow-hidden z-50"
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-Jakarta ${language === lang.code ? 'text-pink-400 font-semibold bg-pink-900/30' : 'text-gray-300'}`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* hamburger */}
          <button onClick={() => setMenuOpen((v) => !v)} className="text-gray-400 hover:text-white p-1" aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-white/8 bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setTimeout(() => setMenuOpen(false), 150)}
                  className={`px-3 py-2 rounded-lg text-sm font-Jakarta transition-colors ${activePath === path ? 'bg-pink-900/30 text-pink-400 font-semibold' : 'text-gray-400'}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
