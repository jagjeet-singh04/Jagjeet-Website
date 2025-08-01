import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import GlowingButton from '../ui/GlowingButton';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  const openKrishnaBot = () => {
    // Navigate directly to chill mode with chat tab active
    navigate('/chill?tab=chat', { state: { fromHero: true } });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-gray-900/80 dark:to-gray-900" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
        {/* Profile image animation */}
        <motion.div
          className="relative mx-auto mb-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: 'reverse' 
              }}
            />
            
            {/* Middle gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Inner solid circle */}
            <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900" />
            
            {/* Profile image */}
            {!imageError ? (
              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-full h-full bg-gray-200 animate-pulse" />
                <img
                  src="/Profile.jpg"
                  alt="Profile"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 border-4 border-white dark:border-gray-800 shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2 text-indigo-500">👤</div>
                  <p className="text-gray-500 text-sm">Profile Image</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Main heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block text-gray-900 dark:text-white">Welcome to</span>
          <motion.span 
            className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-3"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            style={{ 
              backgroundSize: '200% 200%',
            }}
          >
            JaggiVerse
          </motion.span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          My digital hub for projects, experiments, and professional journey
        </motion.p>
        
        {/* Action buttons */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <GlowingButton href="#identity" label="Explore My Work" />
          <GlowingButton 
            href="#message" 
            label="Send Message" 
            variant="secondary" 
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="animate-bounce w-6 h-6 border-r-2 border-b-2 border-gray-700 dark:border-gray-300 transform rotate-45"></div>
      </motion.div>
      
      {/* Krishna Chat Button */}
      <motion.button
        onClick={openKrishnaBot}
        className="fixed right-6 bottom-6 z-50 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with Krishna"
      >
        <div className="relative">
          <FiMessageSquare className="text-white text-2xl" />
          <motion.span
            className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
        <motion.div
          className="absolute -bottom-12 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Chat with Krishna
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;