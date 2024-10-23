import React from 'react';
import Image from 'next/image';
import logo from '@/public/vinjournalen-logo.png';
import twitter from '@/public/twitter.png';
import fb from '@/public/fb.png';
import insta from '@/public/insta.png';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto ">
        <div className="p-3 mt-12 flex flex-col gap-2 md:gap-4 lg:flex-row justify-between items-center">
          <a href="#" className="flex items-center mb-4 md:mb-0 md:ml-8">
            <Image src={logo} alt="Logo" className="object-cover" />
          </a>
          <div className="flex flex-col md:flex-row  text-sm font-extralight gap-2 md:gap-4 text-center md:text-left mb-4 md:mb-0">
            <h2>Om Oss</h2>
            <h2>Annonsera</h2>
            <h2>Kontact</h2>
            <h2>Sitemap</h2>
            <h2>Vinregioner</h2>
            <h2>Vinproducenter</h2>
            <h2>Vinimporter</h2>
          </div>
          <div className="flex gap-2">
            <Image src={twitter} alt="Twitter" className="object-cover" />
            <Image src={fb} alt="Facebook" className="object-cover" />
            <Image src={insta} alt="Instagram" className="object-cover" />
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
