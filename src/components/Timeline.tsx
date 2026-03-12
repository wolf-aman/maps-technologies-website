/**
 * Timeline Component
 * 
 * Displays company milestones in a timeline format
 * Responsive grid layout that adapts to screen size
 * 
 * Props:
 * - title: Section title
 * - milestones: Array of milestone objects with year, title, and description
 */

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  milestones: Milestone[];
}

export default function Timeline({ title, milestones }: TimelineProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        {/* Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Year */}
              <div className="text-sm font-semibold text-blue-600 mb-2">
                {milestone.year}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {milestone.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
