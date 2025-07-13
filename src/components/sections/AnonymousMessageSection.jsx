import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';

const AnonymousMessageSection = () => {
  return (
    <SectionWrapper id="message" title="💌 Anonymous Messages" subtitle="Share your thoughts freely - no names attached" bgClass="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-0.5"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-[15px] p-8 text-center">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Drop me something anonymously
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Questions, feedback, or just a hello! I won't know who sent it.
            </p>
            
            <motion.a 
              href="https://ngl.link/_jagjeet_singh_" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send a Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AnonymousMessageSection;