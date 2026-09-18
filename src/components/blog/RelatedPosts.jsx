import React from 'react';
import PostCard from './PostCard';

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related-posts mt-5 pt-5 border-top">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="fw-bold text-dark m-0">Related Articles</h3>
        <span className="badge bg-light text-secondary rounded-pill px-3 py-2">
          Recommended Reading
        </span>
      </div>

      <div className="row g-4">
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
