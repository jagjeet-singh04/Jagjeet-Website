import React from 'react';
import { 
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube,
  FiMail, FiHeart, FiCode, FiCoffee, FiMessageSquare,
  FiMusic, FiCamera, FiBookOpen, FiZap
} from 'react-icons/fi';
import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Interactive elements data
 const quickLinks = [
  { 
    icon: <FiMusic />, 
    label: 'Music Blog', 
    url: '/music',
    description: 'Explore my music recommendations and playlists'
  },
  { 
    icon: <FiBookOpen />, 
    label: 'Tech Blog', 
    url: '/blog',
    description: 'Read my latest articles on web development and tech'
  },
  { 
    icon: <FiZap />, 
    label: 'Projects', 
    url: '/projects',
    description: 'Check out my open-source projects and experiments'
  },
 
  { 
    icon: <FiHeart />, 
    label: 'About Me', 
    url: '/about',
    description: 'Learn more about my journey and interests'
  }
];
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Left Column - Social & Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiMessageSquare className="text-blue-400" />
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/jagjeet-singh04' },
                { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagjeet-singh-a71aa2251/' },
                { icon: <FiTwitter />, label: 'Twitter', url: 'https://twitter.com' },
                { icon: <FiInstagram />, label: 'Instagram', url: 'https://www.instagram.com/_jagjeet_singh_/' },
                { icon: <FiYoutube />, label: 'YouTube', url: 'https://youtube.com/@melody-drift05' },
                { icon: <FiMail />, label: 'Email', url: 'mailto:jagjeetsingh0424@gmail.com' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all hover:translate-x-1 hover:text-white"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

        {/* Middle Column - Quick Actions */}
<div>
  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <FiZap className="text-yellow-400" />
    Quick Navigation
  </h3>
  <div className="grid grid-cols-1 gap-3">
    {quickLinks.map((link, index) => (
      <a 
        key={index}
        href={link.url}
        className="group p-4 bg-gray-800 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-purple-400 text-xl group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
          <div>
            <div className="font-medium group-hover:text-white">{link.label}</div>
            <div className="text-sm text-gray-400 group-hover:text-gray-300">
              {link.description}
            </div>
          </div>
          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
      </a>
    ))}
  </div>
</div>

          {/* Right Column - Tech Stack with Interactive Elements */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiCode className="text-green-400" />
              Built With
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaReact className="text-blue-400" />, name: 'React', tip: 'For building UI components' },
                { icon: <SiVite className="text-purple-400" />, name: 'Vite', tip: 'Blazing fast builds' },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind', tip: 'Utility-first CSS' },
                { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript', tip: 'Type-safe JavaScript' },
                { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js', tip: 'Backend runtime' },
                { icon: <FiHeart className="text-pink-500" />, name: 'Passion', tip: 'What drives me' }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="relative group p-4 bg-gray-800 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-default"
                  data-tip={tech.tip}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-gray-900 border-opacity-100"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm">
              <span className="text-white font-medium">JaggiVerse</span>
              <span className="mx-2 text-gray-500">•</span>
              <span>&copy; {currentYear} All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm bg-gray-800 px-4 py-2 rounded-full">
                <FiCoffee className="text-yellow-500" />
                <span>Fueled by Chai</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-800 px-4 py-2 rounded-full">
                <FiHeart className="text-pink-500" />
                <span>Made with love</span>
              </div>
            </div>
          </div>

          {/* Interactive Feedback Section */}
          <div className="mt-8 p-6 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700">
            <h4 className="text-lg font-medium text-white mb-4">Enjoying my work?</h4>
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all">
                <FiMessageSquare />
                <span>Leave Feedback</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all">
                <FiCoffee />
                <span>Buy Me Chai</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;