import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Lantern = ({ side, width, heightOffset, rightOffset, leftOffset, animationDirection, swingDuration }) => {
  const lanternRef = useRef();

  useEffect(() => {
    const lanternGroup = lanternRef.current.querySelector('#lanternGroup');
    const rope = lanternRef.current.querySelector('#rope');

    const animateDrop = () => {
      anime({
        targets: lanternGroup,
        translateY: [-200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        complete: animateSwing,
      });
    };

    const animateSwing = () => {
      const swingKeyframes =
        animationDirection === 'left'
          ? [
              { translateX: -20, rotate: 10 },
              { translateX: 15, rotate: -8 },
              { translateX: -10, rotate: 5 },
              { translateX: 5, rotate: -3 },
              { translateX: -2, rotate: 1 },
              { translateX: 0, rotate: 0 },
            ]
          : [
              { translateX: 20, rotate: -10 },
              { translateX: -15, rotate: 8 },
              { translateX: 10, rotate: -5 },
              { translateX: -5, rotate: 3 },
              { translateX: 2, rotate: -1 },
              { translateX: 0, rotate: 0 },
            ];

      const ropeKeyframes =
        animationDirection === 'left'
          ? [
              { d: `M200 0 C200 50, 220 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 190 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 215 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 195 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 210 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 200 ${heightOffset / 2}, 200 ${heightOffset}` },
            ]
          : [
              { d: `M200 0 C200 50, 180 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 210 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 185 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 205 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 190 ${heightOffset / 2}, 200 ${heightOffset}` },
              { d: `M200 0 C200 50, 200 ${heightOffset / 2}, 200 ${heightOffset}` },
            ];

      anime({
        targets: lanternGroup,
        keyframes: swingKeyframes,
        duration: swingDuration,
        easing: 'easeInOutQuad',
        loop: true,
      });

      anime({
        targets: rope,
        keyframes: ropeKeyframes,
        duration: swingDuration,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate',
      });
    };

    animateDrop();
  }, [animationDirection, heightOffset, swingDuration]);

  return (
    <div
      className={`absolute transform origin-top-center pointer-events-none`}
      style={{
        width: `${width + 100}px`,
        top: '0px',
        right: side === 'right' ? `${rightOffset}px` : 'auto',
        left: side === 'left' ? `${leftOffset}px` : 'auto',
      }}
    >
      <svg ref={lanternRef} viewBox={`0 0 400 ${heightOffset + 150}`} xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g id="lanternGroup" style={{ transformOrigin: '200px 0px' }}>
          <path id="rope" d={`M200 0 C200 50, 200 ${heightOffset / 2}, 200 ${heightOffset}`} stroke="black" strokeWidth="3" fill="none" />
          <g id="lantern">
            <rect x="170" y={heightOffset} width="60" height="120" fill="red" rx="18" ry="18" />
            <rect x="182" y={heightOffset} width="4" height="120" fill="black" />
            <rect x="214" y={heightOffset} width="4" height="120" fill="black" />
            <rect x="170" y={heightOffset - 5} width="60" height="10" fill="black" />
            <rect x="170" y={heightOffset + 120} width="60" height="10" fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Lantern;
