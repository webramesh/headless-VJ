'use client';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';

export function cookieConsentGiven() {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent');
}

export default function PgBanner() {
  const posthog = usePostHog();

  const [consentGiven, setConsentGiven] = useState('');
  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven());
  }, []);
  useEffect(() => {
    if (consentGiven !== '') {
      posthog.set_config({ persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory' });
    }
  }, [consentGiven]);
  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white z-50">
          <div className="max-w-7xl mx-auto p-4 md:flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm leading-6 flex-1 max-w-2xl my-2">
              För att kunna ge dig bästa möjliga upplevelse och förstå hur vi ska förbättra tjänsten använder vi kakor.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAcceptCookies}
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Acceptera cookies
              </button>
              <button
                onClick={handleDeclineCookies}
                type="button"
                className="px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                Avvisa cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
