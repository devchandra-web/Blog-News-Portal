import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchPosts } from '../services/wordpressApi';
import PostGrid from '../components/blog/PostGrid';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setPosts([]);
      setTotalPosts(0);
      return;
    }

    let isMounted = true;
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchPosts(query, page, 9);
        if (isMounted) {
          setPosts(data.posts || []);
          setTotalPosts(data.totalPosts || 0);
          setTotalPages(data.totalPages || 1);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error executing search:', err);
          setError('Search request failed. Please try again.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchSearchResults();
    return () => {
      isMounted = false;
    };
  }, [query, page]);

  return (
    <div className="search-results-page py-5 bg-light min-vh-100">
      <div className="container">
        {/* Header Search Banner */}
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-2">
              Search Results
            </span>
            <h1 className="fw-extrabold text-dark h2 mb-3">
              {query ? `Results for "${query}"` : 'Search Stories & Articles'}
            </h1>
            <div className="mt-4">
              <SearchBar placeholder="Type keywords like react, css, tech..." />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner message={`Searching articles for "${query}"...`} />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Empty Query State */}
        {!query && (
          <EmptyState
            title="Enter a search term"
            message="Use the search bar above to query topics, technologies, or keywords."
          />
        )}

        {/* Empty Results State */}
        {!loading && !error && query && posts.length === 0 && (
          <EmptyState
            title={`No results found for "${query}"`}
            message="Try searching with different keywords or check spelling."
            actionText="Browse All Articles"
            actionLink="/blog"
          />
        )}

        {/* Search Results Grid */}
        {!loading && !error && posts.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small fw-semibold">
                Found <strong className="text-dark">{totalPosts}</strong> matching {totalPosts === 1 ? 'article' : 'articles'} for "{query}"
              </span>
            </div>

            <PostGrid posts={posts} />

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                setPage(newPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
