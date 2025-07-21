import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import TechStackBadge from '../ui/TechStackBadge';
import SectionWrapper from '../layout/SectionWrapper';

// Replace with your actual image path
import profileImage from '/Profile.jpg';

const IdentitySection = () => {
  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 
    'GraphQL', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SectionWrapper id="identity" title="Professional Identity" bgClass="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="relative group flex-shrink-0"
            >
              {/* Professional Profile Image */}
              <img 
                src={profileImage} 
                alt="Jagjeet Singh" 
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover z-10 relative"
              />
              
              {/* Casual/Playful Element */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                animate={{ rotate: 360 }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" } 
                }}
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-indigo-300 dark:bg-indigo-800 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Jagjeet Singh</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                Software Developer | Startup Enthusiast | Builder of Things
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white dark:bg-gray-700 shadow text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              
              <p className="mt-4 text-gray-700 dark:text-gray-200">
                Building digital solutions that solve real-world problems with JavaScript ecosystem. 
                Passionate about creating scalable applications and innovative products.
              </p>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#4338ca',
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </motion.button>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tech Stack</h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {techStack.map((tech, index) => (
                <TechStackBadge key={tech} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default IdentitySection;