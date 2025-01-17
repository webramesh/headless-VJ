'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const TopBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="relative bg-red-600 text-white py-1 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[80%]">
          Vi har precis lanserat en ny artikel! Läs vår&nbsp;
          <Link href="/artiklar" target="_blank">
            <span className="underline hover:text-red-100 transition-colors">senaste artikel.</span>
          </Link>
        </div>
        <button
          onClick={() => setShowBanner(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 "
          aria-label="Close banner"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
