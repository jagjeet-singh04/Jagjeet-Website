// src/components/ui/TechStackBadge.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TechStackBadge = ({ tech, index }) => {
  return (
    <motion.span 
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
      }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200"
    >
      {tech}
    </motion.span>
  );
};

export default TechStackBadge;