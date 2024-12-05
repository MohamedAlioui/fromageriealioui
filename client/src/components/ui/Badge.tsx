import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info';
}

export function Badge({ children, variant = 'info' }: BadgeProps) {
  const variants = {
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    info: 'bg-blue-100 text-blue-800'
  };

  return (
    <span className={`${variants[variant]} px-2.5 py-0.5 rounded-full text-xs font-medium`}>
      {children}
    </span>
  );
}