import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage('Thank you for subscribing! Check your inbox for confirmation.');
    setEmail('');
  };

  return (
    <div className="card newsletter-card border-0 shadow-lg rounded-4 my-5 bg-gradient-primary text-white p-4 p-md-5 overflow-hidden position-relative">
      <div className="row align-items-center position-relative z-1">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <div className="d-inline-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-1 mb-3 small">
            <i className="bi bi-envelope-paper-fill me-2"></i> Weekly Briefing
          </div>
          <h2 className="fw-extrabold mb-2 display-6">Stay ahead of tech & engineering trends</h2>
          <p className="text-white-80 m-0 lead fs-6">
            Get our curated weekly newsletter delivered directly to your inbox. No spam, ever.
          </p>
        </div>

        <div className="col-lg-5">
          <form onSubmit={handleSubscribe} className="bg-white p-2 rounded-4 shadow-sm">
            <div className="input-group">
              <input
                type="email"
                className="form-control border-0 py-3 px-3 shadow-none text-dark"
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status) setStatus(null);
                }}
              />
              <button type="submit" className="btn btn-primary rounded-3 px-4 fw-bold">
                Subscribe
              </button>
            </div>
          </form>

          {status && (
            <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-warning'} mt-3 mb-0 rounded-3 p-2 text-center small fw-semibold`}>
              <i className={`bi ${status === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'} me-1`}></i>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
