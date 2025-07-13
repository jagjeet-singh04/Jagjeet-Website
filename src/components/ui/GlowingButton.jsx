// src/components/ui/GlowingButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlowingButton = ({ href, label, variant = 'primary' }) => {
  return (
    <motion.a
      href={href}
      className={`px-6 py-3 font-bold rounded-full relative overflow-hidden inline-block text-center min-w-[200px] ${
        variant === 'primary' 
          ? 'text-white' 
          : 'bg-white text-black dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {variant === 'primary' ? (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 z-0"
            animate={{
              background: [
                'linear-gradient(45deg, #6366f1, #8b5cf6)',
                'linear-gradient(45deg, #8b5cf6, #ec4899)',
                'linear-gradient(45deg, #ec4899, #6366f1)',
                'linear-gradient(45deg, #6366f1, #8b5cf6)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <span className="relative z-10">{label}</span>
        </>
      ) : (
        <span className="relative z-10">{label}</span>
      )}
    </motion.a>
  );
};

export default GlowingButton;