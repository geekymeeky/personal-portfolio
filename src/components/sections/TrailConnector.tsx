import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const TrailConnector: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} style={{
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: 'var(--space-lg)', // Align with the content padding
      width: '2px',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'rgba(255, 255, 255, 0.05)', // Faint background track
    }}>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          scaleY,
          transformOrigin: 'top',
          boxShadow: '0 0 20px 2px var(--color-primary)'
        }}
      />
    </div>
  );
};

export default TrailConnector;
