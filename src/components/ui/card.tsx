import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`p-6 rounded-[var(--radius-card,16px)] border transition-all duration-300 hover:border-brand ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--shadow-card, 0 4px 20px -2px rgba(0,0,0,0.05))',
      }}
    >
      {children}
    </div>
  );
};