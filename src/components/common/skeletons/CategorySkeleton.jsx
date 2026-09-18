import React from 'react';

const CategorySkeleton = () => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 skeleton-card bg-white">
      <div className="d-flex align-items-center mb-3">
        <div className="skeleton-box rounded-circle me-3" style={{ width: '48px', height: '48px' }}></div>
        <div>
          <div className="skeleton-box rounded mb-1" style={{ width: '100px', height: '18px' }}></div>
          <div className="skeleton-box rounded" style={{ width: '60px', height: '14px' }}></div>
        </div>
      </div>
      <div className="skeleton-box rounded" style={{ width: '90%', height: '14px' }}></div>
    </div>
  );
};

export default CategorySkeleton;
