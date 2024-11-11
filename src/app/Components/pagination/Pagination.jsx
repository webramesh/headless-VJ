'use client';
import { usePagination } from '@/src/context/PageContext';
import { ChevronFirst, ChevronLast, ChevronsLeft, ChevronsRight } from 'lucide-react';

const PaginationButton = ({ disabled, children, onClick }) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full ${
      disabled
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 opacity-80'
    }
    `}
    aria-disabled={disabled}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </div>
);

export default function Pagination({ pageInfo, totalPages, pageLimit }) {
  const { state, dispatch, handleNextPage, handlePreviousPage, handleLastPage } = usePagination();
  const { pageNumber: page, loading } = state;

  function handleFirstPage(pageLimit) {
    dispatch({ type: 'RESET', payload: pageLimit });
  }
  return (
    <nav className="flex justify-center items-center space-x-2 py-8" aria-label="Pagination">
      <PaginationButton disabled={page === 1 || loading} onClick={() => handleFirstPage(pageLimit)}>
        <ChevronFirst className="w-6 h-6" />
      </PaginationButton>
      <PaginationButton
        disabled={!pageInfo?.hasPreviousPage || page === 1 || loading}
        onClick={() => handlePreviousPage(pageLimit, pageInfo.startCursor)}
      >
        <ChevronsLeft className="w-6 h-6" />
      </PaginationButton>
      <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">
        Page {page} of {totalPages}
      </span>
      <PaginationButton
        disabled={!pageInfo?.hasNextPage || loading}
        onClick={() => handleNextPage(pageLimit, pageInfo.endCursor)}
      >
        <ChevronsRight className="w-6 h-6" />
      </PaginationButton>
      <PaginationButton onClick={() => handleLastPage(pageLimit, totalPages)} disabled={page === totalPages || loading}>
        <ChevronLast className="w-6 h-6" />
      </PaginationButton>
    </nav>
  );
}
