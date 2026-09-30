"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function RouteChangeListener() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Scroll to top cleanly on route change
    window.scrollTo(0, 0);

    // Immediate dispatch to awaken WOW, carousels, and images instantly
    window.dispatchEvent(new Event('nextjs-route-changed'));

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('nextjs-route-changed'));
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
