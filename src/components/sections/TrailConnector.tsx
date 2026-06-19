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
    <div ref={ref} className="absolute top-0 bottom-0 left-lg w-[2px] z-0 pointer-events-none bg-white/5">
      <motion.div
        className="w-full h-full origin-top shadow-[0_0_20px_2px_rgba(0,161,224,1)]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          scaleY,
        }}
      />
    </div>
  );
};

export default TrailConnector;
