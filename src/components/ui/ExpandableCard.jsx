import { Img } from 'react-image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../../hooks/use-outside-click';

export function ExpandableCard({ cards }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[400px] md:max-w-[520px] rounded-lg md:h-fit md:max-h-[90%] flex flex-col bg-gray-800 sm:rounded-3xl overflow-hidden"
              initial={{ scale: 0.85, rotate: 5 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { type: 'spring', stiffness: 150, damping: 15 },
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                rotate: -5,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="flex absolute top-0 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Img priority={String(true)} width={150} height={150} src={active.src} alt={active.title} className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center" />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="text-cyan-400 font-bold text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-400 max-w-sm w-full text-xs md:text-sm">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#7c1049',
                      color: '#fff',
                      borderColor: '#7c1049',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                      transition: { duration: 0.3, ease: 'easeInOut' },
                    }}
                    whileTap={{ scale: 0.95 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-2 py-1 text-xs md:px-4 md:py-2 text-sm md:text-base rounded-xl lg:rounded-full font-bold bg-pink-600 text-white border border-transparent whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 bg-gray-800">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-200 text-xs md:text-sm lg:text-base max-h-60 md:max-h-80 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === 'function' ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-gray-800 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)', transition: { duration: 0.3, ease: 'easeInOut' } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2, ease: 'easeInOut' } }}
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Img width={100} height={100} src={card.src} alt={card.title} loading="eager" className="h-60 w-full rounded-lg object-cover object-top" />
              </motion.div>
              <div className="text-center sm:text-left flex flex-col items-center">
                <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-neutral-200 text-center md:text-left text-base">
                  {card.title}
                </motion.h3>
                <motion.p layoutId={`description-${card.description}-${id}`} className="text-neutral-400 text-center md:text-left text-base">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
