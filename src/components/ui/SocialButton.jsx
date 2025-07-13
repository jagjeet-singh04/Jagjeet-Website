// SocialButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube, FiGlobe } from 'react-icons/fi';

const SocialButton = ({ social, index, url }) => {
  // Map icon names to components
  const iconMap = {
    FiGithub: FiGithub,
    FiLinkedin: FiLinkedin,
    FiTwitter: FiTwitter,
    FiInstagram: FiInstagram,
    FiYoutube: FiYoutube,
    FiGlobe: FiGlobe
  };
  
  const IconComponent = iconMap[social.icon];

  return (
    <motion.a
      href={url}  // Use the URL here
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all ${social.color}`}
    >
      <IconComponent className="w-6 h-6 mb-2" />
      <span className="text-sm font-medium">{social.name}</span>
    </motion.a>
  );
};

export default SocialButton;