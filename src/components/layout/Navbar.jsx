// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = ({ chillMode, onChillToggle, onHomeClick }) => {
  const { darkMode, toggleTheme } = useTheme();

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick(); // This will exit chill mode if active
    
    // Only scroll if we're not in chill mode
    if (!chillMode) {
      const element = document.getElementById('home');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id) => {
    if (chillMode) return; // Don't scroll if in chill mode
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center group"
              onClick={handleHomeClick}
            >
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl w-8 h-8 flex items-center justify-center transition-transform group-hover:rotate-12">
                <FiGithub className="text-gray-800 dark:text-gray-200" />
              </div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-2 text-xl font-bold text-gray-900 dark:text-white"
              >
                JaggiVerse
              </motion.span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('identity')}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Identity
            </button>
            <button
              onClick={() => scrollToSection('ventures')}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Ventures
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Connect
            </button>
            <button
              onClick={() => scrollToSection('message')}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Message
            </button>
            <button
              onClick={onChillToggle}
              className={`text-sm font-medium ${
                chillMode 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
              }`}
            >
              {chillMode ? 'Chill (On)' : 'Chill'}
            </button>
          </nav>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;