import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionEffect = ({ isTransitioning, onComplete }) => {
  // Variansi animasi untuk efisiensi kode
  const animVariants = {
    initial: { x: '100%', width: '100%' },
    animate: { x: '0%', width: '0%' },
    exit: { x: ['0%', '-100%'], width: ['0%', '100%'] },
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Layer 1: Pink (Main Layer) */}
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-[100] bg-pink-700"
            initial={{ x: '100%' }} // Mulai dari kanan luar
            animate={{ x: '0%' }} // Berhenti di tengah (menutup)
            exit={{ x: '-100%' }} // Keluar ke kiri (membuka)
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1], // Berhenti dengan smooth di tengah
            }}
            // Trigger ganti page saat layer pink ini sudah sampai di x: 0%
            onAnimationComplete={() => {
              if (isTransitioning) onComplete();
            }}
          />

          {/* Layer 2: Slate (Shadow Layer) */}
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-[90] bg-slate-800"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1, // Sedikit jeda agar terlihat layer-nya
            }}
          />

          {/* Layer 3: Overlay Transparan agar transisi tidak 'hard' */}
          <motion.div className="fixed top-0 left-0 w-full h-screen z-[80] bg-black/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
        </>
      )}
    </AnimatePresence>
  );
};

export default TransitionEffect;
