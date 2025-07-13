// src/components/IdentityScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const IdentityScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FiArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Identity Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Identity</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Who I am and what defines me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Personal</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Name</h3>
                <p className="text-gray-600 dark:text-gray-400">Jagjeet Singh</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">India</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Interests</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Web Development, Music, Photography
                </p>
              </div>
            </div>
          </div>

          {/* Professional Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Professional</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Skills</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, JavaScript, HTML/CSS, UI/UX Design
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">3+ years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Creativity', description: 'I believe in thinking outside the box and innovative solutions.' },
              { title: 'Integrity', description: 'Honesty and transparency guide all my professional relationships.' },
              { title: 'Growth', description: 'Continuous learning and self-improvement are my daily goals.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IdentityScreen;