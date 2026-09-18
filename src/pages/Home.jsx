import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { useCategories } from '../hooks/useCategories';
import HeroPost from '../components/blog/HeroPost';
import PostGrid from '../components/blog/PostGrid';
import CategoryCard from '../components/category/CategoryCard';
import Newsletter from '../components/blog/Newsletter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { Link } from 'react-router-dom';

const Home = () => {
  const { posts, loading, error, refetch } = usePosts(1, 7);
  const { categories, loading: catLoading } = useCategories();

  const heroArticle = posts.length > 0 ? posts[0] : null;
  const latestArticles = posts.length > 1 ? posts.slice(1, 7) : [];

  return (
    <div className="home-page pb-5">
      <div className="container py-4">
        {/* Loading state */}
        {loading && <LoadingSpinner message="Fetching featured news & stories..." />}

        {/* Error state */}
        {error && <ErrorMessage message={error} onRetry={refetch} />}

        {!loading && !error && (
          <>
            {/* Hero Section */}
            {heroArticle && <HeroPost post={heroArticle} />}

            {/* Popular Categories Section */}
            <section className="my-5">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h2 className="fw-extrabold text-dark m-0 h3">Explore Topics</h2>
                  <p className="text-muted small m-0">Browse articles by popular editorial categories</p>
                </div>
                <Link to="/blog" className="btn btn-outline-primary rounded-pill btn-sm px-3 fw-bold">
                  All Topics <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>

              {catLoading ? (
                <div className="text-center py-3 text-muted">Loading topics...</div>
              ) : (
                <div className="row g-3">
                  {categories.slice(0, 4).map((cat) => (
                    <CategoryCard key={cat.id} category={cat} />
                  ))}
                </div>
              )}
            </section>

            {/* Latest Posts Section */}
            <section className="my-5">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h2 className="fw-extrabold text-dark m-0 h3">Latest Stories</h2>
                  <p className="text-muted small m-0">Fresh perspectives and in-depth articles</p>
                </div>
                <Link to="/blog" className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">
                  View All Posts
                </Link>
              </div>

              {latestArticles.length > 0 ? (
                <PostGrid posts={latestArticles} />
              ) : (
                <div className="alert alert-light text-center py-4">No additional articles found.</div>
              )}
            </section>

            {/* Newsletter Section */}
            <Newsletter />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
