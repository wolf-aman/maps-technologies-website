'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Lock, Mail, Phone, Send, User, X } from 'lucide-react';
import ThankYouModal from '@/components/ThankYouModal';
import { CapabilityType, popupConfig } from '@/lib/popupConfig';

interface TechnicalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  capabilityKey: CapabilityType;
}

interface FormData {
  areaOfProblem: string;
  specifyNeed: string;
  urgency: string;
  name: string;
  company: string;
  mobile: string;
  email: string;
}

const initialFormData: FormData = {
  areaOfProblem: '',
  specifyNeed: '',
  urgency: '',
  name: '',
  company: '',
  mobile: '',
  email: '',
};

export default function TechnicalPopup({ isOpen, onClose, capabilityKey }: TechnicalPopupProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [currentStep, setCurrentStep] = useState<'description' | 'details'>('description');
  const [showContactDetails, setShowContactDetails] = useState(false);

  const popupDetails = popupConfig[capabilityKey];
  const controlClassName =
    'mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setIsSubmitting(false);
      setIsSubmitted(false);
      setValidationError('');
      setCurrentStep('description');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNeedHelp = () => {
    setCurrentStep('details');
    setValidationError('');
  };

  const handleTechDetailsSubmit = () => {
    if (!formData.specifyNeed.trim()) {
      setValidationError('Please describe your problem in detail.');
      return;
    }
    setValidationError('');
    setShowContactDetails(true);
  };

  const handleFinalSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.mobile.trim()) {
      setValidationError('Please provide your mobile number.');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Please provide your email.');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          areaOfProblem: formData.areaOfProblem,
          specifyNeed: formData.specifyNeed,
          urgency: formData.urgency,
          name: formData.name,
          company: formData.company,
          mobile: formData.mobile,
          email: formData.email,
          capability: capabilityKey,
        }),
      });

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(responseBody?.message || 'Request failed');
      }

      setIsSubmitted(true);
    } catch (error) {
      setValidationError(
        error instanceof Error ? error.message : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <ThankYouModal isOpen={isSubmitted} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-md p-3 sm:p-6">
      <div className="w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-3xl sm:mx-auto sm:my-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-y-auto animate-fadeIn">
        <div className="p-5 sm:p-8">
          {/* Always show capability heading and description */}
          <div className="flex items-start justify-between gap-4 pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{popupDetails.title}</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 leading-relaxed">
                {popupDetails.description
                  .split('\n')
                  .filter((line) => line.trim().length > 0)
                  .map((line) => (
                    <li key={line}>{line}</li>
                  ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:text-slate-700 hover:bg-red-500"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step 1: Description with Need Help button */}
          {currentStep === 'description' && (
            <div className="mt-4 text-right">
              <button
                type="button"
                onClick={handleNeedHelp}
                className="px-6 py-2.5 text-sm rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-sm"
              >
                Need Help?
              </button>
            </div>
          )}

          {/* Step 2: Technical Details + Contact Details (on same page) */}
          {currentStep === 'details' && (
            <form className="mt-6 space-y-5" onSubmit={(e) => { 
              e.preventDefault(); 
              showContactDetails ? handleFinalSubmit(e) : handleTechDetailsSubmit(); 
            }}>
              {/* Technical Details Section */}
              <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Area of Problem</span>
                  <input
                    type="text"
                    value={formData.areaOfProblem}
                    onChange={(event) => handleChange('areaOfProblem', event.target.value)}
                    className={controlClassName}
                    placeholder="e.g., Medical, Industrial, Custom Product, Sensing & Vibration"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Specify Problem in Detail *</span>
                  <textarea
                    value={formData.specifyNeed}
                    onChange={(event) => handleChange('specifyNeed', event.target.value)}
                    rows={4}
                    className={controlClassName}
                    placeholder="Describe your issue or requirement..."
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Urgency</span>
                  <input
                    type="text"
                    value={formData.urgency}
                    onChange={(event) => handleChange('urgency', event.target.value)}
                    className={controlClassName}
                    placeholder="e.g., Critical / Immediate, 1-3 Months, Planning Phase"
                  />
                </label>
              </section>

              {/* Contact Details Section - shown after Submit click */}
              {showContactDetails && (
                <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 inline-flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Name *
                      </span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) => handleChange('name', event.target.value)}
                        className={controlClassName}
                        placeholder="Your name"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 inline-flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        Mobile No. *
                      </span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={formData.mobile}
                        onChange={(event) => {
                          let value = event.target.value.replace(/[^0-9]/g, '');
                          handleChange('mobile', value);
                        }}
                        onInput={(event) => {
                          let value = (event.target as HTMLInputElement).value;
                          value = value.replace(/[^0-9]/g, '');
                          (event.target as HTMLInputElement).value = value;
                          handleChange('mobile', value);
                        }}
                        pattern="[0-9]*"
                        className={controlClassName}
                        placeholder="Mobile number"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Company Name</span>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(event) => handleChange('company', event.target.value)}
                        className={controlClassName}
                        placeholder="Your company / organization name"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 inline-flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        Email *
                      </span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) => handleChange('email', event.target.value)}
                        className={controlClassName}
                        placeholder="name@company.com"
                      />
                    </label>
                  </div>
                </section>
              )}

              {validationError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  {validationError}
                </p>
              )}

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={showContactDetails && isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {showContactDetails ? (
                    <>
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>

              <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-600 leading-relaxed inline-flex items-start gap-2">
                <Lock className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                We understand the importance of data and information. Your inputs will never be shared or used with third parties without your consent.
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
