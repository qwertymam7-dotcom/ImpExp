import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    // Updated to use spice-terracotta and corporate (green)
    primary: 'bg-spice-terracotta text-white hover:bg-spice-ochre shadow-md border border-transparent',
    secondary: 'bg-corporate-700 text-white hover:bg-corporate-800 shadow-sm',
    outline: 'border-2 border-spice-terracotta text-spice-terracotta hover:bg-spice-cream',
    ghost: 'text-corporate-700 hover:bg-corporate-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-spice-turmeric focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
