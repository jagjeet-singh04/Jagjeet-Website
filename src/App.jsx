import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function Layout({ children }) {
  const location = useLocation();
  const hideFooterRoutes = ['/chill'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <MainContent />
            </Layout>
          } />
          <Route path="/identity" element={
            <Layout>
              <IdentityScreen />
            </Layout>
          } />
          <Route path="/ventures" element={
            <Layout>
              <VenturesScreen />
            </Layout>
          } />
          <Route path="/connect" element={
            <Layout>
              <ConnectScreen />
            </Layout>
          } />
          <Route path="/message" element={
            <Layout>
              <MessageScreen />
            </Layout>
          } />
          <Route path="/chill" element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <ChillSection />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;