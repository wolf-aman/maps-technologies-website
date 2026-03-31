import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageNavigation from '@/components/PageNavigation';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <PageNavigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {domain.label}
          </h1>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        {/* Image Section */}
        {domain.imageUrl && (
          <div className="mb-8">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={domain.imageUrl}
                alt={domain.label}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {domain.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
