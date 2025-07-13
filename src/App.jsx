import React from 'react';
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
import MusicBlog from './components/sections/MusicBlog';
import TechBlog from './components/sections/TechBlog';
import Projects from './components/sections/Projects';
import AboutMe from './components/sections/AboutMe';

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
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Home route */}
              <Route path="/" element={<MainContent />} />
              
              {/* Individual section routes */}
              <Route path="/music" element={<MusicBlog />} />
              <Route path="/blog" element={<TechBlog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/identity" element={<IdentityScreen />} />
              <Route path="/ventures" element={<VenturesScreen />} />
              <Route path="/connect" element={<ConnectScreen />} />
              <Route path="/message" element={<MessageScreen />} />
              <Route path="/chill" element={<ChillSection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;