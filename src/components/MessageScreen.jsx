import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiSend, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MessageScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const nglUsername = "_jagjeet_singh_"; // Replace with your actual NGL username

  const handleNglRedirect = () => {
    window.open(`https://ngl.link/${nglUsername}`, '_blank');
  };

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

      {/* Message Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Send Me a Message</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Share your thoughts anonymously through NGL
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Click the button below to send me an anonymous message via NGL
              </p>
            </div>
            <motion.button
              onClick={handleNglRedirect}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              <FiExternalLink />
              Send Anonymous Message on NGL
            </motion.button>
            
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
              <p>NGL is a platform for receiving anonymous messages.</p>
              <p>You'll be redirected to ngl.link/{nglUsername}</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MessageScreen;