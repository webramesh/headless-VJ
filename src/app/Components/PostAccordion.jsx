'use client';
import { useCategoryAndPosts } from '@/src/context/CategoriesAndPostsContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const PostAccordion = () => {
  const params = useParams();
  const categoryAndPosts = useCategoryAndPosts();

  // Filter categories and posts
  const categoriesWithFilteredDetails = categoryAndPosts
    .map((category) => {
      // Filter posts based on the normalized slug
      const filteredPostDetails = category.postDetails.filter((post) => post.slug !== params?.slug);

      // Return the updated category with filtered posts
      return {
        ...category,
        filteredPostDetails,
      };
    })
    .filter((category) => category.filteredPostDetails.length > 0); // Exclude categories with no posts

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

  return (
    <div className="w-full">
      <h2 className="ml-3 text-xl font-semibold md:px-0 py-4 sm:py-6">Fler artiklar</h2>
      {categoriesWithFilteredDetails.map((category, index) => (
        <div key={category.categorySlug} className="border-b mb-2 border-slate-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="
              flex
              w-full
              justify-between
              items-center
              bg-[#F5F5F5]
              px-2 sm:pl-3
              text-slate-800
              py-2
            "
          >
            <h3
              className="
                text-left
                font-semibold
                text-xs sm:text-sm
              "
            >
              <span>{category?.categoryName}</span>
            </h3>
            <span
              className={`
                text-slate-800
                transition-transform
                duration-300
                transform
                ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}
              `}
            >
              {openIndexes.includes(index) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${openIndexes.includes(index) ? 'max-h-screen' : 'max-h-0'}
            `}
          >
            <div
              className="
              pb-5 
              bg-[#F5F5F5] 
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              text-xs 
              sm:text-sm 
              px-2 
              sm:pl-3 
              text-red-500
              "
            >
              {/* Render post titles as links */}
              {category.filteredPostDetails.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${category.categorySlug}/${post.slug}`}
                  className="block mb-2 hover:underline "
                >
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
