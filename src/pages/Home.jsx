import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { useCategories } from '../hooks/useCategories';
import HeroPost from '../components/blog/HeroPost';
import PostGrid from '../components/blog/PostGrid';
import CategoryCard from '../components/category/CategoryCard';
import Newsletter from '../components/blog/Newsletter';
import ErrorMessage from '../components/common/ErrorMessage';
import SEO from '../components/common/SEO';
import HeroSkeleton from '../components/common/skeletons/HeroSkeleton';
import PostCardSkeleton from '../components/common/skeletons/PostCardSkeleton';
import CategorySkeleton from '../components/common/skeletons/CategorySkeleton';
import { Link } from 'react-router-dom';

const Home = () => {
  const { posts, loading, error, refetch } = usePosts(1, 7);
  const { categories, loading: catLoading } = useCategories();

  const heroArticle = posts.length > 0 ? posts[0] : null;
  const latestArticles = posts.length > 1 ? posts.slice(1, 7) : [];

  return (
    <div className="home-page pb-5">
      <SEO title="TechPortal — Technology, Web Development & Programming" />

      {/* Visually Hidden Primary H1 for SEO Accessibility */}
      <h1 className="visually-hidden">TechPortal — Technology, Web Development & Programming</h1>

      <div className="container py-4">
        {/* Loading state with Skeletons */}
        {loading && (
          <>
            <HeroSkeleton />
            <div className="row g-4 my-4">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <PostCardSkeleton />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Error state */}
        {error && <ErrorMessage message={error} onRetry={refetch} />}

        {!loading && !error && (
          <>
            {/* Hero Section */}
            {heroArticle && (
              <section aria-label="Featured Story">
                <HeroPost post={heroArticle} />
              </section>
            )}

            {/* Popular Categories Section */}
            <section className="my-5" aria-labelledby="topics-heading">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h2 id="topics-heading" className="fw-extrabold text-dark m-0 h3">Explore Topics</h2>
                  <p className="text-muted small m-0">Browse articles by popular editorial categories</p>
                </div>
                <Link to="/blog" className="btn btn-outline-primary rounded-pill btn-sm px-3 fw-bold">
                  All Topics <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>

              {catLoading ? (
                <div className="row g-3">
                  {[1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="col-12 col-sm-6 col-md-3">
                      <CategorySkeleton />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="row g-3">
                  {categories.slice(0, 4).map((cat) => (
                    <CategoryCard key={cat.id} category={cat} />
                  ))}
                </div>
              )}
            </section>

            {/* Latest Posts Section */}
            <section className="my-5" aria-labelledby="latest-heading">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h2 id="latest-heading" className="fw-extrabold text-dark m-0 h3">Latest Stories</h2>
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
            <section aria-label="Newsletter Subscription">
              <Newsletter />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
