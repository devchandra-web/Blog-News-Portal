import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container text-center max-w-md">
        <div className="card border-0 shadow-lg rounded-4 p-5 bg-white">
          <div className="text-primary mb-3">
            <span className="display-1 fw-extrabold text-primary">404</span>
          </div>
          <h2 className="fw-bold text-dark mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            The page or article you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary rounded-pill px-4 py-2 fw-bold">
            <i className="bi bi-house-door me-2"></i> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
