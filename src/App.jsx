// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import IdentitySection from './components/sections/IdentitySection';
import VenturesSection from './components/sections/VenturesSection';
import SocialHubSection from './components/sections/SocialHubSection';
import AnonymousMessageSection from './components/sections/AnonymousMessageSection';
import IdentityScreen from './components/IdentityScreen';
import VenturesScreen from './components/VentureScreen';
import ConnectScreen from './components/ConnectScreen';
import MessageScreen from './components/MessageScreen';
import MusicBlog from './components/sections/MusicBlog';
import TechBlog from './components/sections/TechBlog';
import Projects from './components/sections/Projects';
import AboutMe from './components/sections/AboutMe';
import LoadingScreen from './components/LoadingScreen';
import ChillSection from './components/sections/ChillSection';

function MainContent() {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <VenturesSection />
      <SocialHubSection />
      <AnonymousMessageSection />
    </>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 6000); // Duration of loading screen before switching to main site

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
          {showLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/music" element={<MusicBlog />} />
                  <Route path="/blog" element={<TechBlog />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/identity" element={<IdentityScreen />} />
                  <Route path="/ventures" element={<VenturesScreen />} />
                  <Route path="/connect" element={<ConnectScreen />} />
                  <Route path="/message" element={<MessageScreen />} />
                 // Change the chill route to:
<Route path="/chill" element={<ChillSection />} /> <Route path="/chill" element={<ChillSection />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
