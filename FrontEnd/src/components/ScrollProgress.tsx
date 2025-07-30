import React from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgress: React.FC = () => {
  const progressRef = useScrollProgress();

  return (
    <div className="scroll-indicator" ref={progressRef} />
  );
};

export default ScrollProgress;
