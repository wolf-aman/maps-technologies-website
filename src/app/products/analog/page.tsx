import PageNavigation from '@/components/PageNavigation';

export default function AnalogPage() {
  const products = [
    {
      id: 1,
      name: 'Precision Op-Amp',
      model: 'ANA-OPA-101',
      specs: 'Low offset, Low noise, Rail-to-Rail',
      features: ['Low input offset voltage', 'Rail-to-rail output', 'Wide bandwidth', 'Temperature stable'],
      description: 'High-precision operational amplifier for signal conditioning and instrumentation.',
    },
    {
      id: 2,
      name: 'ADC 16-bit Converter',
      model: 'ANA-ADC-16',
      specs: '16-bit resolution, 100kSPS, SPI Interface',
      features: ['High resolution', 'Fast sampling rate', 'SPI interface', 'Low power consumption'],
      description: 'High-resolution analog-to-digital converter for precision measurements.',
    },
    {
      id: 3,
      name: 'Voltage Reference IC',
      model: 'ANA-VREF-2.5',
      specs: '2.5V Output, ±0.02% accuracy',
      features: ['Ultra-stable output', 'High accuracy', 'Low temperature drift', 'Low noise'],
      description: 'Ultra-stable voltage reference for precision analog circuits.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analog Components</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Precision analog integrated circuits for signal processing, data acquisition, and instrumentation applications.
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
