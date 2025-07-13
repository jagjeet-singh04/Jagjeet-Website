import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ConnectScreen = () => {
  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/jagjeet-singh04' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/jagjeet-singh-a71aa2251/' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://www.instagram.com/_jagjeet_singh_/' },
    { icon: <FiMail />, name: 'Email', url: 'mailto:jagjeetsingh0424@gmail.com' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FiArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* Connect Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Reach out through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="text-2xl text-blue-500">{social.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{social.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{social.url.replace('mailto:', '')}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectScreen;