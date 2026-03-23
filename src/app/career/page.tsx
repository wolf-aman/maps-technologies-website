import InfoContentPage from '@/components/InfoContentPage';

export default function CareerPage() {
  return (
    <InfoContentPage title="Careers">
      <p>
        We welcome passionate engineers, designers, and developers interested in embedded systems and
        product innovation.
      </p>
      <p>
        To apply or enquire about opportunities, email your profile to{' '}
        <a className="text-blue-600 hover:text-blue-700" href="mailto:info@mapstech.co.in">
          info@mapstech.co.in
        </a>
        .
      </p>
    </InfoContentPage>
  );
}
