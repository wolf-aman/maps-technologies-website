/**
 * Home Page - MAPS Technologies
 * Modern, component-based homepage with hero, timeline, mission/vision, and footer
 * Fully responsive and follows the design from the provided interface
 */

import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import MissionVision from '@/components/MissionVision';
import Footer from '@/components/Footer';

export default function HomePage() {
  // Timeline data - company milestones
  const milestones = [
    {
      year: '1992',
      title: 'Established at IIT Madras',
      description: 'Earlier known as Sanmarg Union, established in 1992 at IIT Madras. Innovating, and training.',
    },
    {
      year: '1995',
      title: 'First Product Launch (RST)',
      description: 'The First Product Launch (RST) are specialises to a majors senchmorae in line atitrola.',
    },
    {
      year: '2000',
      title: 'Sanmarg Union Partnership',
      description: 'Sanmarg Union Partnership product development, manufacturing, and mmolopment.',
    },
    {
      year: '2023',
      title: 'Global Tech Hub & Cloud Integration',
      description: 'Global Tech Hub coindtrants and Cloon Tech Hub & Cloud Integration.',
    },
  ];

  // Mission & Vision data
  const mission = {
    title: 'Our Mission',
    description:
      'To be a Premier organization by developing and manufacturing new products in line with the customer needs and by providing the training on emerging technologies.',
  };

  const vision = {
    title: 'Our Vision',
    description:
      'To become a Centre of Excellence in the field of Product Development, Supply Chain and Personal Training by adhering to Honesty, Integrity Innovations and Professional Values and by establishing a well-designed link between them.',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Engineering the Future with MAPS Technologies"
        description="Earlier known as Sanmarg Union, established in 1992 at IIT Madras. Innovating in core technology product development, manufacturing, and training."
        buttonText="LEARN MORE"
        buttonLink="#about"
        imageSrc="/images/hero-lab.png"
      />

      {/* Timeline Section */}
      <Timeline title="About MAPS Technologies" milestones={milestones} />

      {/* Mission & Vision Section */}
      <MissionVision mission={mission} vision={vision} />

      {/* Footer */}
      <Footer
        companyName="MAPS Technologies"
        companyInfo={{
          fullName: 'MAPS Technologies, Technology Ltd.',
          address: 'Delhi: +71 33 23327, nep: maps@email.com',
          phone: '+91 33 23327',
          email: 'maps@email.com',
        }}
        quickLinks={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Services', href: '/services' },
          { label: 'Contact Us', href: '#contact' },
        ]}
        socialLinks={[
          { name: 'Facebook', href: '#', icon: 'facebook' },
          { name: 'Twitter', href: '#', icon: 'twitter' },
          { name: 'LinkedIn', href: '#', icon: 'linkedin' },
          { name: 'Instagram', href: '#', icon: 'instagram' },
          { name: 'YouTube', href: '#', icon: 'youtube' },
        ]}
      />
    </div>
  );
}
