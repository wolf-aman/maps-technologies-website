import InfoContentPage from '@/components/InfoContentPage';

export default function TermsAndConditionsPage() {
  return (
    <InfoContentPage title="Terms & Conditions">
      <p>
        By using this website, you agree to use the content for informational purposes only and in compliance
        with applicable laws.
      </p>
      <p>
        MAPS Technologies may update content, structure, and policies without prior notice. Continued use of
        the site implies acceptance of current terms.
      </p>
      <p>
        For clarifications, write to{' '}
        <a className="text-blue-600 hover:text-blue-700" href="mailto:info@mapstech.co.in">
          info@mapstech.co.in
        </a>
        .
      </p>
    </InfoContentPage>
  );
}
