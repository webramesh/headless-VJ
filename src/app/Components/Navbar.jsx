'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/vinjournalen-logo.svg';
import Searchbar from './Searchbar';
import vinlogo from '@/public/vinlogo.svg';
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRefs = useRef({});
  const itemRefs = useRef({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setFocusedItemIndex(-1);
  };

  const toggleDropDown = (id) => {
    setActiveDropdown((prevState) => (prevState === id ? null : id));
    setFocusedItemIndex(-1);
  };

  const handleKeyDown = (e, id, items, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (items.length > 0) {
        toggleDropDown(id);
        if (activeDropdown !== id) {
          setFocusedItemIndex(0);
        }
      } else if (path) {
        window.location.href = path;
      }
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
      setFocusedItemIndex(-1);
    } else if (activeDropdown === id) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedItemIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      }
    }
  };

  useEffect(() => {
    if (focusedItemIndex !== -1 && activeDropdown) {
      itemRefs.current[activeDropdown]?.[focusedItemIndex]?.focus();
    }
  }, [focusedItemIndex, activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        setActiveDropdown(null);
        setFocusedItemIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // <nav className="bg-[#F5F5F5]" aria-label="Main Navigation">
    <nav
      className={`bg-[#F5F5F5] transition-all duration-300 ${
        isScrolled ? 'fixed top-0 w-full shadow-md z-50' : 'relative'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-8 py-2 lg:py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
        {/* Logo and Hamburger Icon */}
        <div className={`w-full lg:w-auto flex justify-between items-center`}>
          <Link href="/" className="flex items-center">
            {/* Mobile Logo */}
            <Image src={vinlogo} alt="VinLogo" className="object-cover md:hidden w-14" width="auto" height="auto" />

            {/* Tablet and Desktop Logo */}
            <Image
              src={logo}
              alt="Vinjournalen Logo"
              className="object-cover hidden md:block w-44 xl:w-52"
              width="auto"
              height="auto"
              priority
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className={`fixed inset-0 bg-[#F5F5F5] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden h-screen overflow-y-auto`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-end">
            <button onClick={closeMenu} className="p-2 focus:outline-none" aria-label="Close menu">
              <FontAwesomeIcon icon={faTimes} className="text-2xl w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Link href="/" className="mb-4">
              <Image src={logo} alt="Vinjornalen Logo" className="object-cover w-52" width="auto" height="auto" />
            </Link>

            <div className="mb-4 w-4/5 flex justify-center items-center">
              <Searchbar />
            </div>
            <div className="mb-16"></div>

            {menu?.menuItems?.edges?.reduce((acc, { node }) => {
              const isSubmenuItem = menu?.menuItems?.edges?.some(({ node: parentNode }) =>
                parentNode?.childItems?.edges?.some(({ node: childNode }) => childNode.id === node.id)
              );

              if (!isSubmenuItem) {
                acc.push(
                  <div key={node.id} className="relative group" ref={(el) => (dropdownRefs.current[node.id] = el)}>
                    <button
                      onClick={() => (node.path ? (window.location.href = node.path) : toggleDropDown(node.id))}
                      onKeyDown={(e) => handleKeyDown(e, node.id, node?.childItems?.edges || [], node.path)}
                      className={`flex items-center justify-between ${path === node.path && 'text-[#c90022]'}`}
                      aria-expanded={activeDropdown === node.id}
                      aria-haspopup={node?.childItems?.edges?.length > 0 ? 'true' : 'false'}
                    >
                      {node?.label}
                      {node?.childItems?.edges?.length > 0 && (
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      )}
                    </button>

                    {node?.childItems?.edges?.length > 0 && (
                      <div
                        className={`absolute ${activeDropdown === node.id ? 'block' : 'hidden'} bottom-8 left-0 z-10 pt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`dropdown-button-${node.id}`}
                      >
                        {node?.childItems?.edges?.map(({ node: childNode }, index) => (
                          <div key={childNode.id}>
                            <Link
                              href={childNode.path || '#'}
                              onClick={closeMenu}
                              className={`block px-4 py-2 hover:bg-gray-200 ${path === childNode.path && 'text-[#c90022]'}`}
                              role="menuitem"
                              ref={(el) => {
                                if (!itemRefs.current[node.id]) {
                                  itemRefs.current[node.id] = [];
                                }
                                itemRefs.current[node.id][index] = el;
                              }}
                              tabIndex={activeDropdown === node.id ? 0 : -1}
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
            <Link href="https://twitter.com/hashtag/Vinjournalen" target="_blank" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} className="text-red-600" />
            </Link>
            <Link href="https://m.facebook.com/vinjournalen" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-red-600" />
            </Link>
            <Link href="https://www.instagram.com/vinjournalen.se/" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-red-600" />
            </Link>
          </div>
          <div className="flex justify-center w-full mt-6">
            <hr className="w-[75%] border-t-1 border-[#CCC]" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:text-sm xl:text-lg lg:flex lg:justify-center lg:items-center lg:space-x-2 xl:space-x-4">
          {menu?.menuItems?.edges?.reduce((acc, { node }) => {
            const isSubmenuItem = menu?.menuItems?.edges.some(
              ({ node: parentNode }) =>
                parentNode?.childItems &&
                parentNode?.childItems.edges.some(({ node: childNode }) => childNode?.id === node.id)
            );

            if (!isSubmenuItem) {
              acc.push(
                <div key={node.id} className="relative group" ref={(el) => (dropdownRefs.current[node.id] = el)}>
                  <button
                    onClick={() => (node.path ? (window.location.href = node.path) : toggleDropDown(node.id))}
                    onKeyDown={(e) => handleKeyDown(e, node.id, node?.childItems?.edges || [], node.path)}
                    className={`flex items-center justify-between ${path === node.path ? 'text-[#c90022]' : 'hover:text-[#e70826]'}`}
                    aria-expanded={activeDropdown === node.id}
                    aria-haspopup={node?.childItems?.edges?.length > 0 ? 'true' : 'false'}
                    id={`dropdown-button-${node.id}`}
                  >
                    {node?.label}
                    {node?.childItems?.edges?.length > 0 && (
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    )}
                  </button>

                  {node?.childItems?.edges?.length > 0 && (
                    <div
                      className={`absolute ${activeDropdown === node.id ? 'block' : 'hidden'} group-hover:block right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`dropdown-button-${node.id}`}
                    >
                      {node.childItems.edges.map(({ node: childNode }, index) => (
                        <div key={childNode.id}>
                          <Link
                            href={childNode.path || '#'}
                            onClick={closeMenu}
                            className={`block px-4 py-2 hover:bg-gray-200 ${path === childNode.path ? 'text-[#c90022]' : 'hover:text-[#e70826]'}`}
                            role="menuitem"
                            ref={(el) => {
                              if (!itemRefs.current[node.id]) {
                                itemRefs.current[node.id] = [];
                              }
                              itemRefs.current[node.id][index] = el;
                            }}
                            tabIndex={activeDropdown === node.id ? 0 : -1}
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
