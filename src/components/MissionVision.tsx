/**
 * Mission & Vision Component
 * 
 * Displays company mission and vision side by side
 * Includes icons and descriptions
 * Fully responsive layout
 * 
 * Props:
 * - mission: Mission statement object with title and description
 * - vision: Vision statement object with title and description
 */

interface Statement {
  title: string;
  description: string;
}

interface MissionVisionProps {
  sectionTitle?: string;
  mission: Statement;
  vision: Statement;
}

export default function MissionVision({
  sectionTitle = 'Our Mission & Vision',
  mission,
  vision,
}: MissionVisionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          {sectionTitle}
        </h2>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {mission.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {mission.description}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {vision.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
