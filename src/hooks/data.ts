import { useQuery } from '@tanstack/react-query';
import { SavingsDataResponse, SavingsMetric } from '../types';

// Funzione per recuperare i dati da DummyJSON e trasformarli
const fetchSavingsData = async (): Promise<SavingsDataResponse> => {

  const response = await fetch('https://dummyjson.com/carts/1');

  if (!response.ok) {
    throw new Error('Error during data fetching');
  }

  const data = await response.json();

  // transforming data from DummyJSON into the struct SavingsMetric

  const mappedMetrics: SavingsMetric[] = data.products.map((item: any, index: number) => {
  const impacts: ('High' | 'Medium' | 'Low')[] = ['High', 'Medium', 'Low'];
  const categories = ['Kubernetes', 'Storage', 'Compute', 'Networking', 'Database'];
 
    return {
      id: item.id,
      title: item.title,
      category: categories[index % categories.length],
      savingsAmount: Math.round(item.price * 10), // prezzo->risparmio
      impactLevel: (item.price * 10) >= 3000 ? 'High' : (item.price * 10) >= 1000 ? 'Medium' : 'Low',
      description: `Ottimizzazione automatica identificata per ${item.title}. Azione consigliata per ridurre lo spreco di risorse.`,
    };
  });
  

  // 3. Calcoliamo il totale complessivo dei risparmi
  const total = mappedMetrics.reduce((acc, curr) => acc + curr.savingsAmount, 0);

  return {
    metrics: mappedMetrics,
    totalSavings: total,
  };
};

// Custom Hook che usa React Query
export const useSavingsData = () => {
  return useQuery({
    queryKey: ['savingsData'],
    queryFn: fetchSavingsData,
  });
};