'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLast, FileInput, FileOutput, ChevronFirst, ChevronsRight, ChevronsLeft } from 'lucide-react';
import PostTypeContent from '../../app/Components/PostTypeContent';
import Sidebar from '../../app/Components/Sidebar';
import CategoryCard from '../../app/Components/CategoryCard';
import AccordionNew from '../../app/Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../../app/Components/subscription/SubscriptionForm';

const PaginationButton = ({ href, disabled, children }) => (
  <Link
    href={href}
    className={`flex items-center justify-center w-10 h-10 rounded-full ${
      disabled
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 opacity-80'
    }`}
    aria-disabled={disabled}
  >
    {children}
  </Link>
);

export default function CategoryPage({ posts, categoryName, categoryDescription, page, totalPages, category }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Main Content Section (3/4) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <PostTypeContent
            title={categoryName || 'Online'}
            description={categoryDescription}
            fallbackText="Sedan 2007 är det lagligt att importera vin privat via nätet i Sverige. Om du funderar på att ta vara på det utökade utbudet och de ofta billigare priserna guidar vi dig genom processen. Vi förklara steg för steg hur du går till väga och listar annan viktig information."
          />

          <div className="space-y-4">
            <CategoryCard posts={posts} />
            {/* Pagination */}
            <nav className="flex justify-center items-center space-x-2 py-8" aria-label="Pagination">
              <PaginationButton href={`/${category}?page=1`} disabled={page <= 1}>
                <ChevronsLeft className="w-6 h-6" />
              </PaginationButton>
              <PaginationButton href={`/${category}?page=${page - 1}`} disabled={page <= 1}>
                <ChevronFirst className="w-6 h-6" />
              </PaginationButton>
              <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">
                Page {page} of {totalPages}
              </span>
              <PaginationButton href={`/${category}?page=${page + 1}`} disabled={page >= totalPages}>
                <ChevronLast className="w-6 h-6" />
              </PaginationButton>
              <PaginationButton href={`/${category}?page=${totalPages}`} disabled={page >= totalPages}>
                <ChevronsRight className="w-6 h-6" />
              </PaginationButton>
            </nav>
            <AccordionNew />
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        {/* Sidebar Section (1/4) */}
        <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
