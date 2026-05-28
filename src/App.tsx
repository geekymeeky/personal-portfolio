import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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

const RootLayout: React.FC = () => {
  return (
    <HelmetProvider>
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

        {/* Router Outlet for nested pages */}
        <Outlet />

        <Footer />
      </div>
    </HelmetProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/experience/:id', element: <ExperienceDetail /> },
      { path: '/project/:id', element: <ProjectDetail /> },
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
