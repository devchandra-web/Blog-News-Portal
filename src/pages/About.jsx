import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <div className="about-page py-5 bg-light min-vh-100">
      <SEO
        title="About Us | TechPortal"
        description="Learn about TechPortal's mission, technology architecture, and technical editorial vision."
      />

      <div className="container">
        {/* Hero Section */}
        <header className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5 bg-dark text-white p-4 p-md-5">
          <div className="max-w-3xl mx-auto text-center py-4">
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold mb-3">
              Editorial Vision
            </span>
            <h1 className="fw-extrabold display-4 mb-4">About TechPortal</h1>
            <p className="lead text-white-80 leading-relaxed mb-0">
              TechPortal is an independent digital news and editorial platform dedicated to delivering high-caliber technology analysis, modern web engineering practices, and digital culture perspectives.
            </p>
          </div>
        </header>

        {/* Grid Sections */}
        <section className="row g-4 mb-5" aria-label="About features">
          {/* Mission */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="card-body">
                <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-inline-block mb-3">
                  <i className="bi bi-compass fs-2"></i>
                </div>
                <h2 className="fw-bold text-dark h4 mb-3">Our Mission</h2>
                <p className="text-secondary leading-relaxed mb-0">
                  To democratize technical knowledge by bridging content creation with cutting-edge web architecture. We strive to provide developers, designers, and tech enthusiasts with clean, accurate, and actionable editorial content.
                </p>
              </div>
            </div>
          </div>

          {/* What We Publish */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="card-body">
                <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-inline-block mb-3">
                  <i className="bi bi-journal-text fs-2"></i>
                </div>
                <h2 className="fw-bold text-dark h4 mb-3">What We Publish</h2>
                <p className="text-secondary leading-relaxed mb-0">
                  From deep-dive React tutorials and layout guides to headless CMS architectures and web performance standards, our team curates stories that matter to modern web practitioners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Follow Us & Architecture */}
        <section className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white" aria-labelledby="why-follow-heading">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 id="why-follow-heading" className="fw-extrabold text-dark h3 mb-3">Why Follow TechPortal?</h2>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <h3 className="fw-bold h6 mb-1">API-Driven Architecture</h3>
                    <p className="text-muted small mb-0">Every story is dynamically powered by a WordPress REST API backend with client-side caching.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <h3 className="fw-bold h6 mb-1">Sanitized & Safe HTML</h3>
                    <p className="text-muted small mb-0">Content rendering is fully sanitized using DOMPurify to eliminate XSS risks.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <h3 className="fw-bold h6 mb-1">Responsive Editorial Design</h3>
                    <p className="text-muted small mb-0">Built with Bootstrap 5 for pixel-perfect readability on mobile, tablet, and desktop.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="bg-light p-4 rounded-4 border">
                <h3 className="fw-bold text-dark h5 mb-3"><i className="bi bi-cpu me-2 text-primary"></i>Tech Stack Summary</h3>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">React 18</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">Bootstrap 5</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">React Router v6</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">WordPress REST API</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">Axios</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">DOMPurify</span>
                  <span className="badge bg-white text-dark border px-3 py-2 rounded-pill">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-4">
          <h2 className="fw-bold text-dark h4 mb-3">Have questions or feedback?</h2>
          <Link to="/contact" className="btn btn-primary rounded-pill px-4 py-2 fw-bold">
            Get in Touch <i className="bi bi-arrow-right me-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
