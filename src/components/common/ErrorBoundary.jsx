import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught React UI error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
          <div className="card border-0 shadow-lg rounded-4 p-5 text-center max-w-md bg-white">
            <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 d-inline-block mb-3">
              <i className="bi bi-exclamation-octagon fs-1"></i>
            </div>
            <h2 className="fw-extrabold text-dark h3 mb-2">Something Went Wrong</h2>
            <p className="text-muted small mb-4">
              An unexpected error occurred while displaying this page. Our application state has been safely preserved.
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <button onClick={this.handleReload} className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">
                <i className="bi bi-arrow-clockwise me-1"></i> Reload Page
              </button>
              <a href="/" className="btn btn-outline-secondary rounded-pill px-4 fw-semibold">
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
