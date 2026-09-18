import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({ 
  title = 'No Articles Found', 
  message = 'We couldn\'t find any articles matching your request.',
  actionText = 'Explore Home',
  actionLink = '/' 
}) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-5 text-center my-4 bg-light">
      <div className="card-body">
        <div className="mb-3 text-secondary">
          <i className="bi bi-journal-x display-3"></i>
        </div>
        <h4 className="fw-bold text-dark">{title}</h4>
        <p className="text-muted max-w-md mx-auto mb-4">{message}</p>
        {actionLink && (
          <Link to={actionLink} className="btn btn-primary rounded-pill px-4 py-2">
            <i className="bi bi-house-door me-2"></i>{actionText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
