'use client';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

const BannerImage = ({ imageUrl, imageAlt, isSidebar }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  return (
    <Image
      src={imageUrl || '/banner.webp'}
      alt={imageAlt}
      width={isSidebar ? 300 : isMobile ? 400 : 1200}
      height={isSidebar ? 250 : isMobile ? 133 : 400}
      className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
      priority={isSidebar ? false : true}
      loading={isSidebar ? 'lazy' : 'eager'}
    />
  );
};
export default memo(BannerImage);
