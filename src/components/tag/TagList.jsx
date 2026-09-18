import React from 'react';
import { Link } from 'react-router-dom';

const TagList = ({ tags = [], className = '' }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`d-flex align-items-center gap-2 flex-wrap ${className}`}>
      <span className="fw-bold text-dark small me-1">
        <i className="bi bi-tags-fill me-1 text-primary"></i>Tags:
      </span>
      {tags.map((tag) => (
        <Link
          key={tag.id || tag.slug}
          to={`/tag/${tag.slug}`}
          className="badge bg-light text-dark border text-decoration-none rounded-pill px-3 py-2 fw-normal transition-all hover-bg-primary"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
