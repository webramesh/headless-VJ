'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import vinlogo from '@/public/vinlogo.svg';

export default function NotFound() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 max-w-md w-full text-center">
        {/* Logo */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image src={vinlogo} alt="VJ Wine Logo" fill className="object-contain" priority />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-red-500 mb-4 relative">
          <span className="inline-block">4</span>
          <span className="inline-block mx-2 relative">
            <span className="absolute inset-0 text-red-300 blur-sm">0</span>
            <span className="relative inline-block" style={{ transform: `rotate(${rotate}deg)` }}>
              🍷
            </span>
          </span>
          <span className="inline-block">4</span>
        </h1>

        <p className="text-xl text-red-700 mb-6 font-serif">Oops! Sidan du letar efter finns inte.</p>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8">
          <p className="text-red-500 italic">
            &quot;In wine, there&apos;s truth - in our pages, there&apos;s delight.
            <br />
            Let&apos;s find you a page that&apos;s just right!&quot;
          </p>
        </div>

        {/* Return link */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Tillbaka till startsidan
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent" />
    </div>
  );
}
