import PageNavigation from '@/components/PageNavigation';

export default function PowerSupplyPage() {
  const products = [
    {
      id: 1,
      name: 'AC/DC Converter 12V',
      model: 'PS-1200',
      specs: '100-240V AC to 12V DC, 5A Output',
      features: ['Over-voltage protection', 'Short-circuit protection', 'High-efficiency switching', 'Compact design'],
      description: 'High-efficiency switching power supply with over-voltage and short-circuit protection.',
    },
    {
      id: 2,
      name: 'DC/DC Buck Converter',
      model: 'PS-BUCK-05',
      specs: '9-36V Input, 5V Output, 3A',
      features: ['Excellent load regulation', 'Advanced thermal management', 'Wide input voltage range', 'Adjustable output'],
      description: 'Compact buck converter module with excellent load regulation and thermal management.',
    },
    {
      id: 3,
      name: 'Linear Voltage Regulator',
      model: 'PS-LIN-3.3',
      specs: '5-12V Input, 3.3V Output, 1A',
      features: ['Low-noise operation', 'Thermal shutdown', 'Current limiting', 'Ideal for analog circuits'],
      description: 'Low-noise linear regulator ideal for sensitive analog circuits.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Power Supply Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Reliable and efficient power supply modules for your electronic projects. All products feature built-in protection circuits.
          </p>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Specifications:</h3>
                <p className="text-gray-600">{product.specs}</p>
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
