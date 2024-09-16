
import React from 'react';
const NavbarSkeleton = () => {
  return (
    <nav className="bg-[#F5F5F5] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-40 h-10 bg-gray-300 animate-pulse"></div>
        <div className="hidden lg:flex space-x-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-20 h-4 bg-gray-300 animate-pulse"></div>
          ))}
        </div>
        <div className="w-32 h-8 bg-gray-300 animate-pulse"></div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;