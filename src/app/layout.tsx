import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import ContextMenuInitializer from '@/components/ContextMenuInitializer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MAPS Technologies',
  description:
    'Premium electronics component marketplace and professional engineering services including PCB design, embedded systems, and EMI/EMC testing.',
  keywords: [
    'electronics components',
    'PCB design',
    'embedded systems',
    'engineering services',
    'geophone',
    'sensors',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'MAPS Technologies',
    description: 'Electronics components and engineering services',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of FOUC */}
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </head>
      <body className="antialiased bg-gray-50">
        <ContextMenuInitializer />
        <ErrorBoundary>
          <Navbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}