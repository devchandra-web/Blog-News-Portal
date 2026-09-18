import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryBySlug, getCategoryPosts } from '../services/wordpressApi';
import PostGrid from '../components/blog/PostGrid';
import Pagination from '../components/common/Pagination';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';
import SEO from '../components/common/SEO';
import PostCardSkeleton from '../components/common/skeletons/PostCardSkeleton';

const Category = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCategoryAndPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const catData = await getCategoryBySlug(slug);
        if (!isMounted) return;

        if (!catData) {
          setError('Category not found');
          setLoading(false);
          return;
        }

        setCategory(catData);

        const postsData = await getCategoryPosts(catData.id, page, 9);
        if (isMounted) {
          setPosts(postsData.posts || []);
          setTotalPosts(postsData.totalPosts || 0);
          setTotalPages(postsData.totalPages || 1);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error loading category posts:', err);
          setError('Failed to load articles for this category.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCategoryAndPosts();
    return () => {
      isMounted = false;
    };
  }, [slug, page]);

  const categoryName = category ? category.name : slug.charAt(0).toUpperCase() + slug.slice(1);
  const pageTitle = `${categoryName} Articles | TechPortal`;
  const pageDescription = category?.description || `Browse curated ${categoryName} articles, tutorials, and tech guides on TechPortal.`;

  return (
    <div className="category-page py-5 bg-light min-vh-100">
      <SEO title={pageTitle} description={pageDescription} />

      <div className="container">
        {/* Header Banner */}
        <header className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill fw-bold mb-2">
              Topic Archive
            </span>
            <h1 className="fw-extrabold text-dark display-5 mb-3 text-capitalize">
              {categoryName} Articles
            </h1>
            <p className="text-muted leading-relaxed mb-0">
              {category?.description || `Explore curated stories, news, and technical tutorials published under ${categoryName}.`}
            </p>
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

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <EmptyState
            title={`No Articles in ${categoryName}`}
            message="There are currently no published articles in this category."
            actionText="View All Articles"
            actionLink="/blog"
          />
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <section aria-label={`${categoryName} articles list`}>
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small fw-semibold">
                Found {totalPosts} articles in <strong className="text-dark">{categoryName}</strong>
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

export default Category;
