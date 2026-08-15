'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { tokens } from '../tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{ duration: tokens.animation.durationFast, ease: 'easeOut' }}
      className={`card-container p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: tokens.colors.bgSurface,
        borderColor: tokens.colors.border,
        boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
      }}
    >
      {children}
    </motion.div>
  );
};