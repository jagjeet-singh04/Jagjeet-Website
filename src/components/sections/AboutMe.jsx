import React from 'react';
import { FiUser, FiMapPin, FiBriefcase, FiHeart } from 'react-icons/fi';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <FiUser className="text-green-500" />
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get to know the person behind the code
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <img 
                  src="/Profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Jagjeet Singh</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Full-stack developer passionate about creating beautiful, functional web applications. 
                I love solving complex problems and turning ideas into reality through code.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Based in Punjab, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiBriefcase className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Web Developer & Open Source Contributor</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiHeart className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Passionate about Music, Photography and Travel</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I started my coding journey in 2020, fascinated by how technology can solve real-world problems. 
              Since then, I've worked on various projects ranging from small business websites to complex web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me playing guitar, exploring new photography techniques, 
              or hiking in the mountains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;