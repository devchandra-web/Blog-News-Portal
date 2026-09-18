import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb mb-0 small">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none text-muted">
            <i className="bi bi-house-door me-1"></i>Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? 'active text-truncate fw-semibold' : ''}`}
              style={{ maxWidth: isLast ? '280px' : 'auto' }}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast || !item.link ? (
                item.label
              ) : (
                <Link to={item.link} className="text-decoration-none text-muted">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
