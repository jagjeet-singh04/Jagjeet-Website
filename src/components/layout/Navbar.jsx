import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chillMode, setChillMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize chillMode from localStorage
  useEffect(() => {
    const savedChillMode = localStorage.getItem('chillMode') === 'true';
    setChillMode(savedChillMode);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0); // Scroll to top when navigating home
  };

  const handleChillToggle = (e) => {
    e.preventDefault();
    const newChillMode = !chillMode;
    setChillMode(newChillMode);
    localStorage.setItem('chillMode', newChillMode);
    navigate('/chill');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'identity', label: 'Identity', path: '/identity' },
    { id: 'ventures', label: 'Ventures', path: '/ventures' },
    { id: 'social', label: 'Connect', path: '/connect' },
    { id: 'message', label: 'Message', path: '/message' },
  ];

  // Check if current route is the chill section
  const isChillSection = location.pathname === '/chill';

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Home - Fixed Link */}
          <div className="flex items-center">
            <Link 
              to="/" 
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
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleChillToggle}
              className={`text-sm font-medium ${
                isChillSection 
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
              }`}
            >
              {chillMode ? 'Chill (On)' : 'Chill'}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </motion.button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`block w-full px-4 py-2 text-left text-sm font-medium ${
                      location.pathname === item.path
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    } rounded-md`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={handleChillToggle}
                  className={`block w-full px-4 py-2 text-left text-sm font-medium ${
                    isChillSection 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  } rounded-md`}
                >
                  {chillMode ? 'Chill Mode (On)' : 'Chill Mode'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;