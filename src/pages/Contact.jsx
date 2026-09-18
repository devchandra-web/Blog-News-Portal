import React, { useState } from 'react';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status) setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Validation checks
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    // Success response simulation
    setStatus('success');
    setFeedback('Thank you for reaching out! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page py-5 bg-light min-vh-100">
      <SEO
        title="Contact Us | TechPortal"
        description="Contact TechPortal editorial team for inquiries, feedback, or technology story pitches."
      />

      <div className="container">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-2">
            Get In Touch
          </span>
          <h1 className="fw-extrabold display-5 text-dark mb-3">Contact Editorial Team</h1>
          <p className="text-muted leading-relaxed">
            Have a story tip, partnership inquiry, or technical feedback? Drop us a message below.
          </p>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
              {status === 'success' && (
                <div className="alert alert-success rounded-3 p-3 mb-4 d-flex align-items-center" role="alert">
                  <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                  <div>{feedback}</div>
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger rounded-3 p-3 mb-4 d-flex align-items-center" role="alert">
                  <i className="bi bi-exclamation-triangle-fill fs-4 me-2"></i>
                  <div>{feedback}</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold text-dark small">Your Name *</label>
                    <input
                      type="text"
                      className="form-control py-2 shadow-none"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold text-dark small">Email Address *</label>
                    <input
                      type="email"
                      className="form-control py-2 shadow-none"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label fw-semibold text-dark small">Subject *</label>
                    <input
                      type="text"
                      className="form-control py-2 shadow-none"
                      id="subject"
                      name="subject"
                      placeholder="Story pitch, inquiry, feedback..."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold text-dark small">Message *</label>
                    <textarea
                      className="form-control shadow-none"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 pt-2">
                    <button type="submit" className="btn btn-primary rounded-pill px-5 py-3 fw-bold w-100 w-md-auto">
                      <i className="bi bi-send-fill me-2"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
