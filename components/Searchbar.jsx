import React from "react";

export default function Searchbar() {
  return (
    <div className="relative">
      <form>
      <input
        type="text"
        className="bg-white text-gray-600 text-sm py-2 pl-2 rounded-md border-2 border-gray-200 shadow-lg focus:outline-none focus:border-gray-500 "
        placeholder="Search..."
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      </form>
    </div>
  );
}
