// src/components/LoadingScreen.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CircleDashed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const poeticLines = [
  'Weaving your story together...',
  'Moments are being curated just for you ✨',
  'Almost ready to inspire...',
  'Your visual journey begins now...'
];

const FloatingParticle = () => {
  const size = Math.random() * 8 + 4;
  return (
    <motion.div
      className="absolute rounded-full bg-white opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 800);
        }
        return next;
      });
    }, 30);
    
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % poeticLines.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(quoteInterval);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => navigate('/'), 600);
    }
  }, [isLoaded, navigate]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Particles Background */}
          {Array.from({ length: 25 }).map((_, i) => (
            <FloatingParticle key={i} />
          ))}
          
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Animated Circle */}
            <motion.div
              className="relative mb-8 flex items-center justify-center"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <CircleDashed className="w-28 h-28 text-white opacity-30" />
              <motion.div
                className="absolute"
                animate={{ 
                  rotate: -720,
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{ 
                  rotate: { 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear" 
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                <Sparkles className="w-16 h-16 text-yellow-300" />
              </motion.div>
            </motion.div>

            {/* Poetic Line */}
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                className="text-xl font-light text-center text-white/90 mb-8 px-6 max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                {poeticLines[quoteIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Minimal Progress Bar */}
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-300 to-pink-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Percentage Text */}
            <motion.span 
              className="mt-4 text-white/70 font-light text-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}