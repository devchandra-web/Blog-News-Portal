import React from 'react';

const AuthorInfo = ({ author, className = '' }) => {
  if (!author) return null;

  return (
    <div className={`card border-0 shadow-sm rounded-4 p-4 bg-light ${className}`}>
      <div className="d-flex align-items-center align-items-md-start flex-column flex-md-row gap-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="rounded-circle border shadow-sm flex-shrink-0"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />
        <div>
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill small fw-bold mb-2">
            Written By
          </span>
          <h5 className="fw-bold text-dark mb-2">{author.name}</h5>
          <p className="text-secondary small leading-relaxed mb-0">
            {author.description || 'Frontend engineer and technical contributor.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
