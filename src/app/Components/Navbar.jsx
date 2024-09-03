import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/vinjournalen-logo.png";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='p-3 flex flex-col md:flex-row md:items-center md:justify-between bg-[#F5F5F5]'>
      <div className="w-full md:w-auto flex justify-between items-center  md:mb-0">
        <div className="flex-grow md:flex-grow-0 flex justify-start md:justify-start">
          <a href="#" className="flex items-center">
            <Image src={logo} alt="Logo" className="object-cover" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex flex-col justify-center items-center p-2">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="w-full md:hidden my-4">
          <Searchbar />
        </div>
      )}

      <div className="w-full md:flex md:justify-center md:items-center md:space-x-8">
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row gap-6 font-outfit items-center mb-4 md:mb-0`}>
          <Link href="VinMat" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vin & Mat</Link>
          <Link href="Vinfakta" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vinfakta</Link>
          <Link href="Vintips" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vintips</Link>
          <Link href="Vinskola" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vinskola</Link>
          <Link href="Tester" onClick={closeMenu} className="flex items-center hover:text-gray-600">Tester</Link>
          <Link href="Ekologiskt" onClick={closeMenu} className="flex items-center hover:text-gray-600">Ekologiskt</Link>
          <Link href="Vinpanatet" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vin på nätet</Link>
          <Link href="Vinguide" onClick={closeMenu} className="flex items-center hover:text-gray-600">Vinguide</Link>
        </div>
      </div>

      <div className="hidden md:block">
        <Searchbar />
      </div>
    </nav>
  );
}