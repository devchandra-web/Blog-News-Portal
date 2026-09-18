import React from 'react';
import { Link } from 'react-router-dom';
import { mapPost } from '../../utils/wordpressMapper';

const HeroPost = ({ post: rawPost }) => {
  if (!rawPost) return null;

  const post = mapPost(rawPost);
  const primaryCategory = post.categories[0] || { name: 'Featured', slug: 'featured' };
  const imageUrl = post.featuredImage?.large || post.featuredImage?.full || post.featuredImage?.medium;
  const altText = post.featuredImage?.altText || `Featured article header: ${post.title}`;

  return (
    <article className="card hero-card border-0 shadow-lg rounded-4 overflow-hidden mb-5 bg-dark text-white">
      <div className="row g-0 align-items-center">
        {/* Hero Image Section - LCP Element */}
        <div className="col-lg-7 position-relative overflow-hidden" style={{ minHeight: '380px' }}>
          <img
            src={imageUrl}
            alt={altText}
            className="w-100 h-100 object-fit-cover hero-img aspect-hero-img"
            loading="eager"
            fetchpriority="high"
            width="800"
            height="450"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content Section */}
        <div className="col-lg-5 p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Link
              to={`/category/${primaryCategory.slug}`}
              className="badge bg-primary text-white text-decoration-none px-3 py-2 rounded-pill fw-semibold"
            >
              {primaryCategory.name}
            </Link>
            <span className="text-white-50 small ms-auto">
              <i className="bi bi-clock me-1"></i>
              {post.formattedDate}
            </span>
          </div>

          <h2 className="card-title fw-extrabold fs-2 mb-3 text-white lh-sm hover-text-primary transition">
            <Link to={`/blog/${post.slug}`} className="text-white text-decoration-none">
              {post.title}
            </Link>
          </h2>

          <p className="card-text text-white-70 mb-4 leading-relaxed fs-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-50">
            <div className="d-flex align-items-center">
              <img
                src={post.author.avatar}
                alt={`Author avatar for ${post.author.name}`}
                className="rounded-circle me-2 border border-secondary"
                style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                loading="lazy"
              />
              <div>
                <span className="small text-white-80 fw-medium d-block lh-1">{post.author.name}</span>
                <span className="text-white-50 extra-small">{post.readingTime}</span>
              </div>
            </div>

            <Link to={`/blog/${post.slug}`} className="btn btn-outline-light rounded-pill px-4 btn-sm fw-semibold">
              Read Article <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroPost;
