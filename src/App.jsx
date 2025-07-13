// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import IdentitySection from './components/sections/IdentitySection';
import VenturesSection from './components/sections/VenturesSection';
import SocialHubSection from './components/sections/SocialHubSection';
import AnonymousMessageSection from './components/sections/AnonymousMessageSection';
import ChillSection from './components/sections/ChillSection';

function App() {
  const [chillMode, setChillMode] = useState(false);

  const handleHomeClick = () => {
    setChillMode(false); // Always exit chill mode when going home
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar 
          chillMode={chillMode}
          onChillToggle={() => setChillMode(!chillMode)}
          onHomeClick={handleHomeClick}
        />
        
        {chillMode ? (
          <ChillSection 
            onClose={() => setChillMode(false)}
          />
        ) : (
          <main className="flex-grow">
            <HeroSection />
            <IdentitySection />
            <VenturesSection />
            <SocialHubSection />
            <AnonymousMessageSection />
          </main>
        )}
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;