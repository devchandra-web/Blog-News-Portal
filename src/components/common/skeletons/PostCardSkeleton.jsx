import React from 'react';

const PostCardSkeleton = () => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden skeleton-card bg-white">
      <div className="skeleton-box w-100" style={{ height: '210px' }}></div>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between mb-3">
          <div className="skeleton-box rounded-pill" style={{ width: '80px', height: '16px' }}></div>
          <div className="skeleton-box rounded-pill" style={{ width: '60px', height: '16px' }}></div>
        </div>
        <div className="skeleton-box rounded mb-2" style={{ width: '90%', height: '22px' }}></div>
        <div className="skeleton-box rounded mb-4" style={{ width: '70%', height: '22px' }}></div>
        <div className="skeleton-box rounded mb-1" style={{ width: '100%', height: '14px' }}></div>
        <div className="skeleton-box rounded mb-3" style={{ width: '80%', height: '14px' }}></div>
        <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
          <div className="d-flex align-items-center">
            <div className="skeleton-box rounded-circle me-2" style={{ width: '32px', height: '32px' }}></div>
            <div className="skeleton-box rounded" style={{ width: '80px', height: '14px' }}></div>
          </div>
          <div className="skeleton-box rounded" style={{ width: '65px', height: '14px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
