import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';

export default function ServicesPage() {
  const services = [
    {
      title: 'Design',
      slug: 'design',
      description: 'Custom electronic design services from concept to prototype',
      icon: '🎨',
    },
    {
      title: 'PCB Layout',
      slug: 'pcb-layout',
      description: 'Professional PCB layout and routing with multi-layer support',
      icon: '🔌',
    },
    {
      title: 'EMI/EMC Testing',
      slug: 'emi-emc',
      description: 'Comprehensive electromagnetic compatibility and interference testing',
      icon: '📡',
    },
    {
      title: 'Specialized Training',
      slug: 'training',
      description: 'Expert-led training programs for electronics and embedded systems',
      icon: '📚',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional electronic engineering services to bring your ideas to life. From design to testing and training.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
