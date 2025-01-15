'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useCategoriesWithSuggestedPosts } from '../../context/CategoriesAndPostsContext';
import { ChevronDown } from 'lucide-react';

const PostAccordion = () => {
  const params = useParams();
  const categories = useCategoriesWithSuggestedPosts();

  // Filter categories and posts
  const categoriesWithFilteredDetails = categories
    .map((category) => {
      // Filter posts based on the normalized slug
      const filteredPostDetails = category?.categorySuggestedPosts?.selectSuggestedPosts?.edges
        .map((edge) => edge.node)
        .filter((post) => post.id !== params?.slug);

      // Return the updated category with filtered posts
      return {
        ...category,
        filteredPostDetails,
      };
    })
    .filter((category) => category?.filteredPostDetails?.length > 0); // Exclude categories with no posts
  const [openIndexes, setOpenIndexes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleAccordion = (index) => {
    if (isMobile) {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    } else {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
      );
    }
  };

  if (categoriesWithFilteredDetails.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="ml-3 text-xl font-semibold md:px-0 py-4 sm:py-6">Fler artiklar</h2>
      {categoriesWithFilteredDetails.map((category, index) => (
        <div key={category.id} className="border-b mb-2 border-slate-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full justify-between items-center bg-[#F5F5F5] px-2 sm:pl-3 text-slate-800 py-2"
          >
            <p className="text-left font-semibold text-xs sm:text-sm">
              <span>{category.name}</span>
            </p>
            <span
              className={`text-slate-800 transition-transform duration-300 transform ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}`}
            >
              {openIndexes.includes(index) ? (
                <ChevronDown className="size-6 sm:size-8 text-red-600" strokeWidth={2.5} />
              ) : (
                <ChevronDown className="size-6 sm:size-8 text-red-600" strokeWidth={2.5} />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndexes.includes(index) ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="pb-5 bg-[#F5F5F5] grid grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm px-2 sm:pl-3 text-red-500">
              {/* Render post titles as links */}
              {category.filteredPostDetails.map((post) => (
                <Link key={post.id} href={`/${category.slug}/${post.slug}/`} className="block mb-2 hover:underline ">
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostAccordion;
