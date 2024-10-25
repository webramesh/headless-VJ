'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/vinjournalen-logo.png';
import twitter from '@/public/twitter.png';
import fb from '@/public/fb.png';
import insta from '@/public/insta.png';
import Searchbar from './Searchbar';
import vinlogo from '@/public/vinlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const CustomMenuItem = ({ href, children }) => {
  return (
    <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      {children}
    </Link>
  );
};

export default function Navbar({ menuData }) {
  // const menu = menuData?.menuItems?.edges;
  const menu = menuData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              const isSubmenuItem = menu?.menuItems?.edges?.some(
                ({ node: parentNode }) =>
                  parentNode.childItems &&
                  parentNode.childItems.edges.some(({ node: childNode }) => childNode.id === node.id)
              );

              // Only render if it's not a submenu item of another menu
              if (!isSubmenuItem) {
                acc.push(
                  <div key={node.id} className="relative group">
                    <Link onClick={closeMenu} href={node.path || '#'} className="flex items-center justify-between">
                      {node?.label}
                      {node?.childItems && node?.childItems?.edges && node?.childItems?.edges?.length > 0 && (
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      )}
                    </Link>

                    {node.childItems && node.childItems.edges && node.childItems.edges.length > 0 && (
                      <div className="absolute hidden  group-hover:block bottom-0 right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {node.childItems.edges.map(({ node: childNode }) => (
                          <div key={childNode.id}>
                            <Link
                              href={childNode.path || '#'}
                              onClick={closeMenu}
                              className="block px-4 py-2 hover:bg-gray-200"
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
            <Image src={twitter} alt="Twitter" className="object-cover" width={20} height={20} />
            <Image src={fb} alt="Facebook" className="object-cover" width={20} height={20} />
            <Image src={insta} alt="Instagram" className="object-cover" width={20} height={20} />
          </div>
          <div className="flex justify-center w-full mt-6">
            <hr className="w-[75%] border-t-1 border-[#CCC]" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden  lg:text-sm xl:text-lg lg:flex lg:justify-center lg:items-center lg:space-x-2 xl:space-x-4">
          {/* <div className="flex justify-between items-center"> */}

          {/* <div className="hidden  lg:text-sm xl:text-lg lg:flex lg:justify-center lg:items-center lg:space-x-2 xl:space-x-4"> */}
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
                  <Link onClick={closeMenu} href={node.path || '#'} className="flex items-center justify-between">
                    {node?.label}
                    {node?.childItems && node?.childItems?.edges && node?.childItems?.edges?.length > 0 && (
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    )}
                  </Link>

                  {node?.childItems && node?.childItems?.edges && node?.childItems?.edges?.length > 0 && (
                    <div className="absolute hidden  group-hover:block right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {node.childItems.edges.map(({ node: childNode }) => (
                        <div key={childNode.id}>
                          <Link
                            href={childNode.path || '#'}
                            onClick={closeMenu}
                            className="block px-4 py-2 hover:bg-gray-200"
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
          {/* ----------------------- */}
        </div>

        {/* Searchbar for Desktop */}
        <div className="hidden lg:block">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
