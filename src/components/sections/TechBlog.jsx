import React from 'react';
import { FiBookOpen, FiCode } from 'react-icons/fi';

const TechBlog = () => {
  const articles = [
    {
      id: 1,
      title: "React Performance Optimization",
      date: "May 15, 2023",
      excerpt: "Learn advanced techniques to optimize your React applications",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Building with Vite",
      date: "April 2, 2023",
      excerpt: "Why Vite is becoming the preferred build tool for modern web apps",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      date: "March 10, 2023",
      excerpt: "How we use TypeScript to improve code quality at scale",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <FiBookOpen className="text-blue-500" />
          Tech Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Thoughts, tutorials and insights about web development
        </p>
      </div>

      <div className="space-y-8">
        {articles.map(article => (
          <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiCode className="text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Read Article →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TechBlog;