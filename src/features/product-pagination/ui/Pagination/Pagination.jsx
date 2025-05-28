import React from 'react';
import { Button } from '../../../../shared/ui';
import { useFiltersStore } from '../../../../shared/store/filters';

const Pagination = ({ totalCount, currentPage, limit }) => {
  const { setFilter } = useFiltersStore();

  const totalPages = Math.ceil(totalCount / limit);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setFilter('page', newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const pages = [];

    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg">
      <div className="flex flex-1 justify-between sm:hidden">
        <Button
          variant="outline"
          disabled={!hasPrevPage}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={!hasNextPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">{currentPage}</span> of
            <span className="font-medium">{totalPages}</span>
            {totalCount && (
              <span className="font-medium">{totalCount} total results</span>
            )}
          </p>
        </div>

        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Button
              variant="outline"
              disabled={!hasPrevPage}
              onClick={() => handlePageChange(currentPage - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              Previous
            </Button>

            {getVisiblePages().map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? 'primary' : 'outline'}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${page === currentPage
                    ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              disabled={!hasNextPage}
              onClick={() => handlePageChange(currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              Next
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination; 