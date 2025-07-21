import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const VenturesScreen = () => {
  const projects = [
    {
      id: 1,
      name: "Smart Form AI",
      tagline: "AI-Powered Form Builder",
      description: "Intelligent form generator that creates dynamic forms from natural language descriptions using AI.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      link: "#",
      cta: "Try Demo",
      status: "live",
      accent: "bg-gradient-to-r from-blue-400 to-purple-500"
    },
    {
      id: 2,
      name: "Flight Booking",
      tagline: "Seamless Travel Experience",
      description: "Comprehensive flight booking platform with real-time availability, price tracking, and instant booking.",
      tech: ["Next.js", "Express", "PostgreSQL", "Redis"],
      link: "#",
      cta: "Visit Site",
      status: "live",
      accent: "bg-gradient-to-r from-cyan-500 to-sky-600"
    },
    {
      id: 3,
      name: "Stock Vision",
      tagline: "Intelligent Market Analysis",
      description: "AI-powered stock analysis platform providing predictive insights and real-time market visualization.",
      tech: ["Python", "TensorFlow", "React", "Firebase"],
      link: "#",
      cta: "Learn More",
      status: "live",
      accent: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    {
      id: 4,
      name: "Quick Talk",
      tagline: "Real-Time Chat Application",
      description: "High-performance chat platform with end-to-end encryption, file sharing, and video calling capabilities.",
      tech: ["React", "WebRTC", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      cta: "Try Demo",
      status: "live",
      accent: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      id: 5,
      name: "Anime Wallpaper",
      tagline: "Curated Art Collection",
      description: "Beautifully designed wallpaper gallery featuring high-quality anime artwork with daily updates.",
      tech: ["Next.js", "Tailwind CSS", "GraphQL", "Contentful"],
      link: "#",
      cta: "Explore Gallery",
      status: "live",
      accent: "bg-gradient-to-r from-amber-400 to-orange-500"
    },
    {
      id: 6,
      name: "Inspire Quotes",
      tagline: "Daily Motivation Engine",
      description: "Beautiful quote generator with sharing capabilities and daily inspiration delivered to your inbox.",
      tech: ["React", "Firebase", "Tailwind CSS", "Netlify"],
      link: "#",
      cta: "Get Inspired",
      status: "live",
      accent: "bg-gradient-to-r from-violet-500 to-fuchsia-500"
    }
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

      {/* Ventures Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            🚀 Innovation Labs
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Where ideas come to life. Explore my latest ventures and experiments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: project.id * 0.1 }}
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
                    
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Live
                    </span>
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
          ))}
        </div>

        {/* Decorative elements */}
        <div className="fixed top-10 left-5 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="fixed bottom-10 right-5 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
};

export default VenturesScreen;