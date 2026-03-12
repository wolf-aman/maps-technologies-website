import PageNavigation from '@/components/PageNavigation';

export default function OtherProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Development Board Kit',
      model: 'DEV-KIT-001',
      specs: 'Complete starter kit with sensors',
      features: ['Breadboard included', 'Jumper wires', 'Multiple sensors', 'Comprehensive documentation'],
      description: 'Comprehensive development kit with breadboard, jumper wires, and variety of sensors.',
    },
    {
      id: 2,
      name: 'LCD Display Module',
      model: 'LCD-16x2',
      specs: '16x2 Character, Blue Backlight',
      features: ['I2C interface', 'Blue backlight', 'Easy integration', 'Standard character display'],
      description: 'Standard character LCD display with I2C interface for easy integration.',
    },
    {
      id: 3,
      name: 'Sensor Module Pack',
      model: 'SEN-PACK-10',
      specs: '10 Different Sensor Types',
      features: ['Temperature sensor', 'Humidity sensor', 'Motion detection', 'Light sensor'],
      description: 'Variety pack including temperature, humidity, motion, and light sensors.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Other Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Additional components, accessories, and development tools to complete your electronic projects.
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
