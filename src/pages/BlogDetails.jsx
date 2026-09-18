import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSinglePost } from '../hooks/useSinglePost';
import { mapPost } from '../utils/wordpressMapper';
import WordPressContent from '../components/blog/WordPressContent';
import RelatedPosts from '../components/blog/RelatedPosts';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import Breadcrumb from '../components/common/Breadcrumb';
import TagList from '../components/tag/TagList';
import AuthorInfo from '../components/author/AuthorInfo';
import CategoryBadge from '../components/category/CategoryBadge';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { post: rawPost, relatedPosts, loading, error } = useSinglePost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="py-5 bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <LoadingSpinner message="Opening editorial article..." />
      </div>
    );
  }

  if (error || !rawPost) {
    return (
      <div className="container py-5">
        <ErrorMessage
          message={error || 'Article not found.'}
          onRetry={() => navigate('/blog')}
        />
      </div>
    );
  }

  const post = mapPost(rawPost);

  return (
    <div className="blog-details-page py-5 bg-white min-vh-100">
      <article className="container max-w-4xl">
        {/* Navigation Breadcrumb & Back button */}
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
          <Breadcrumb
            items={[
              { label: 'Blog', link: '/blog' },
              { label: post.categories[0]?.name || 'Category', link: `/category/${post.categories[0]?.slug}` },
              { label: post.title }
            ]}
          />
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 mb-4"
          >
            <i className="bi bi-arrow-left me-1"></i> Back
          </button>
        </div>

        {/* Categories Header */}
        <div className="mb-3 d-flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <CategoryBadge key={cat.id} category={cat} />
          ))}
        </div>

        {/* Article Title */}
        <h1 className="fw-extrabold display-5 text-dark mb-4 lh-sm">
          {post.title}
        </h1>

        {/* Author & Publication Meta */}
        <div className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light mb-4 flex-wrap gap-3 border">
          <div className="d-flex align-items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="rounded-circle me-3 border shadow-sm"
              style={{ width: '48px', height: '48px', objectFit: 'cover' }}
            />
            <div>
              <h6 className="mb-0 fw-bold text-dark">{post.author.name}</h6>
              <span className="text-muted small">Editorial Contributor</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 text-muted small">
            <div>
              <i className="bi bi-calendar3 me-1 text-primary"></i>
              {post.formattedDate}
            </div>
            {post.readingTime && (
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-semibold">
                <i className="bi bi-clock me-1"></i>
                {post.readingTime}
              </span>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage?.large && (
          <div className="rounded-4 overflow-hidden shadow-sm mb-5" style={{ maxHeight: '500px' }}>
            <img
              src={post.featuredImage.large}
              alt={post.featuredImage.altText || post.title}
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        )}

        {/* WordPress Article Content */}
        <div className="article-body-wrapper px-md-2 mb-5">
          <WordPressContent content={post.content} className="post-content fs-5" />
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-5 pt-4 border-top">
            <TagList tags={post.tags} />
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-5">
          <AuthorInfo author={post.author} />
        </div>

        {/* Related Posts Section */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </div>
  );
};

export default BlogDetails;
