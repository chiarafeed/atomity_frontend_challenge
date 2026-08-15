'use client';

import { motion, useReducedMotion} from 'framer-motion'
import { useSavingsData } from '../hooks/data';
import { Card } from '../components/card';
import { Badge } from '../components/badge';
import { tokens } from '../tokens'; // oppure '../tokens/index'
import { SavingsMetric } from '../types'; // oppure '../types/index'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export default function Home() {
  const { data, isLoading, isError, error } = useSavingsData();
  const shouldReduceMotion = useReducedMotion();

  if (isLoading) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-[var(--color-accent-primary)] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p style={{ color: tokens.colors.textSecondary }}>Caricamento metriche in corso...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <Card className="max-w-md text-center">
          <Badge variant="alert">Errore Chiamata API</Badge>
          <p className="mt-4 font-medium" style={{ color: tokens.colors.textPrimary }}>
            {(error as Error)?.message || 'Impossibile recuperare i dati.'}
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header Sezione con Scroll Trigger */}
      <motion.section 
        initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Introduzione"
        className="space-y-2"
      >
        <h1 
          className="font-bold tracking-tight"
          style={{ fontSize: 'var(--font-size-hero)', color: tokens.colors.textPrimary }}
        >
          Cloud Cost Optimization
        </h1>
        <p className="text-lg" style={{ color: tokens.colors.textSecondary }}>
          Monitora e riduci gli sprechi della tua infrastruttura in tempo reale.
        </p>
      </motion.section>

      {/* Hero / Overview Card Animata */}
      <motion.section 
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        aria-label="Riepilogo Risparmi"
      >
        <Card className="bg-gradient-to-r from-[var(--color-bg-surface)] to-[var(--color-bg-subtle)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: tokens.colors.textSecondary }}>
                Risparmio Totale Stimato
              </span>
              <div className="text-4xl md:text-5xl font-black mt-1" style={{ color: tokens.colors.accentPrimary }}>
                € {(data?.totalSavings || 0).toLocaleString('it-IT')}
              </div>
            </div>
            <div>
              <Badge variant="brand">
                {data?.metrics.length} Opportunità Identificate
              </Badge>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Grid delle Metrike Triggerata allo Scroll con Stagger */}
      <section aria-label="Elenco Opportunità" className="space-y-6">
        <h2 className="text-2xl font-bold" style={{ color: tokens.colors.textPrimary }}>
          Opportunità di Ottimizzazione
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data?.metrics.map((metric: SavingsMetric) => (
            <motion.div key={metric.id} variants={shouldReduceMotion ? {} : itemVariants}>
              <Card className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: tokens.colors.textSecondary }}>
                      {metric.category}
                    </span>
                    <Badge variant={metric.impactLevel === 'High' ? 'alert' : 'brand'}>
                      Impatto {metric.impactLevel}
                    </Badge>
                  </div>

                  <h3 
                    className="font-semibold capitalize"
                    style={{ fontSize: 'var(--font-size-card-title)', color: tokens.colors.textPrimary }}
                  >
                    {metric.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: tokens.colors.textSecondary }}>
                    {metric.description}
                  </p>
                </div>

                <div className="pt-4 border-t flex items-baseline justify-between" style={{ borderColor: tokens.colors.border }}>
                  <span className="text-xs font-medium" style={{ color: tokens.colors.textSecondary }}>
                    Risparmio potenziale
                  </span>
                  <span className="text-lg font-bold" style={{ color: tokens.colors.accentPrimary }}>
                    +€ {metric.savingsAmount.toLocaleString('it-IT')}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}