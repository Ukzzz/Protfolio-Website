import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgress: React.FC = () => {
  const progressRef = useScrollProgress();

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      ref={progressRef}
      style={{
        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981, #ec4899)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)',
        transform: 'scaleX(0)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    />
  );
};

export default ScrollProgress;
