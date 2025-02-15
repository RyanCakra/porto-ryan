import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TransitionEffect from './components/ui/TransitionEffect';
import './index.css';

const pageVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'easeOut' } },
};

function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger transisi setiap kali lokasi berubah
  useEffect(() => {
    setIsTransitioning(false); // Mulai transisi masuk
    const timer = setTimeout(() => {
      setIsTransitioning(true); // Mulai transisi keluar setelah 1 detik
    }); // Durasi sebelum transisi keluar dimulai (1 detik)
    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <div className="relative min-h-screen">
      {/* Transition Effect */}
      <TransitionEffect
        isTransitioning={isTransitioning}
        onComplete={() => setIsTransitioning(false)} // Reset state setelah transisi selesai
      />

      {/* Transition untuk setiap halaman */}
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial="hidden" animate="visible" exit="exit" variants={pageVariants}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Render router langsung di main.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
