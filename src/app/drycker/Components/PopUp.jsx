'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const PopUp = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    setVerified(hasVisited === 'true');
  }, []);

  const handleVerification = (isVerified) => {
    setVerified(isVerified);
    localStorage.setItem('hasVisitedBefore', isVerified);
  };

  if (verified) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-50" />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-10 rounded-lg max-w-md mx-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Åldersverifiering!</h2>
          <p className="mb-4">Är du 20 år eller äldre?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleVerification(true)}
              // className="bg-primary text-black px-6 py-2 rounded hover:bg-primary/90"
              className="px-4 py-2 border bg-green-600 text-white rounded-md hover:bg-green-700/80 transition-colors duration-200 w-14"
            >
              Ja
            </button>
            <Link
              onClick={() => handleVerification(false)}
              href={'/'}
              role="button"
              className="px-4 py-2 bg-[#EB7273] text-white rounded-md hover:bg-[#ee5d5d] transition-colors duration-200 w-14"
            >
              Nej
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
