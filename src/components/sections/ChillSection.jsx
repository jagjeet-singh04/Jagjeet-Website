import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useLocation } from 'react-router-dom';
import SakuraPetalEffect from '../ui/SakuraPetalBackground';
import KrishnaBot from '../KrishnaBot';

const ChillSection = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [petalsActive, setPetalsActive] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('ambience');
  const audioRef = React.useRef(null);

  useEffect(() => {
    // Check URL for tab parameter
    const tabParam = searchParams.get('tab');
    if (tabParam && ['ambience', 'music', 'chat'].includes(tabParam)) {
      setActiveTab(tabParam);
    }

    // If coming from hero section, auto-play music
    if (location.state?.fromHero) {
      setMusicPlaying(true);
    }

    // Audio initialization
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/background-music-edited.mp3');
      audioRef.current.loop = true;
    }
    
    try {
      audioRef.current.play()
        .then(() => setMusicPlaying(true))
        .catch(e => console.log('Auto-play prevented:', e));
    } catch (e) {
      console.log('Audio play error:', e);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [searchParams, location.state]);

  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      {petalsActive && <SakuraPetalEffect />}
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center px-4 py-8">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-2 text-pink-600 dark:text-pink-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chill Zone
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Relax and enjoy the peaceful atmosphere
          </motion.p>
        </div>
        
        <div className="flex justify-center mb-6 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow flex">
            <button
              onClick={() => setActiveTab('ambience')}
              className={`px-4 py-2 transition-colors ${
                activeTab === 'ambience'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } ${activeTab === 'ambience' ? 'rounded-l-lg' : ''}`}
            >
              Ambience
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className={`px-4 py-2 transition-colors ${
                activeTab === 'music'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Music Video
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2 transition-colors ${
                activeTab === 'chat'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } ${activeTab === 'chat' ? 'rounded-r-lg' : ''}`}
            >
              Chat with Krishna Bot
            </button>
          </div>
        </div>
        
        <div className="px-4 pb-8">
          {activeTab === 'ambience' ? (
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Ambience Controls</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <button
                    onClick={() => setPetalsActive(!petalsActive)}
                    className="px-4 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow flex items-center"
                  >
                    <span className="mr-1">{petalsActive ? '🌺' : '🌸'}</span>
                    {petalsActive ? 'Hide Petals' : 'Show Petals'}
                  </button>
                  <button
                    onClick={toggleMusic}
                    className="px-4 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow flex items-center"
                  >
                    {musicPlaying ? '🔇 Pause Music' : '🔊 Play Music'}
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <div className={`w-3 h-3 rounded-full ${musicPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                  <span>Ambient music {musicPlaying ? 'playing' : 'paused'}</span>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'music' ? (
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Relaxing Music</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/mUoikX9uYcs?rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
                  <p>Enjoy this relaxing music to help you unwind and chill</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <KrishnaBot 
              musicPlaying={musicPlaying}
              toggleMusic={toggleMusic}
              petalsActive={petalsActive}
              togglePetals={() => setPetalsActive(!petalsActive)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChillSection;