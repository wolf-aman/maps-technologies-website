import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';

export default function ProductsPage() {
  const productCategories = [
    {
      title: 'Power Supply',
      slug: 'power-supply',
      description: 'High-efficiency power supply solutions for various applications',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Micro Controller',
      slug: 'micro-controller',
      description: 'Advanced microcontroller units for embedded systems',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Analog',
      slug: 'analog',
      description: 'Precision analog components and integrated circuits',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Communication',
      slug: 'communication',
      description: 'Wireless and wired communication modules',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Other',
      slug: 'other',
      description: 'Additional electronic components and accessories',
      image: '/images/placeholder.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our comprehensive range of electronic components and solutions designed for reliability and performance.
          </p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="text-blue-600 font-medium hover:text-blue-700">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
