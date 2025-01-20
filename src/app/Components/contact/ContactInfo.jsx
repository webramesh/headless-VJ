import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/16/solid';
import { EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
const ContactInfo = () => {
  return (
    <div className="bg-gray-50 h-full px-5 py-10 rounded-lg text-gray-600">
      <div className="flex items-center gap-4 mb-8">
        <UserIcon className="text-blue-500 size-6" />
        <Link href="/author/gardner_vjnln901/" className="underline">
          Jeanette Gardner
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <EnvelopeIcon className="text-red-700 size-6" />

        <Link href="mailto:jeanette@vinjournalen.se" className="underline">
          jeanette@vinjournalen.se
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <PhoneIcon className="text-green-600 size-5" />
        <Link href="tel:+46733781807" className="underline">
          +46733781807
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Image src={'/skype.png'} width={20} height={20} alt="Skype" />
        <a href="skype:garnerpress?call" className="underline">
          garnerpress
        </a>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <MapIcon className="size-6 text-red-700" />
        <Link href={'https://maps.app.goo.gl/17aVPt8bFjZizzbg8'} target="_blank" className="underline">
          Bo Bergmansgata 14, 11550 Stockholm
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" width="20" height="12.5">
          <rect width="16" height="10" fill="#006AA7" />
          <rect x="5" width="2" height="10" fill="#FECC00" />
          <rect y="4" width="16" height="2" fill="#FECC00" />
        </svg>
        <span>Sverige</span>
      </div>
    </div>
  );
};

export default ContactInfo;
