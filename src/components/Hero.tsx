/**
 * Hero Component
 * 
 * Main hero section with heading, description, CTA button, and image
 * Used on the homepage to showcase the company
 * 
 * Props:
 * - title: Main heading text
 * - description: Supporting description text
 * - buttonText: CTA button text
 * - buttonLink: CTA button destination
 * - imageSrc: Path to hero image
 */

import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
}

export default function Hero({
  title,
  description,
  buttonText = 'Learn More',
  buttonLink = '#about',
  imageSrc = '/images/hero-lab.png',
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
            <Link
              href={buttonLink}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt="MAPS Technologies Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}