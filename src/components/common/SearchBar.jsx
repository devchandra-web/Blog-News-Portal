import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ placeholder = 'Search articles, topics...', buttonClass = 'btn-primary', onSearchSubmitted }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      if (onSearchSubmitted) onSearchSubmitted();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex w-100 position-relative" role="search">
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0 text-muted rounded-start-pill ps-3">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-start-0 border-end-0 bg-white py-2 shadow-none"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search articles"
        />
        <button
          type="submit"
          className={`btn ${buttonClass} rounded-end-pill px-4 fw-medium`}
          disabled={!query.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
