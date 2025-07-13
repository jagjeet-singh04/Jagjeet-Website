import React from 'react';
import { FiGithub, FiExternalLink, FiZap } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "This very website you're viewing right now! Built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Admin dashboard for e-commerce stores with analytics and inventory management",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      liveUrl: "https://dashboard.example.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Kanban-style task management application with real-time updates",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://tasks.example.com"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <FiZap className="text-yellow-500" />
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A collection of my recent work and open-source contributions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <FiGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;