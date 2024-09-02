import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, link, image }) => {
  return (
    <motion.div className="flex flex-col sm:flex-row bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-700" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4" />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>
        <a href={link} className="text-pink-600 hover:text-pink-500 mt-4 inline-block">
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
