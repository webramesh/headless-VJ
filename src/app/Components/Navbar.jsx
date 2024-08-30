import Link from "next/link";
import Image from "next/image";
import logo from "@/public/vinjournalen-logo.png";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <nav className="p-3
    flex justify-between items-center bg-[#F5F5F5]">
      <a href="#" className="flex items-center ml-3 md:ml-8">
        <Image src={logo} alt="Logo" className="object-cover" />
      </a>
      <div id="nav-menu" className="hidden md:flex gap-6 font-outfit">
  <Link href={"VinMat"} className="flex items-center hover:text-gray-600">Vin & Mat</Link>
  <Link href={"Vinfakta"} className="flex items-center hover:text-gray-600">Vinfakta</Link>
  <Link href={"Vintips"} className="flex items-center hover:text-gray-600">Vintips</Link>
  <Link href={"Vinskola"} className="flex items-center hover:text-gray-600">Vinskola</Link>
  <Link href={"Tester"} className="flex items-center hover:text-gray-600">Tester</Link>
  <Link href={"Ekologiskt"} className="flex items-center hover:text-gray-600">Ekologiskt</Link>
  <Link href={"Vinpanatet"} className="flex items-center hover:text-gray-600">Vin på nätet</Link>
  <Link href={"Vinguide"} className="flex items-center hover:text-gray-600">Vinguide</Link>
</div>
<div className="mr-8  relative hidden md:block ">
<Searchbar />
<div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-r-lg">
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="w-5 h-5 text-white"
    />
  </div>
      </div>
      <div className="mr-3">
      <Hamburger />
      </div>
    </nav>
  );
}
