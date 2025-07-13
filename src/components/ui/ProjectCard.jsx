// src/components/ui/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow"
    >
      <div className="flex-shrink-0 h-48 bg-gray-200 dark:bg-gray-700 border-2 border-dashed" />
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>
            {project.status === 'upcoming' && (
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                Coming Soon
              </span>
            )}
          </div>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
            {project.tagline}
          </p>
          <p className="mt-3 text-base text-gray-700 dark:text-gray-200">
            {project.description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {project.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;