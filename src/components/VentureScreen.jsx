import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const VenturesScreen = () => {
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

      {/* Ventures Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Ventures</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Projects and initiatives I'm involved in
          </p>
        </div>

        <div className="grid gap-8">
          {[
            {
              title: "Web Development Projects",
              description: "Collection of websites and web applications I've built",
              items: ["E-commerce platform", "Portfolio websites", "Web apps"]
            },
            {
              title: "Open Source Contributions",
              description: "Projects I've contributed to",
              items: ["React libraries", "UI components", "Documentation"]
            },
            {
              title: "Community Initiatives",
              description: "Programs I've organized or participated in",
              items: ["Coding workshops", "Mentorship programs", "Tech talks"]
            }
          ].map((venture, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{venture.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{venture.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {venture.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VenturesScreen;