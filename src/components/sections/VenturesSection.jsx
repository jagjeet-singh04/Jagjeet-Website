import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../layout/SectionWrapper';

const VenturesSection = () => {
  const projects = [
    {
      id: 1,
      name: "SaaS Platform",
      tagline: "All-in-one business solution",
      description: "A comprehensive SaaS platform helping businesses automate their workflows with AI-powered tools and integrations.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
      cta: "Visit Site",
      status: "live"
    },
    {
      id: 2,
      name: "AI Writing Assistant",
      tagline: "Next-gen productivity tool",
      description: "AI-powered writing assistant that helps create content 10x faster with advanced NLP and machine learning.",
      tech: ["Python", "TensorFlow", "Next.js", "Firebase"],
      link: "#",
      cta: "Learn More",
      status: "live"
    },
    {
      id: 3,
      name: "Fitness Tracker",
      tagline: "Health and wellness companion",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      tech: ["React Native", "Redux", "Node.js", "MongoDB"],
      link: "#",
      cta: "Coming Soon",
      status: "upcoming"
    }
  ];

  return (
    <SectionWrapper id="ventures" title="🚀 Innovation Labs" subtitle="Where ideas come to life. Explore my latest ventures and experiments." bgClass="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VenturesSection;