import './globals.css';
import Providers from './providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atomity - Cloud Cost Optimization',
  description: 'Track and optimize your cloud infrastructure savings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}