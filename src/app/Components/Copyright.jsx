import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-gray-500 text-sm flex justify-center items-center h-full">
      &copy; 2013 - {currentYear} Vinjournalen.se All rights reserved.
    </div>
  );
};

export default Copyright;
