import React from 'react';
import { Scroll } from '@react-three/drei';

const Overlay: React.FC = () => {
  // HTML Overlay that scrolls along with the 3D scene using Scroll component
  return (
    <Scroll html style={{ width: '100vw', height: '100vh', color: 'white' }}>
      {/* We can place HTML content that strictly follows the scroll here.
          Alternatively, if we want absolute fixed HTML, we place it outside <Scroll html>.
          For this portfolio, we'll rely mostly on 3D text (Drei Text) and some HTML overlays 
          for buttons or complex UI. Let's keep it minimal here for now. */}
      
      <div style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 10 }}>
        <h2 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '2px', margin: 0 }}>SRIJAN KUMAR GUPTA</h2>
        <p style={{ color: '#00d2ff', margin: '4px 0 0 0', fontWeight: 600 }}>Salesforce Developer</p>
      </div>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 10 }}>
        <p style={{ color: '#FFFFFF', fontSize: '0.8rem', opacity: 0.5, letterSpacing: '1px' }}>SCROLL TO EXPLORE</p>
      </div>
    </Scroll>
  );
};

export default Overlay;
