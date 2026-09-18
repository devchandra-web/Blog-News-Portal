import React from 'react';

const ArticleSkeleton = () => {
  return (
    <div className="container max-w-4xl py-5 skeleton-card">
      <div className="skeleton-box rounded-pill mb-4" style={{ width: '150px', height: '24px' }}></div>
      <div className="skeleton-box rounded mb-3" style={{ width: '90%', height: '40px' }}></div>
      <div className="skeleton-box rounded mb-4" style={{ width: '70%', height: '40px' }}></div>

      <div className="d-flex align-items-center p-3 rounded-4 bg-white mb-5 border">
        <div className="skeleton-box rounded-circle me-3" style={{ width: '48px', height: '48px' }}></div>
        <div>
          <div className="skeleton-box rounded mb-1" style={{ width: '120px', height: '16px' }}></div>
          <div className="skeleton-box rounded" style={{ width: '80px', height: '12px' }}></div>
        </div>
      </div>

      <div className="skeleton-box rounded-4 mb-5 w-100" style={{ height: '400px' }}></div>

      <div className="space-y-3">
        <div className="skeleton-box rounded mb-3" style={{ width: '100%', height: '18px' }}></div>
        <div className="skeleton-box rounded mb-3" style={{ width: '95%', height: '18px' }}></div>
        <div className="skeleton-box rounded mb-3" style={{ width: '98%', height: '18px' }}></div>
        <div className="skeleton-box rounded mb-3" style={{ width: '88%', height: '18px' }}></div>
        <div className="skeleton-box rounded mb-3" style={{ width: '92%', height: '18px' }}></div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
