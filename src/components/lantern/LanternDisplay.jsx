import React from 'react';
import Lantern from '../lantern/Lantern.jsx';

const LanternDisplay = () => {
  const lanterns = [
    { side: 'left', width: 210, heightOffset: 400, leftOffset: 100, animationDirection: 'left', swingDuration: '7000' },
    { side: 'left', width: 190, heightOffset: 300, leftOffset: 65, animationDirection: 'right', swingDuration: '6500' },
    { side: 'left', width: 170, heightOffset: 250, leftOffset: 30, animationDirection: 'left', swingDuration: '7500' },
    { side: 'left', width: 150, heightOffset: 200, leftOffset: 0, animationDirection: 'right', swingDuration: '8000' },

    { side: 'right', width: 210, heightOffset: 400, rightOffset: 100, animationDirection: 'left', swingDuration: '7000' },
    { side: 'right', width: 190, heightOffset: 300, rightOffset: 65, animationDirection: 'right', swingDuration: '6500' },
    { side: 'right', width: 170, heightOffset: 250, rightOffset: 30, animationDirection: 'left', swingDuration: '7500' },
    { side: 'right', width: 150, heightOffset: 200, rightOffset: 0, animationDirection: 'right', swingDuration: '8000' },
  ];

  return (
    <div className="absolute top-0 w-full">
      {lanterns.map((lantern, index) => (
        <Lantern key={index} {...lantern} />
      ))}
    </div>
  );
};

export default LanternDisplay;
