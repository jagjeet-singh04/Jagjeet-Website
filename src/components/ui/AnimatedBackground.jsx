import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-500/10 dark:bg-indigo-400/10"
          initial={{
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
        />
      ))}
      
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 20%)',
            'radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 20%)',
            'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 20%)',
            'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 20%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;