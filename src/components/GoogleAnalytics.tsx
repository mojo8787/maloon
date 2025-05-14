'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Use environment variable for the GA Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initializes GA tracking
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pathname,
        });
      }
    };

    // Track page view on route change
    handleRouteChange();

    // Setup badge click tracking
    const setupBadgeClickTracking = () => {
      const badges = document.querySelectorAll('[data-ga-event="badge_click"]');
      badges.forEach((badge) => {
        badge.addEventListener('click', () => {
          const platform = badge.getAttribute('data-ga-platform');
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'badge_click', {
              platform: platform || 'unknown',
            });
          }
        });
      });
    };

    // Setup after page is loaded
    if (document.readyState === 'complete') {
      setupBadgeClickTracking();
    } else {
      window.addEventListener('load', setupBadgeClickTracking);
      return () => {
        window.removeEventListener('load', setupBadgeClickTracking);
      };
    }
  }, [pathname, searchParams]);

  return GA_MEASUREMENT_ID ? (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />
    </>
  ) : null;
} 