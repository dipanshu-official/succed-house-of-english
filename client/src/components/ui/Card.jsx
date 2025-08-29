import React from 'react';



export const Card = ({ children, className, hover = true }) => {
  return (
    <div
      className={(
        'bg-white rounded-xl shadow-lg p-8',
        hover && 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};