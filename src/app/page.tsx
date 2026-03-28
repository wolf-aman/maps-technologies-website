/**
 * Home Page - MAPS Technologies
 * Modern, component-based homepage with hero, timeline, mission/vision, and footer
 * Fully responsive and follows the design from the provided interface
 */

import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
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

      {/* Footer */}
      <Footer
        companyName="MAPS Technologies"
        companyInfo={{
          address: '57, Officers Campus Ext.\nSirsi Road, Jaipur – 302012, India',
          phone: '+91 9145890775',
          email: 'info@mapstech.co.in',
          LastUpdated: 'March, 2026',
        }}
        capabilitiesLinks={[
          { label: 'Embedded Systems', href: '/services/design' },
          { label: 'Hardware & PCB Design', href: '/services/pcb-layout' },
          { label: 'Firmware Development', href: '/services/training' },
          { label: 'Sensing & Instrumentation', href: '/products/communication' },
          { label: 'Technical Consulting', href: '/services' },
        ]}
        domainLinks={[
          { label: 'Medical Electronics', href: '/products/other' },
          { label: 'Industrial Systems', href: '/products/communication' },
          { label: 'Custom Product Development', href: '/services/design' },
          { label: 'Vibration / Geophone Systems', href: '/products/analog' },
          { label: 'Metering and IoT Devices', href: '/products/micro-controller' },
        ]}
      />
    </div>
  );
}
