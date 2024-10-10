import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function HoverBorderGradient({ children, containerClassName, className, roundedClass = 'rounded-lg', as: Tag = 'button', duration = 0.8, clockwise = false, color = '#be185d', ...props }) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState('TOP');

  const rotateDirection = (currentDirection) => {
    const directions = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise ? (currentIndex - 1 + directions.length) % directions.length : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: `radial-gradient(20.7% 50% at 50% 0%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
    LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
    BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
    RIGHT: `radial-gradient(16.2% 41.2% at 100% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
  };

  const highlight = `radial-gradient(75% 181.2% at 50% 50%, ${color} 0%, ${darkenColor(color, 0.2)} 100%)`;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(`relative flex ${roundedClass} content-center bg-transparent hover:bg-pink-700 transition duration-500  items-center justify-center overflow-visible p-px w-fit`, containerClassName)}
      {...props}
    >
      <motion.div
        className={cn(`w-auto z-10 px-4 py-2 ${roundedClass}`, className)}
        style={{ color: hovered ? color : 'white' }}
        animate={{
          color: hovered ? color : 'white',
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn('flex-none inset-0 overflow-hidden absolute z-0', roundedClass)}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className={`absolute z-1 flex-none inset-[2px] ${roundedClass}`} style={{ backgroundColor: 'black' }} />
    </Tag>
  );
}

function darkenColor(color, amount) {
  const f = parseInt(color.slice(1), 16),
    t = amount < 0 ? 0 : 255,
    p = amount < 0 ? amount * -1 : amount,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return `#${(0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)}`;
}
