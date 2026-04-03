'use client';

import { useRouter } from 'next/navigation';

export default function PageNavigation() {
  const router = useRouter();

  const handleBack = () => {
    // Directly use browser history.back() which is more reliable
    try {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    } catch (error) {
      // If history.back() fails, navigate to home
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm ml-4 sm:ml-6 lg:ml-8 mt-2 mb-4 hover:gap-1 gap-1.5"
      aria-label="Go back"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span>Back</span>
    </button>
  );
}