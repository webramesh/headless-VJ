'use client';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const PaginationButton = ({ disabled, children, onClick }) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full ${
      disabled
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 opacity-80'
    }`}
    aria-disabled={disabled}
    onClick={!disabled ? onClick : undefined}
  >
    {children}
  </div>
);

export default function Pagination({ pageInfo, next, previous, page }) {
  return (
    <nav className="flex justify-center items-center space-x-2 py-8" aria-label="Pagination">
      <PaginationButton disabled={!pageInfo?.hasPreviousPage} onClick={previous}>
        <ChevronsLeft className="w-6 h-6" />
      </PaginationButton>
      {/* <PaginationButton href={`/${category}?page=${page - 1}`} disabled={page <= 1}>
        <ChevronFirst className="w-6 h-6" />
      </PaginationButton> */}
      <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Page {page}</span>
      {/* <PaginationButton href={`/${category}?page=${page + 1}`} disabled={page >= totalPages}>
        <ChevronLast className="w-6 h-6" />
      </PaginationButton> */}
      <PaginationButton disabled={!pageInfo?.hasNextPage} onClick={next}>
        <ChevronsRight className="w-6 h-6" />
      </PaginationButton>
    </nav>
  );
}
