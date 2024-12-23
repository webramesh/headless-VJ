'use client';

import Image from 'next/image';
import logo from '@/public/vinjournalen-logo.svg';
import Copyright from './Copyright';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';

const Footer = ({ menuItems }) => {
  const pathname = usePathname();
  const path = pathname + '/';

  return (
    <footer className="bg-[#F5F5F5]">
      <div className="container mx-auto mt-8">
        <div className="p-3 flex flex-col gap-2 md:gap-4 lg:flex-row justify-between items-center">
          <Link href="/" className="flex items-center mb-4 md:mb-0 md:ml-8">
            <Image src={logo} alt="Vinjournalen Logo" className="object-cover" width="180" height="90" priority />
          </Link>

          <nav className="flex flex-col md:flex-row text-sm gap-2 md:gap-4 text-center md:text-left mb-4 md:mb-0">
            {menuItems.map((menu) => (
              <Link
                href={menu.path}
                key={menu.id}
                className={`${path === menu.path ? 'text-[#c90022]' : 'hover:text-[#e70826]'}`}
              >
                {menu.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-10 text-xl">
            <Link
              href="https://twitter.com/hashtag/Vinjournalen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök vår Twitter-sida"
              role="button"
              className="inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-red-600 hover:text-[#1f2933]" aria-hidden="true" />
            </Link>

            <Link
              href="https://m.facebook.com/vinjournalen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök vår Facebooksida"
              role="button"
              className="inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-red-600 hover:text-[#1f2933]" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.instagram.com/vinjournalen.se/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök vår Instagramsida"
              role="button"
              className="inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-red-600 hover:text-[#1f2933]" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
