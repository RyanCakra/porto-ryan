import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      };

      updateHeight();

      // Update height on window resize
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(ref.current);

      window.addEventListener('resize', updateHeight);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans px-4 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            {/* Timeline Dot & Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start w-24 md:w-full md:max-w-sm">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-0 md:left-3 rounded-full bg-teal-300/80 flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-teal-400 border-2 border-teal-300" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-pink-700">{item.title}</h3>
            </div>

            {/* Content */}
            <div className="relative pl-12 md:pl-4 pr-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-4 text-left font-bold text-pink-700">{item.title}</h3>
              <div className="text-sm md:text-base">{item.content}</div>
            </div>
          </div>
        ))}

        {/* Animated Line */}
        <div style={{ height: height + 'px' }} className="absolute left-4 md:left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent overflow-hidden">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
