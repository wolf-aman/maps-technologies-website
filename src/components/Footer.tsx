/**
 * Footer Component
 * 
 * Displays the application footer with:
 * - Copyright information
 * - Links to legal pages (Privacy Policy, Terms & Conditions)
 * - Links to info pages (About Us, Careers)
 * 
 * Features:
 * - Responsive design (mobile-friendly)
 * - Hover effects on links
 * - Auto-updating copyright year
 * 
 * @component
 * @example
 * return <Footer />;
 */

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-3">

      {/* same margin grid used across the page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* footer card */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            {/* copyright */}
            <p className="text-xs md:text-sm text-gray-700">
              © {new Date().getFullYear()} MAPS Technologies. All rights reserved.
            </p>

            {/* links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-gray-700">

              <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions" className="hover:text-blue-600 transition-colors">
                Terms & Conditions
              </Link>

              <Link href="/about-us" className="hover:text-blue-600 transition-colors">
                About Us
              </Link>

              <Link href="/career" className="hover:text-blue-600 transition-colors">
                Careers
              </Link>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}