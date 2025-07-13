import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/jagjeet-singh04" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FiGithub className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/jagjeet-singh-a71aa2251/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FiTwitter className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/_jagjeet_singh_/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@melody-drift05?si=hsbqzKorMd6IwHS_" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FiYoutube className="h-5 w-5" />
            </a>
            
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {currentYear} JaggiVerse. All rights reserved.
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-right text-sm text-gray-500">
          Made with <span className="text-pink-500">♥</span> using React & Vite
        </div>
      </div>
    </footer>
  );
};

export default Footer;