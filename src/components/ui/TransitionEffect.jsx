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
            {/* Layer 1: Pink background */}
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
                will-change-transform  /* Optimize for smoother animations */
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
          {/* Layer 1: Pink background moving out */}
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
              will-change-transform  /* Optimize for smoother animations */
            "
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          {/* Layer 2: Gray background following Layer 1 */}
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
              delay: 0.1, // Delay to follow Layer 1
            }}
          />

          {/* Layer 3: Slate background following Layer 2 */}
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
              will-change-transform  /* Optimize for smoother animations */
            "
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2, // Delay to follow Layer 2
            }}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default TransitionEffect;
