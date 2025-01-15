import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUser, faEnvelope, faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
const ContactInfo = () => {
  return (
    <div className="bg-gray-50 h-full px-5 py-10 rounded-lg text-gray-600">
      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faUser} className="text-blue-500" />
        <Link href="author/gardner_vjnln901/" className="underline">
          Jeanette Gardner
        </Link>

        {/* <span className="underline">Jeanette Gardner</span> */}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faEnvelope} className="text-red-700" />

        {/* <span className="underline">jeanette@vinjournalen.se</span> */}
        <Link href="mailto:jeanette@vinjournalen.se" className="underline">
          jeanette@vinjournalen.se
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faPhone} className="text-green-600" />
        {/* <span className="underline"> +46733781807</span> */}
        <Link href="tel:+46733781807" className="underline">
          +46733781807
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Image src={'/./skype.png'} width={20} height={20} alt="Skype" />
        {/* <span className="underline">garnerpress</span> */}
        {/* <Link href="skype:profile_name?garnerpress" className="underline">
          garnerpress
        </Link> */}
        <a href="skype:garnerpress?call" className="underline">
          garnerpress
        </a>

        {/* <Link href="skype:profile_name?call" className="underline">
          garnerpress
        </Link> */}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faMapLocation} className="text-red-700" />
        {/* <span className="">Bo Bergmansgata 14, 11550 Stockholm</span> */}
        <Link href={'https://maps.app.goo.gl/17aVPt8bFjZizzbg8'} target="_blank" className="underline">
          Bo Bergmansgata 14, 11550 Stockholm
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" width="20" height="12.5">
          {/* Blue background */}
          <rect width="16" height="10" fill="#006AA7" />

          {/* Yellow vertical stripe */}
          <rect x="5" width="2" height="10" fill="#FECC00" />

          {/* Yellow horizontal stripe */}
          <rect y="4" width="16" height="2" fill="#FECC00" />
        </svg>
        <span>Sverige</span>
      </div>
    </div>
  );
};

export default ContactInfo;
