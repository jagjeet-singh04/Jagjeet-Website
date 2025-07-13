import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import IdentitySection from './components/sections/IdentitySection';
import VenturesSection from './components/sections/VenturesSection';
import SocialHubSection from './components/sections/SocialHubSection';
import AnonymousMessageSection from './components/sections/AnonymousMessageSection';
import ChillSection from './components/sections/ChillSection';
import IdentityScreen from './components/IdentityScreen';
import VenturesScreen from './components/VentureScreen';
import ConnectScreen from './components/ConnectScreen';
import MessageScreen from './components/MessageScreen';

function MainContent({ chillMode, setChillMode }) {
  return chillMode ? (
    <ChillSection onClose={() => setChillMode(false)} />
  ) : (
    <main className="flex-grow">
      <HeroSection />
      <IdentitySection />
      <VenturesSection />
      <SocialHubSection />
      <AnonymousMessageSection />
    </main>
  );
}

function App() {
  const [chillMode, setChillMode] = useState(false);

  const handleHomeClick = () => {
    setChillMode(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar 
            chillMode={chillMode}
            onChillToggle={() => setChillMode(!chillMode)}
            onHomeClick={handleHomeClick}
          />
          
          <Routes>
            <Route path="/" element={<MainContent chillMode={chillMode} setChillMode={setChillMode} />} />
            <Route path="/identity" element={<IdentityScreen />} />
            <Route path="/ventures" element={<VenturesScreen />} />
            <Route path="/connect" element={<ConnectScreen />} />
            <Route path="/message" element={<MessageScreen />} />
          </Routes>
          
          {/* Only show footer on home page */}
          {window.location.pathname === '/' && !chillMode && <Footer />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;