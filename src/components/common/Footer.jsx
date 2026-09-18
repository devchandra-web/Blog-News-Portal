import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

const Footer = () => {
  const { categories } = useCategories();

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary text-white rounded-3 px-2 py-1 me-2 fw-bold fs-4">C</div>
              <span className="fw-extrabold fs-3 text-white tracking-tight">Chronicle<span className="text-primary">.</span></span>
            </div>
            <p className="text-white small leading-relaxed pe-md-3">
              Chronicle is a modern digital magazine and editorial news portal providing in-depth analysis on technology, web engineering, culture, and business.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5 text-white">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white transition"><i className="bi bi-twitter-x"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white transition"><i className="bi bi-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white transition"><i className="bi bi-linkedin"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white transition"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-white">All Articles</Link></li>
              <li><Link to="/about" className="text-decoration-none text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Top Categories */}
          <div className="col-6 col-md-3">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">Popular Topics</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="text-white text-decoration-none hover-text-white d-flex align-items-center">
                    <i className="bi bi-chevron-right text-primary me-2 fs-7"></i>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* API Information */}
          <div className="col-12 col-md-3">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">REST API Integration</h6>
            <p className="text-white small mb-3">
              Powered by headless WordPress REST API. All posts, images, and categories are dynamically synced.
            </p>
            <span className="badge bg-secondary bg-opacity-25 text-info px-3 py-2 rounded-pill small border border-info border-opacity-25">
              <i className="bi bi-wordpress me-1"></i> WP REST API Connected
            </span>
          </div>
        </div>

        <hr className="border-secondary opacity-25 my-4" />

        {/* Bottom copyright */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Chronicle News Portal. All rights reserved. Built for Portfolio & Resume.
          </p>
          <div className="d-flex gap-4">
            <a href="#privacy" className="text-white text-decoration-none hover-text-white">Privacy Policy</a>
            <a href="#terms" className="text-white text-decoration-none hover-text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
