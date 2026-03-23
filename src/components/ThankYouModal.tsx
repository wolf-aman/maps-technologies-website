'use client';

import { Phone, X } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-2xl p-6 sm:p-8 text-center animate-fadeIn">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-3xl font-bold text-blue-600 mb-2">Thank You</h3>
        <p className="text-2xl font-semibold text-slate-900 mb-6">Message Received</p>
        <p className="text-slate-600 mb-5">We will get back to you soon.</p>
        <p className="text-slate-600 mb-5">For any urgent queries, Click on the button below ⬇️</p>

        <a
          href="tel:+919145890775"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4" />
          Call Us +91-9145890775
        </a>

      </div>
    </div>
  );
}
