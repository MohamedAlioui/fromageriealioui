import React from 'react';
import { IconProps } from './types';

export const MilkIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8l2 4H6L8 2z"/>
    <path d="M4 6l2 15h12l2-15H4z"/>
    <path d="M6 10h12"/>
  </svg>
);

export const CheeseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c0-3 .5-5.5 1.5-7.5s2.5-3 4.5-3c1.5 0 2.75.5 3.75 1.5s1.5 2.25 1.5 3.75c0 1.25-.42 2.31-1.25 3.19-.83.87-1.86 1.31-3.06 1.31-1 0-1.83-.33-2.5-1s-1-1.5-1-2.5"/>
    <path d="M3 3l18 18"/>
  </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

export const TruckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 3h15v13H1z"/>
    <path d="M16 8h4l3 3v5h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);