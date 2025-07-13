import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import TechStackBadge from '../ui/TechStackBadge';
import SectionWrapper from '../layout/SectionWrapper';

const IdentitySection = () => {
  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 
    'GraphQL', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <SectionWrapper id="identity" title="Professional Identity" bgClass="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32 flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Johnson</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                Software Developer | Startup Enthusiast | Builder of Things
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-200">
                Building digital solutions that solve real-world problems with JavaScript ecosystem. 
                Passionate about creating scalable applications and innovative products.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </motion.button>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tech Stack</h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {techStack.map((tech, index) => (
                <TechStackBadge key={tech} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default IdentitySection;