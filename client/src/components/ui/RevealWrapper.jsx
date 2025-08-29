import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';


export const RevealWrapper= ({ 
  children, 
  delay = 0,
  className 
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef}
      className={(
        'transition-all duration-600 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};