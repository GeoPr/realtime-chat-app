import React from 'react';
import './Button.scss';

export const Button: React.FC<{ className?: string }> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${className} button`}>
      {children}
    </button>
  );
};
