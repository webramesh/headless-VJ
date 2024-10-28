'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/vinjournalen-logo.png';
import Searchbar from './Searchbar';
import vinlogo from '@/public/vinlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Navbar({ menuData }) {
  const menu = menuData;
  const pathname = usePathname();
  const path = pathname + '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-[#F5F5F5]">
      <div className="container mx-auto px-8 py-2 lg:py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
        {/* Logo and Hamburger Icon */}
        <div className={`w-full lg:w-auto flex justify-between items-center`}>
          <Link href="/" className="flex items-center">
            {/* Mobile Logo */}
            <Image src={vinlogo} alt="VinLogo" className="object-cover md:hidden" width={60} height={30} />

            {/* Tablet and Desktop Logo */}
            <Image src={logo} alt="Logo" className="object-cover hidden md:block" width={180} height={90} />
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className={`fixed inset-0 bg-[#F5F5F5] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden h-screen overflow-y-auto`}
          onClick={isDropdownOpen ? toggleDropDown : undefined}
        >
          <div className="flex justify-end">
            <button onClick={closeMenu} className="p-2 focus:outline-none">
              <FontAwesomeIcon icon={faTimes} className="text-2xl w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Link href="/" className="mb-4">
              <Image src={logo} alt="Logo" className="object-cover" width={200} height={100} />
            </Link>

            <div className="mb-4 w-4/5 flex justify-center items-center">
              <Searchbar />
            </div>
            <div className="mb-16"></div>

            {menu?.menuItems?.edges?.reduce((acc, { node }) => {
              // Check if this node is a child of any other node
              const isSubmenuItem = menu?.menuItems?.edges?.some(({ node: parentNode }) =>
                parentNode?.childItems?.edges?.some(({ node: childNode }) => childNode.id === node.id)
              );

              // Only render if it's not a submenu item of another menu
              if (!isSubmenuItem) {
                acc.push(
                  <div key={node.id} className="relative group">
                    <Link
                      onClick={node.path ? closeMenu : toggleDropDown}
                      href={node.path || '#'}
                      className={`flex items-center justify-between ${path === node.path && 'text-[#c90022]'}`}
                    >
                      {node?.label}
                      {node?.childItems?.edges?.length > 0 && (
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      )}
                    </Link>

                    {node?.childItems?.edges?.length > 0 && (
                      <div
                        className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bottom-8 left-0 z-10 pt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      >
                        {node?.childItems?.edges?.map(({ node: childNode }) => (
                          <div key={childNode.id}>
                            <Link
                              href={childNode.path || '#'}
                              onClick={closeMenu}
                              className={`block px-4 py-2 hover:bg-gray-200 ${path === childNode.path && 'text-[#c90022]'}`}
                            >
                              {childNode.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return acc;
            }, [])}
          </div>
          <div className="flex justify-center w-full ">
            <hr className="w-[75%] border-t-1 mt-16 border-[#CCC]" />
          </div>
          <div className="flex justify-center items-center mt-6 gap-6">
            <Link href="https://twitter.com/hashtag/Vinjournalen" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="text-red-600" />
            </Link>
            <Link href="https://m.facebook.com/vinjournalen" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="text-red-600" />
            </Link>

            <Link href="https://www.instagram.com/vinjournalen.se/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-red-600" />
            </Link>
          </div>
          <div className="flex justify-center w-full mt-6">
            <hr className="w-[75%] border-t-1 border-[#CCC]" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden  lg:text-sm xl:text-lg lg:flex lg:justify-center lg:items-center lg:space-x-2 xl:space-x-4">
          {menu?.menuItems?.edges?.reduce((acc, { node }) => {
            // Check if this node is a child of any other node
            const isSubmenuItem = menu?.menuItems?.edges.some(
              ({ node: parentNode }) =>
                parentNode?.childItems &&
                parentNode?.childItems.edges.some(({ node: childNode }) => childNode?.id === node.id)
            );

            // Only render if it's not a submenu item of another menu
            if (!isSubmenuItem) {
              acc.push(
                <div key={node.id} className="relative group">
                  <Link
                    onClick={closeMenu}
                    href={node.path || '#'}
                    className={`flex items-center justify-between ${path === node.path ? 'text-[#c90022]' : 'hover:text-[#e70826]'}`}
                  >
                    {node?.label}
                    {node?.childItems?.edges?.length > 0 && (
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    )}
                  </Link>

                  {node?.childItems?.edges?.length > 0 && (
                    <div className="absolute hidden  group-hover:block right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {node.childItems.edges.map(({ node: childNode }) => (
                        <div key={childNode.id}>
                          <Link
                            href={childNode.path || '#'}
                            onClick={closeMenu}
                            className={`block px-4 py-2 hover:bg-gray-200  ${path === childNode.path ? 'text-[#c90022]' : 'hover:text-[#e70826]'}`}
                          >
                            {childNode.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return acc;
          }, [])}
        </div>

        {/* Searchbar for Desktop */}
        <div className="hidden lg:block">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
