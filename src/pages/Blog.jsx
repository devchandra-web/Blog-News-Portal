import React from 'react';
import { usePosts } from '../hooks/usePosts';
import PostGrid from '../components/blog/PostGrid';
import Pagination from '../components/common/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';

const Blog = () => {
  const { posts, page, setPage, totalPosts, totalPages, loading, error, refetch } = usePosts(1, 9);

  return (
    <div className="blog-page py-5 bg-light min-vh-100">
      <div className="container">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-2">
            Editorial Publications
          </span>
          <h1 className="fw-extrabold display-5 text-dark mb-3">All Articles</h1>
          <p className="text-muted leading-relaxed">
            Explore our complete catalog of dynamic WordPress stories, news, and technical tutorials.
          </p>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner message="Loading posts from WordPress API..." />}

        {/* Error State */}
        {error && <ErrorMessage message={error} onRetry={refetch} />}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <EmptyState
            title="No Posts Available"
            message="There are currently no blog articles available to display."
          />
        )}

        {/* Posts Grid & Pagination */}
        {!loading && !error && posts.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small fw-semibold">
                Showing {posts.length} of {totalPosts} articles (Page {page} of {totalPages})
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

export default Blog;
