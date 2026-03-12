import PageNavigation from '@/components/PageNavigation';

export default function MicroControllerPage() {
  const products = [
    {
      id: 1,
      name: 'ARM Cortex-M4 MCU',
      model: 'MCU-ARM-M4',
      specs: '168MHz, 512KB Flash, 192KB RAM',
      features: ['DSP instructions', 'FPU support', 'Multiple communication interfaces', 'Real-time performance'],
      description: 'High-performance 32-bit microcontroller with DSP and FPU instructions.',
    },
    {
      id: 2,
      name: '8-bit AVR Microcontroller',
      model: 'MCU-AVR-328',
      specs: '20MHz, 32KB Flash, 2KB RAM',
      features: ['Arduino compatible', 'Low power consumption', 'Built-in ADC', 'Easy to program'],
      description: 'Popular 8-bit MCU perfect for hobbyists and educational projects.',
    },
    {
      id: 3,
      name: 'Low-Power STM32 MCU',
      model: 'MCU-STM32L4',
      specs: '80MHz, 1MB Flash, Ultra-low power',
      features: ['Ultra-low power modes', 'Rich peripheral set', 'Security features', 'Battery operated'],
      description: 'Energy-efficient microcontroller ideal for battery-powered IoT devices.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Microcontrollers</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Advanced microcontroller solutions for embedded systems, IoT devices, and automation projects.
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
