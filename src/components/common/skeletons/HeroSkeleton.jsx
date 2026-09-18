import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5 bg-dark skeleton-card">
      <div className="row g-0 align-items-center">
        <div className="col-lg-7">
          <div className="skeleton-box w-100" style={{ height: '380px' }}></div>
        </div>
        <div className="col-lg-5 p-4 p-md-5">
          <div className="skeleton-box rounded-pill mb-3" style={{ width: '100px', height: '24px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '95%', height: '32px' }}></div>
          <div className="skeleton-box rounded mb-4" style={{ width: '75%', height: '32px' }}></div>
          <div className="skeleton-box rounded mb-2" style={{ width: '100%', height: '16px' }}></div>
          <div className="skeleton-box rounded mb-4" style={{ width: '85%', height: '16px' }}></div>
          <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-50">
            <div className="d-flex align-items-center">
              <div className="skeleton-box rounded-circle me-2" style={{ width: '38px', height: '38px' }}></div>
              <div className="skeleton-box rounded" style={{ width: '90px', height: '16px' }}></div>
            </div>
            <div className="skeleton-box rounded-pill" style={{ width: '100px', height: '32px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
