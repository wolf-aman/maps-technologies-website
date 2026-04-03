import { ReactNode } from 'react';

interface InfoContentPageProps {
  title: string;
  children: ReactNode;
}

export default function InfoContentPage({ title, children }: InfoContentPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  );
}
