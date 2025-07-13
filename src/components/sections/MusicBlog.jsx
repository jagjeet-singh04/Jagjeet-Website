import React, { useState } from 'react';
import { FiMusic, FiYoutube, FiList } from 'react-icons/fi';

const MusicBlog = () => {
  const [activePlaylist, setActivePlaylist] = useState(0);

  // Your three playlist IDs
  const playlists = [
    {
      id: 'RDJTYkdHihcZc',
      title: 'Chill Vibes',
      description: 'Relaxing music for coding sessions'
    },
    {
      id: 'RDDlkSbeFJTpc',
      title: 'Devotional',
      description: 'Concentration-boosting Devotional tracks'
    },
    {
      id: 'RDV9PVRfjEBTI',
      title: 'Energy Boost',
      description: 'Upbeat tunes for when you need motivation'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <FiMusic className="text-pink-500" />
          My Music Playlists
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Switch between different moods and vibes
        </p>
      </div>

      {/* Playlist Selector Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {playlists.map((playlist, index) => (
            <button
              key={playlist.id}
              onClick={() => setActivePlaylist(index)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activePlaylist === index
                  ? 'bg-white dark:bg-gray-700 shadow text-pink-600 dark:text-pink-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <FiList />
                {playlist.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Playlist Display */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlists[activePlaylist].id}&autoplay=0`}
            title={playlists[activePlaylist].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px]"
          ></iframe>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {playlists[activePlaylist].title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {playlists[activePlaylist].description}
          </p>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists[activePlaylist].id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
          >
            <FiYoutube className="mr-2" />
            Open on YouTube
          </a>
        </div>
      </div>

      {/* Playlist Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {playlists.map((playlist, index) => (
          <div 
            key={playlist.id} 
            className={`cursor-pointer transition-all ${
              activePlaylist === index ? 'ring-2 ring-pink-500' : 'opacity-80 hover:opacity-100'
            }`}
            onClick={() => setActivePlaylist(index)}
          >
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${playlist.id.substring(0, 11)}/mqdefault.jpg`}
                alt={playlist.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900 dark:text-white">{playlist.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{playlist.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicBlog;