import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUser, faEnvelope, faPhone, faMapLocation, faSkype } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const ContactInfo = () => {
  return (
    <div className="bg-gray-50 h-full px-5 py-10 rounded-lg text-gray-600">
      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faUser} className="text-blue-500" />
        <span className="underline">Jeanette Gardner</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faEnvelope} className="text-red-700" />
        <span className="underline">jeanette@vinjournalen.se</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faPhone} className="text-green-600" />
        <span className="underline"> +46733781807</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Image src={'/./skype.png'} width={20} height={20} alt="Skype" />
        <span className="underline">garnerpress</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <FontAwesomeIcon icon={faMapLocation} className="text-red-700" />
        <span className="underline">Bo Bergmansgata 14, 11550 Stockholm</span>
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
