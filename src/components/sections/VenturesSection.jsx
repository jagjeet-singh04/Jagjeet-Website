import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../layout/SectionWrapper';

const VenturesSection = () => {
  const projects = [
    {
      id: 1,
      name: "Smart Form AI",
      tagline: "AI-Powered Form Builder",
      description: "Intelligent form generator that creates dynamic forms from natural language descriptions using AI.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      link: "https://smart-form-ai.vercel.app/",
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
      link: "https://flight-booking-app-ochre.vercel.app/",
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
      link: "https://stock-vision-six.vercel.app/",
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
      link: "https://quick-talk-ten.vercel.app/",
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
      link: "https://anime-wallpaper-phi.vercel.app/",
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
      link: "https://quotes-app-pearl.vercel.app/",
      cta: "Get Inspired",
      status: "live",
      accent: "bg-gradient-to-r from-violet-500 to-fuchsia-500"
    }
  ];

  return (
    <SectionWrapper 
      id="ventures" 
      title="🚀 Innovation Labs" 
      subtitle="Where ideas come to life. Explore my latest ventures and experiments." 
      bgClass="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-5 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </SectionWrapper>
  );
};

export default VenturesSection;