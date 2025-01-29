'use client';
import { sendGTMEvent } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerImage = ({ bannerUrl, imageUrl, imageAlt, variant }) => {
  return (
    <Link
      href={bannerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onClick={() => sendGTMEvent({ event: 'bannerClicked', value: 'Systembolaget By Banner' })}
    >
      <Image
        src={imageUrl || '/banner.webp'}
        alt={imageAlt}
        width={variant === 'sidebar' ? 300 : 1200}
        height={variant === 'sidebar' ? 250 : 400}
        className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
        priority
      />
    </Link>
  );
};

export default BannerImage;
