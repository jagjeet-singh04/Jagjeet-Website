// src/ui/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col group">
        {/* Accent bar */}
        <div className={`h-2 ${project.accent}`}></div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{project.tagline}</p>
            </div>
            
            {project.status === "live" && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Live
              </span>
            )}
            {project.status === "upcoming" && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Coming Soon
              </span>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
            {project.description}
          </p>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium ${project.accent} shadow-md transition-all`}
            >
              <span className="mr-2">{project.cta}</span>
              <FiExternalLink className="text-sm" />
            </motion.a>
            
            <motion.a
              href={project.github || "#"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="GitHub repository"
            >
              <FiGithub className="text-lg" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;