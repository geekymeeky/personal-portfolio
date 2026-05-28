import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth trailing spring for the outer ring
  const springX = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 });
  const springY = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 16); // Center the 32px ring
      springY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor on clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('skill-badge')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [springX, springY]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot (Instant Follow) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Outer Ring (Spring Follow) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '32px',
          height: '32px',
          border: '1px solid var(--color-primary)',
          backgroundColor: isHovering ? 'rgba(0, 161, 224, 0.1)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(0, 161, 224, 0)' : 'rgba(0, 161, 224, 0.5)',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
