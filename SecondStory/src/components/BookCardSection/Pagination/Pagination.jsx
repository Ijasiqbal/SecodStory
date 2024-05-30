import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button key={i} onClick={() => handlePageClick(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className="pagination">
      {pages}
    </div>
  );
};

export default Pagination;
