// Struct dato
export interface SavingsMetric {
  id: number;
  title: string;
  category: string;
  savingsAmount: number;
  impactLevel: 'High' | 'Medium' | 'Low';
  description: string;
}

// Dati + numero dati
export interface SavingsDataResponse {
  metrics: SavingsMetric[];
  totalSavings: number;
}