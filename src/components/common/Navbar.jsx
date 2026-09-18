import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

const Navbar = () => {
  const { categories } = useCategories();
  const [searchOpen, setSearchOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(navSearchQuery.trim())}`);
      setSearchOpen(false);
      setNavSearchQuery('');
    }
  };

  return (
    <header className="sticky-top shadow-sm bg-white border-bottom navbar-container">
      {/* Top Banner Ticker */}
      <div className="bg-dark text-white-50 py-1 px-3 text-center fs-7 small d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center">
          <span><i className="bi bi-broadcast text-primary me-2"></i>Live Editorial Feed • WordPress REST API Powered</span>
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand d-flex align-items-center me-4" to="/">
            <div className="bg-primary text-white rounded-3 px-2 py-1 me-2 fw-bold fs-4">C</div>
            <span className="fw-extrabold fs-3 text-dark tracking-tight">Chronicle<span className="text-primary">.</span></span>
          </Link>

          {/* Mobile Actions & Toggle */}
          <div className="d-flex align-items-center d-lg-none ms-auto gap-2">
            <button
              className="btn btn-light rounded-circle p-2"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
            >
              <i className="bi bi-search fs-5"></i>
            </button>
            <button
              className="navbar-toggler border-0 p-2 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold fs-6 gap-lg-2">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active text-primary fw-bold' : 'text-dark'}`} end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/blog" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active text-primary fw-bold' : 'text-dark'}`}>
                  Blog Posts
                </NavLink>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-3 text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 py-2 mt-2">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <li key={cat.id}>
                        <Link className="dropdown-item py-2 px-4 d-flex justify-content-between align-items-center" to={`/category/${cat.slug}`}>
                          <span>{cat.name}</span>
                          {cat.count !== undefined && (
                            <span className="badge bg-light text-secondary rounded-pill ms-2">{cat.count}</span>
                          )}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li><span className="dropdown-item text-muted">Loading categories...</span></li>
                  )}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active text-primary fw-bold' : 'text-dark'}`}>
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active text-primary fw-bold' : 'text-dark'}`}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Desktop Search Bar */}
            <div className="d-none d-lg-block">
              <form onSubmit={handleSearchSubmit} className="d-flex position-relative align-items-center" style={{ width: '260px' }}>
                <input
                  type="search"
                  className="form-control rounded-pill bg-light border-0 ps-4 pe-5 py-2 small"
                  placeholder="Search stories..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn text-muted position-absolute end-0 me-2 p-1 border-0 shadow-none">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Expandable Search Bar */}
        {searchOpen && (
          <div className="w-100 bg-light p-3 border-top d-lg-none">
            <div className="container">
              <form onSubmit={handleSearchSubmit} className="d-flex">
                <input
                  type="search"
                  className="form-control rounded-pill me-2 py-2"
                  placeholder="Search articles..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary rounded-pill px-4">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
