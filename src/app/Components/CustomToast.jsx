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
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 max-w-xs px-8 py-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${className}`}
      style={{
        backdropFilter: 'blur(10px)',
        textShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div className="flex items-center justify-between">
        {message}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close toast"
          className="ml-4 text-white hover:text-gray-600"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 8.586l3.293-3.293a1 1 0 110 1.414L11.414 10l3.293 3.293a1 1 0 010 1.414l-1.414 1.414L10 11.414l-3.293 3.293-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomToast;
