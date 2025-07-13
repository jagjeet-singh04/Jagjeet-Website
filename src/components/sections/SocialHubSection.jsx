import React from 'react';
import { motion } from 'framer-motion';
import SocialButton from '../ui/SocialButton';
import SectionWrapper from '../layout/SectionWrapper';

const SocialHubSection = () => {
  const socialLinks = [
    { 
      icon: 'FiGithub', 
      name: "GitHub", 
      color: "text-gray-800 dark:text-gray-200",
      url: "https://github.com/jagjeet-singh04" 
    },
    { 
      icon: 'FiLinkedin', 
      name: "LinkedIn", 
      color: "text-blue-600",
      url: "https://www.linkedin.com/in/jagjeet-singh-a71aa2251/" 
    },
    { 
      icon: 'FiTwitter', 
      name: "Twitter", 
      color: "text-blue-400",
      url: "https://twitter.com/yourhandle" 
    },
    { 
      icon: 'FiInstagram', 
      name: "Instagram", 
      color: "text-pink-600",
      url: "https://www.instagram.com/_jagjeet_singh_/" 
    },
    { 
      icon: 'FiYoutube', 
      name: "YouTube", 
      color: "text-red-600",
      url: "https://youtube.com/@melody-drift05?si=hsbqzKorMd6IwHS_" 
    },
    { 
      icon: 'FiGlobe', 
      name: "Portfolio", 
      color: "text-indigo-600",
      url: "https://yourportfolio.com" 
    },
  ];

  return (
    <SectionWrapper id="social" title="🌍 Let's Connect" subtitle="Find me across the digital universe" bgClass="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {socialLinks.map((social, index) => (
            <SocialButton 
              key={social.name} 
              social={social} 
              index={index}
              url={social.url}  // Pass URL to SocialButton
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SocialHubSection;