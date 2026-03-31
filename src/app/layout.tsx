import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'MAPS Technologies',
  description:
    'Comprehensive information about seismic sensors, geophones, and earth science monitoring equipment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}