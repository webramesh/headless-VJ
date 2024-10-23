'use client';

import { ChevronDown } from 'lucide-react';

export default function ScrollToBottom() {
  const handleScroll = () => {
    const element = document.getElementById('arrow');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={handleScroll}
        className="p-2 rounded-full bg-red-500 text-white shadow-lg opacity-70 hover:bg-red-600"
        aria-label="Scroll to bottom"
      >
        <ChevronDown className="h-8 w-8 stroke-2" />
      </button>
    </div>
  );
}
