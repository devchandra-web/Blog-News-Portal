import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBadge = ({ category, className = '' }) => {
  if (!category) return null;

  return (
    <Link
      to={`/category/${category.slug}`}
      className={`badge bg-primary text-white text-decoration-none shadow-sm px-3 py-2 rounded-pill fw-bold transition-all hover-opacity ${className}`}
    >
      {category.name}
    </Link>
  );
};

export default CategoryBadge;
