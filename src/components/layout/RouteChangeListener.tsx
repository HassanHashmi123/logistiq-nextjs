"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.dispatchEvent(new Event('nextjs-route-changed'));
      }, 100);
    }
  }, [pathname]);

  return null;
}
