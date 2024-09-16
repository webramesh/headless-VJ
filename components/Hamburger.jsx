import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button onClick={handleClick} className="flex flex-col justify-center items-center">
      <FontAwesomeIcon icon={faBars} className="text-2xl w-6 h-6" />
    </button>
  );
};

export default Hamburger;
