import React from 'react';

const ErrorMessage = ({ message = 'Unable to load articles. Please try again.', onRetry }) => {
  return (
    <div className="alert alert-danger shadow-sm border-0 rounded-3 my-4 p-4 text-center">
      <div className="d-flex align-items-center justify-content-center mb-2">
        <i className="bi bi-exclamation-triangle-fill fs-2 text-danger me-2"></i>
        <h5 className="alert-heading mb-0 fw-bold">Oops! Something went wrong</h5>
      </div>
      <p className="mb-3 text-secondary">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-medium">
          <i className="bi bi-arrow-clockwise me-1"></i> Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
