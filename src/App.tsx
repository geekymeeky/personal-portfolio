import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import Navbar from './components/sections/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperienceDetail from './pages/ExperienceDetail';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />

          {/* Fixed WebGL Background */}
          <div className="webgl-background">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>

          {/* Router Outlet for the Scrolling DOM Overlay */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
