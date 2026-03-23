'use client';

import Link from 'next/link';

interface SectionLink {
  label: string;
  href: string;
}

interface HomeEngagementSectionProps {
  products: SectionLink[];
  services: SectionLink[];
  contactEmail: string;
}

export default function HomeEngagementSection({
  products,
  services,
  contactEmail,
}: HomeEngagementSectionProps) {
  return (
    <section className="bg-gray-50 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 text-blue-900 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M5 7l1 12h12l1-12M9 11v4m6-4v4" />
              </svg>
              <h3 className="text-3xl font-semibold">View Products</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Explore our main product lines.</p>
            <ul className="space-y-1.5 text-sm">
              {products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-700 hover:text-blue-900 transition-colors">
                    &raquo; {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-600 bg-gradient-to-r from-blue-700 to-blue-500 p-5 text-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-2.21 0-4 1.79-4 4m8 0a4 4 0 00-4-4m7 4c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z" />
              </svg>
              <h3 className="text-3xl font-semibold">Services</h3>
            </div>
            <p className="text-sm text-blue-100 mb-3">Design, development and consulting.</p>
            <ul className="space-y-1.5 text-sm">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/95 hover:text-white transition-colors underline-offset-2 hover:underline">
                    &raquo; {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 text-blue-900 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <h3 className="text-3xl font-semibold">Contact</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Send us your technical query directly.</p>
            <a href={`mailto:${contactEmail}`} className="text-sm text-blue-700 hover:text-blue-900 transition-colors">
              {contactEmail}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
