import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDomainBySlug, getAllDomainSlugs } from '@/data/domains.data';

interface DomainPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return getAllDomainSlugs().map((slug) => ({
    id: slug,
  }));
}

export async function generateMetadata(
  { params }: DomainPageProps
): Promise<Metadata> {
  const { id } = await params;
  const domain = getDomainBySlug(id);

  if (!domain) {
    return {
      title: 'Domain Not Found',
    };
  }

  return {
    title: `${domain.label} | MAPS Technologies`,
    description: domain.description.substring(0, 160),
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { id } = await params;
  const domain = getDomainBySlug(id);

  if (!domain) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/domains/bg-domain.png')",
      }}
    >
      <div className="min-h-screen bg-gradient-to-b from-white/20 to-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {domain.label}
            </h1>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <div
              className={`grid grid-cols-1 gap-8 items-start` + (domain.imageUrl ? ' md:grid-cols-2' : '') }
            >
              {/* Content Section */}
              <div className="rounded-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line text-justify">
                    {domain.description}
                  </p>
                </div>
              </div>

              {/* Image Section */}
              {domain.imageUrl && (
                <div className="relative w-full bg-transparent rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={domain.imageUrl}
                    alt={domain.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
