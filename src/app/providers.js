'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { cookieConsentGiven } from './PgBanner';

export function PostHogProvider({ children }) {
  useEffect(() => {
    posthog.init(process.env.POST_HOG_API_KEY, {
      api_host: 'https://us.i.posthog.com',
      persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
