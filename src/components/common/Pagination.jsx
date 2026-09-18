import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  // Generate page numbers range around current page
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // Show 2 pages left & right of current page
    
    let start = Math.max(1, currentPage - delta);
    let end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav aria-label="Blog posts navigation" className="my-5">
      <ul className="pagination justify-content-center align-items-center gap-1">
        {/* Previous Button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-item-link btn btn-outline-secondary rounded-pill px-3 me-1"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <i className="bi bi-chevron-left me-1"></i> Previous
          </button>
        </li>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          <li key={index} className="page-item">
            {page === '...' ? (
              <span className="page-link border-0 text-muted">...</span>
            ) : (
              <button
                className={`page-link rounded-circle border-0 font-weight-bold ${
                  currentPage === page
                    ? 'btn-primary bg-primary text-white shadow-sm'
                    : 'text-dark bg-light hover-bg-gray'
                }`}
                style={{ width: '40px', height: '40px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-item-link btn btn-outline-secondary rounded-pill px-3 ms-1"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            Next <i className="bi bi-chevron-right ms-1"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
