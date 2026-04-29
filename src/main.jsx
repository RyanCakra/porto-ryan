import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TransitionEffect from './components/ui/TransitionEffect';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

// Animasi halus untuk konten halamannya itu sendiri
const pageVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    // Saat URL berubah, kita hanya memicu tirai untuk MENUTUP
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
    }
  }, [location, displayLocation]);

  const handleAnimationComplete = () => {
    // 2. Saat tirai sudah menutup penuh (atau animasi beres),
    // ganti konten halaman di belakang layar
    setDisplayLocation(location);

    // 3. Matikan status transisi (tirai membuka kembali)
    // Beri sedikit delay (misal 100ms) agar perpindahan konten tidak kasar
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  return (
    // Kita gunakan bg-slate-950 (atau warna gelap lainnya) di container utama
    // Agar saat transisi "transparent", tidak ada warna putih yang bocor
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Tirai Global */}
      <TransitionEffect isTransitioning={isTransitioning} onComplete={handleAnimationComplete} />

      {displayLocation.pathname !== '/' && <Navbar activePath={displayLocation.pathname} />}

      {/* Konten Halaman */}
      <AnimatePresence mode="wait">
        <motion.div key={displayLocation.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <Routes location={displayLocation}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
);
