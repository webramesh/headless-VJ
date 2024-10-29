import { useEffect, useState } from 'react';

const CustomToast = ({ message, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Toast visibility duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-6 md:bottom-8 left-52  text-white px-4 py-2 rounded-md">
      <div className="flex items-center justify-between">{message}</div>
    </div>
  );
};

export default CustomToast;
