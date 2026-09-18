import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTagBySlug, getPostsByTag } from '../services/wordpressApi';
import PostGrid from '../components/blog/PostGrid';
import Pagination from '../components/common/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import EmptyState from '../components/common/EmptyState';
import Breadcrumb from '../components/common/Breadcrumb';

const TagArchive = () => {
  const { slug } = useParams();
  const [tag, setTag] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTagAndPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const tagData = await getTagBySlug(slug);
        if (!isMounted) return;

        if (!tagData) {
          setError('Tag not found');
          setLoading(false);
          return;
        }

        setTag(tagData);

        const postsData = await getPostsByTag(tagData.id, page, 9);
        if (isMounted) {
          setPosts(postsData.posts || []);
          setTotalPosts(postsData.totalPosts || 0);
          setTotalPages(postsData.totalPages || 1);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching tag posts:', err);
          setError('Failed to load tagged articles.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTagAndPosts();
    return () => {
      isMounted = false;
    };
  }, [slug, page]);

  return (
    <div className="tag-archive-page py-5 bg-light min-vh-100">
      <div className="container">
        <Breadcrumb items={[{ label: 'Blog', link: '/blog' }, { label: `Tag: #${tag ? tag.name : slug}` }]} />

        {/* Header Card */}
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill fw-bold mb-2">
              Tag Archive
            </span>
            <h1 className="fw-extrabold text-dark display-5 mb-3">
              #{tag ? tag.name : slug}
            </h1>
            <p className="text-muted leading-relaxed mb-0">
              Showing all editorial articles tagged with #{tag ? tag.name : slug}.
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner message="Fetching tagged articles..." />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <EmptyState
            title={`No articles tagged #${tag ? tag.name : slug}`}
            message="There are currently no published articles with this tag."
            actionText="View All Posts"
            actionLink="/blog"
          />
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small fw-semibold">
                Found {totalPosts} articles tagged <strong className="text-dark">#{tag?.name}</strong>
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

export default TagArchive;
