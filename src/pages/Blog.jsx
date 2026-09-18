import React from 'react';
import { usePosts } from '../hooks/usePosts';
import PostGrid from '../components/blog/PostGrid';
import Pagination from '../components/common/Pagination';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';
import SEO from '../components/common/SEO';
import PostCardSkeleton from '../components/common/skeletons/PostCardSkeleton';

const Blog = () => {
  const { posts, page, setPage, totalPosts, totalPages, loading, error, refetch } = usePosts(1, 9);

  return (
    <div className="blog-page py-5 bg-light min-vh-100">
      <SEO
        title="Latest Technology Articles | TechPortal"
        description="Browse our complete catalog of dynamic tech articles, web development tutorials, and programming insights on TechPortal."
      />

      <div className="container">
        {/* Page Header */}
        <header className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-2">
            Editorial Publications
          </span>
          <h1 className="fw-extrabold display-5 text-dark mb-3">Latest Technology Articles</h1>
          <p className="text-muted leading-relaxed">
            Explore our complete catalog of dynamic stories, technical tutorials, and industry insights.
          </p>
        </header>

        {/* Loading State with Skeletons */}
        {loading && (
          <div className="row g-4 mb-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <PostCardSkeleton />
              </div>
            ))}
          </div>
        )}

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
          <section aria-labelledby="all-articles-heading">
            <h2 id="all-articles-heading" className="visually-hidden">Articles List</h2>
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
          </section>
        )}
      </div>
    </div>
  );
};

export default Blog;
