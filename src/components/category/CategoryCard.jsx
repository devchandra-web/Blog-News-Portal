import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  if (!category) return null;

  // Icon mapping based on category slug
  const getIcon = (slug) => {
    switch (slug?.toLowerCase()) {
      case 'technology':
      case 'tech':
        return 'bi-cpu';
      case 'design':
        return 'bi-palette';
      case 'business':
        return 'bi-briefcase';
      case 'culture':
        return 'bi-globe';
      case 'development':
      case 'coding':
        return 'bi-code-slash';
      default:
        return 'bi-folder2-open';
    }
  };

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <Link
        to={`/category/${category.slug}`}
        className="card category-card border-0 shadow-sm rounded-4 p-4 text-decoration-none text-dark h-100 transition-all bg-white hover-shadow-md text-center"
      >
        <div className="card-body p-0 d-flex flex-column align-items-center justify-content-center">
          <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
            <i className={`bi ${getIcon(category.slug)} fs-3`}></i>
          </div>
          <h6 className="fw-bold text-dark mb-1">{category.name}</h6>
          {category.count !== undefined && (
            <span className="small text-muted fw-medium">
              {category.count} {category.count === 1 ? 'Article' : 'Articles'}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
