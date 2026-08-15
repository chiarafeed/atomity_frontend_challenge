'use client';

import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { tokens } from '../tokens';

interface TotSavingsProps {
  totalSavings: number;
  metricsCount: number;
}

export const TotSavings: React.FC<TotSavingsProps> = ({ totalSavings, metricsCount }) => {
  return (
    <Card className="text-center sm:text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: tokens.colors.textSecondary }}>
            Risparmio Totale Stimato
          </span>
          <div className="text-3xl md:text-4xl font-black mt-1" style={{ color: tokens.colors.accentPrimary }}>
            € {totalSavings.toLocaleString('it-IT')}
          </div>
        </div>
        <div>
          <Badge variant="brand">
            {metricsCount} Opportunità Identificate
          </Badge>
        </div>
      </div>
    </Card>
  );
};