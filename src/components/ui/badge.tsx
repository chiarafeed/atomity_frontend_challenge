import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'alert';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'brand' }) => {
  const isAlert = variant === 'alert';

  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
      style={{
        backgroundColor: isAlert ? 'var(--color-badge-alert-bg)' : 'var(--color-accent-subtle)',
        color: isAlert ? 'var(--color-badge-alert-text)' : 'var(--color-accent-primary)',
        border: `1px solid ${isAlert ? 'var(--color-badge-alert-text)' : 'var(--color-accent-primary)'}`,
      }}
    >
      {children}
    </span>
  );
};