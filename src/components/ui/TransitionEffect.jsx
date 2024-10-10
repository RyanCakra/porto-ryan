import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionEffect = () => {
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioningOut(true);
    }, 1000); // Duration before the "out" transition starts (1 second)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isTransitioningOut && (
          <>
            <motion.div
              className="
                fixed
                top-0
                left-0
                w-screen
                min-h-screen
                overflow-hidden
                z-30
                bg-pink-700
                will-change-transform  
              "
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </>
        )}
      </AnimatePresence>

      {isTransitioningOut && (
        <AnimatePresence>
          <motion.div
            className="
              fixed
              top-0
              left-0
              w-screen
              min-h-screen
              overflow-hidden
              z-50
              bg-pink-700
              will-change-transform 
            "
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          <motion.div
            className="
              fixed
              top-0
              left-0
              w-screen
              min-h-screen
              overflow-hidden
              z-40
              bg-slate-700
              will-change-transform  
            "
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          />

          <motion.div
            className="
              fixed
              top-0
              left-0
              w-screen
              min-h-screen
              overflow-hidden
              z-30
              bg-gray-800
              will-change-transform  
            "
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default TransitionEffect;
