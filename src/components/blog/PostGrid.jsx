import React from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="row g-4">
      {posts.map((post) => (
        <div key={post.id} className="col-12 col-md-6 col-lg-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
