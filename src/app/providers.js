'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { cookieConsentGiven } from './PgBanner';

export function PostHogProvider({ children }) {
  useEffect(() => {
    try {
      // Only initialize if consent is given
      if (cookieConsentGiven() === 'yes') {
        posthog.init(process.env.NEXT_PUBLIC_POST_HOG_API_KEY, {
          api_host: 'https://us.i.posthog.com',
          persistence: 'localStorage+cookie',
          autocapture: false, // Reduce tracking attempts
          capture_pageview: false, // Disable automatic pageview tracking
          loaded: (posthog) => {
            // Custom handling after PostHog loads
            if (process.env.NODE_ENV === 'development') {
              console.log('PostHog loaded successfully');
            }
          },
        });
      }
    } catch (error) {
      console.log(error);
      // Log error only in development
      // if (process.env.NODE_ENV === 'development') {
      //   console.warn('PostHog tracking disabled - likely due to an adblocker', error);
      // }
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
