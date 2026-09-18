import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSinglePost } from '../hooks/useSinglePost';
import { mapPost } from '../utils/wordpressMapper';
import WordPressContent from '../components/blog/WordPressContent';
import RelatedPosts from '../components/blog/RelatedPosts';
import ErrorMessage from '../components/common/ErrorMessage';
import Breadcrumb from '../components/common/Breadcrumb';
import TagList from '../components/tag/TagList';
import AuthorInfo from '../components/author/AuthorInfo';
import CategoryBadge from '../components/category/CategoryBadge';
import SEO from '../components/common/SEO';
import ArticleSkeleton from '../components/common/skeletons/ArticleSkeleton';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { post: rawPost, relatedPosts, loading, error } = useSinglePost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="py-5 bg-white min-vh-100">
        <ArticleSkeleton />
      </div>
    );
  }

  if (error || !rawPost) {
    return (
      <div className="container py-5">
        <SEO title="Article Not Found | TechPortal" />
        <ErrorMessage
          message={error || 'Article not found.'}
          onRetry={() => navigate('/blog')}
        />
      </div>
    );
  }

  const post = mapPost(rawPost);
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const featuredImage = post.featuredImage?.large || post.featuredImage?.full || post.featuredImage?.medium;
  const imageAlt = post.featuredImage?.altText || `Illustration for ${post.title}`;

  // Article Schema.org JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: featuredImage ? [featuredImage] : [],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'TechPortal Contributor'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechPortal',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  return (
    <div className="blog-details-page py-5 bg-white min-vh-100">
      <SEO
        title={`${post.title} | TechPortal`}
        description={post.excerpt}
        canonicalUrl={canonicalUrl}
        ogImage={featuredImage}
        ogType="article"
        publishedDate={post.date}
        authorName={post.author?.name}
        schemaData={articleSchema}
      />

      <div className="container max-w-4xl">
        <article>
          {/* Navigation Breadcrumb & Back button */}
          <nav aria-label="Breadcrumb navigation" className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
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
              aria-label="Go back to previous page"
            >
              <i className="bi bi-arrow-left me-1"></i> Back
            </button>
          </nav>

          {/* Categories Header */}
          <div className="mb-3 d-flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <CategoryBadge key={cat.id} category={cat} />
            ))}
          </div>

          {/* Primary Article Title H1 */}
          <h1 className="fw-extrabold display-5 text-dark mb-4 lh-sm">
            {post.title}
          </h1>

          {/* Author & Publication Meta */}
          <div className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light mb-4 flex-wrap gap-3 border">
            <div className="d-flex align-items-center">
              <img
                src={post.author.avatar}
                alt={`Author avatar of ${post.author.name}`}
                className="rounded-circle me-3 border shadow-sm"
                style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                loading="eager"
              />
              <div>
                <span className="mb-0 fw-bold text-dark d-block">{post.author.name}</span>
                <span className="text-muted small">Editorial Contributor</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 text-muted small">
              <div>
                <i className="bi bi-calendar3 me-1 text-primary"></i>
                <time dateTime={post.date}>{post.formattedDate}</time>
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
          {featuredImage && (
            <div className="rounded-4 overflow-hidden shadow-sm mb-5 aspect-hero-img" style={{ maxHeight: '500px' }}>
              <img
                src={featuredImage}
                alt={imageAlt}
                className="w-100 h-100 object-fit-cover"
                loading="eager"
                fetchpriority="high"
                width="896"
                height="504"
              />
            </div>
          )}

          {/* WordPress Article Content */}
          <section className="article-body-wrapper px-md-2 mb-5" aria-label="Article content">
            <WordPressContent content={post.content} className="post-content fs-5" />
          </section>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <footer className="mt-5 pt-4 border-top">
              <TagList tags={post.tags} />
            </footer>
          )}

          {/* Author Bio Box */}
          <div className="mt-5">
            <AuthorInfo author={post.author} />
          </div>
        </article>

        {/* Sidebar / Related Posts Section */}
        <aside className="mt-5 pt-4 border-top" aria-label="Related articles">
          <RelatedPosts posts={relatedPosts} />
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
