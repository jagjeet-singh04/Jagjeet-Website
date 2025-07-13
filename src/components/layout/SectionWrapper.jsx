// src/components/layout/SectionWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, subtitle, bgClass, children }) => {
  return (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;