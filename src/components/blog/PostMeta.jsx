import React from 'react';

/**
 * Reusable Post Meta component displaying Author info, Publication Date, and Reading Time
 */
const PostMeta = ({ author, date, readingTime, className = '' }) => {
  if (!author && !date) return null;

  return (
    <div className={`d-flex align-items-center justify-content-between p-3 rounded-4 bg-light border ${className}`}>
      <div className="d-flex align-items-center">
        {author?.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="rounded-circle me-3 border shadow-sm"
            style={{ width: '44px', height: '44px', objectFit: 'cover' }}
          />
        ) : (
          <div
            className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center fw-bold"
            style={{ width: '44px', height: '44px' }}
          >
            {author?.name ? author.name.charAt(0) : 'E'}
          </div>
        )}

        <div>
          <h6 className="mb-0 fw-bold text-dark fs-6">{author?.name || 'Editorial Team'}</h6>
          <span className="text-muted small">Technical Writer</span>
        </div>
      </div>

      <div className="text-end text-muted small">
        <div className="fw-medium text-dark mb-1">
          <i className="bi bi-calendar3 me-1 text-primary"></i>
          {date}
        </div>
        {readingTime && (
          <span className="badge bg-secondary bg-opacity-10 text-secondary border">
            <i className="bi bi-clock me-1"></i>
            {readingTime}
          </span>
        )}
      </div>
    </div>
  );
};

export default PostMeta;
