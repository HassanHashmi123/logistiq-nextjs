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

    // Single debounced dispatch to cleanly initialize animations without double-flicker
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('nextjs-route-changed'));
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
