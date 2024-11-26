'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';

export default function SearchContainer({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState({ all: [], posts: [], products: [] });
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const performSearch = useCallback(async () => {
    if (debouncedSearchTerm.length >= 1) {
      setLoading(true);
      setError(null);
      try {
        const results = await onSearch(debouncedSearchTerm);
        setSearchResults(results);
        setIsDropdownOpen(true);
      } catch (err) {
        setError(err.message);
        setSearchResults({ all: [], posts: [], products: [] });
      } finally {
        setLoading(false);
      }
    } else {
      setIsDropdownOpen(false);
      setSearchResults({ all: [], posts: [], products: [] });
    }
  }, [debouncedSearchTerm, onSearch]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container relative">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-white text-gray-600 text-sm py-2 pl-2 pr-10 rounded-md border-2 border-gray-200 shadow-lg focus:outline-none focus:border-gray-500 w-full"
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
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg overflow-y-auto"
          style={{ maxHeight: '400px' }}
        >
          {loading && <p className="p-4 text-center">Loading...</p>}
          {error && <p className="p-4 text-center text-red-500">Error: {error}</p>}
          {!loading && !error && searchResults.all.length === 0 && debouncedSearchTerm && (
            <p className="p-4 text-center">No results found for "{debouncedSearchTerm}"</p>
          )}
          {searchResults.all.map((item) => (
            <Link
              key={item.id}
              href={`/${item.type}/${item.slug}`}
              onClick={() => {
                setIsDropdownOpen(false);
                setSearchTerm('');
              }}
              className="block py-3 px-4 hover:bg-gray-100 border-b last:border-b-0"
            >
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-xs mt-1 text-gray-500">{item.type === 'produkter' ? 'Product' : 'Article'}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
