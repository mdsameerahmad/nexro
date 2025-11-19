import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'rounded-[35px] font-satoshi font-bold tracking-wide transition-all duration-200';
  
  const variants = {
    primary: 'bg-button-1 text-global-5 hover:opacity-90',
    secondary: 'bg-global-2 text-global-1 hover:bg-opacity-90'
  };

  const sizes = {
    sm: 'px-4 py-2 text-lg',
    md: 'px-8 py-4 text-xl',
    lg: 'px-12 py-6 text-2xl'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;