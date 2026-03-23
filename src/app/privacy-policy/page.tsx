import InfoContentPage from '@/components/InfoContentPage';

export default function PrivacyPolicyPage() {
  return (
    <InfoContentPage title="Privacy Policy">
      <p>
        MAPS Technologies values your privacy. We collect only the information needed to respond to your
        requests and improve communication.
      </p>
      <p>
        We do not sell personal data. Any details you share with us are used strictly for support,
        business communication, and service-related updates.
      </p>
      <p>
        For privacy concerns, contact us at{' '}
        <a className="text-blue-600 hover:text-blue-700" href="mailto:info@mapstech.co.in">
          info@mapstech.co.in
        </a>
        .
      </p>
    </InfoContentPage>
  );
}
