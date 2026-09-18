import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchPosts } from '../services/wordpressApi';
import { useDebounce } from '../hooks/useDebounce';
import PostGrid from '../components/blog/PostGrid';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';
import SEO from '../components/common/SEO';
import PostCardSkeleton from '../components/common/skeletons/PostCardSkeleton';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get('q') || '';
  const debouncedQuery = useDebounce(rawQuery, 350);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (!trimmed || trimmed.length < 2) {
      setPosts([]);
      setTotalPosts(0);
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchPosts(trimmed, page, 9);
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
  }, [debouncedQuery, page]);

  const pageTitle = debouncedQuery
    ? `Search results for "${debouncedQuery}" | TechPortal`
    : 'Search Articles | TechPortal';

  return (
    <div className="search-results-page py-5 bg-light min-vh-100">
      <SEO title={pageTitle} description={`Search results for "${debouncedQuery}" on TechPortal.`} />

      <div className="container">
        {/* Header Search Banner */}
        <header className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-2">
              Search Portal
            </span>
            <h1 className="fw-extrabold text-dark h2 mb-3">
              {debouncedQuery ? `Search Results for "${debouncedQuery}"` : 'Search Stories & Articles'}
            </h1>
            <div className="mt-4">
              <SearchBar placeholder="Type keywords like react, css, tech..." />
            </div>
          </div>
        </header>

        {/* Loading State with Skeletons */}
        {loading && (
          <div className="row g-4 mb-5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <PostCardSkeleton />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Empty Query State */}
        {!rawQuery && (
          <EmptyState
            title="Enter a search term"
            message="Use the search bar above to query topics, technologies, or keywords."
          />
        )}

        {/* Empty Results State */}
        {!loading && !error && rawQuery && posts.length === 0 && (
          <EmptyState
            title={`No results found for "${rawQuery}"`}
            message="Try searching with different keywords or check spelling."
            actionText="Browse All Articles"
            actionLink="/blog"
          />
        )}

        {/* Search Results Grid */}
        {!loading && !error && posts.length > 0 && (
          <section aria-label="Search results list">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small fw-semibold">
                Found <strong className="text-dark">{totalPosts}</strong> matching {totalPosts === 1 ? 'article' : 'articles'} for "{debouncedQuery}"
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
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
