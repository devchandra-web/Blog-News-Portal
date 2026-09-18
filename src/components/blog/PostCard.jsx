import React from 'react';
import { Link } from 'react-router-dom';
import { mapPost } from '../../utils/wordpressMapper';

const PostCard = ({ post: rawPost }) => {
  if (!rawPost) return null;

  const post = mapPost(rawPost);
  const primaryCategory = post.categories[0] || { name: 'Editorial', slug: 'editorial' };
  const imageUrl = post.featuredImage?.medium || post.featuredImage?.large || post.featuredImage?.full;
  const altText = post.featuredImage?.altText || `Article thumbnail for ${post.title}`;

  return (
    <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden post-card transition-all bg-white">
      {/* Post Image Container */}
      <div className="position-relative overflow-hidden card-img-top-wrapper" style={{ height: '210px' }}>
        <img
          src={imageUrl}
          alt={altText}
          className="w-100 h-100 object-fit-cover card-img-hover aspect-card-img"
          loading="lazy"
          width="400"
          height="225"
        />
        <div className="position-absolute top-0 start-0 m-3">
          <Link
            to={`/category/${primaryCategory.slug}`}
            className="badge bg-primary text-white text-decoration-none shadow-sm px-3 py-2 rounded-pill font-weight-bold"
          >
            {primaryCategory.name}
          </Link>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column p-4">
        <div className="text-muted small mb-2 d-flex align-items-center justify-content-between">
          <span>
            <i className="bi bi-calendar3 me-1 text-primary"></i>
            {post.formattedDate}
          </span>
          {post.readingTime && (
            <span className="text-muted small">
              <i className="bi bi-clock me-1"></i>
              {post.readingTime}
            </span>
          )}
        </div>

        <h3 className="card-title fw-bold text-dark fs-5 mb-3 line-clamp-2 title-link">
          <Link to={`/blog/${post.slug}`} className="text-dark text-decoration-none hover-text-primary">
            {post.title}
          </Link>
        </h3>

        <p className="card-text text-secondary small mb-4 line-clamp-3 leading-relaxed flex-grow-1">
          {post.excerpt}
        </p>

        {/* Card Footer Info */}
        <div className="d-flex align-items-center justify-content-between pt-3 border-top border-light mt-auto">
          <div className="d-flex align-items-center me-2">
            <img
              src={post.author.avatar}
              alt={`Author ${post.author.name}`}
              className="rounded-circle me-2 border"
              style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              loading="lazy"
            />
            <span className="small text-muted fw-semibold text-truncate" style={{ maxWidth: '110px' }}>
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="btn btn-link text-primary text-decoration-none p-0 fw-bold small read-more-link"
          >
            Read More <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
