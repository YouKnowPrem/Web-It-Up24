'use client';

import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [state, handleSubmit, reset] = useForm('mykqjakg');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    reset();
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <section className="contact-section" data-scroll-section>
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal-up">/ Let's Connect</span>
          <h2 className="section-title reveal-up">Bring your ideas<br /><em>to life.</em></h2>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <div className="contact-info" data-scroll data-scroll-speed="0.2">
            <p className="reveal-up" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Have a project in mind, want to collaborate, or just curious about our process? Send us a message and let's craft something extraordinary.
            </p>

            <div className="contact-card-container">
              {/* Card 1: Email */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiMail />
                </div>
                <div className="contact-card-text">
                  <h4>Email Us</h4>
                  <p>info@webitup24.com</p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiPhone />
                </div>
                <div className="contact-card-text">
                  <h4>Call Us</h4>
                  <p>+1 (555) 234-5678</p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiMapPin />
                </div>
                <div className="contact-card-text">
                  <h4>Studio Location</h4>
                  <p>Everywhere creativity lives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-container" data-scroll data-scroll-speed="0.4">
            {state.succeeded ? (
              <div className="success-screen">
                <div className="success-icon-wrap">
                  <FiCheck />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our collective will review your message and reply within 24 hours.</p>
                <button 
                  className="btn btn-outline magnetic-btn"
                  onClick={handleReset}
                >
                  <span>Send another message</span>
                  <FiArrowRight />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="validation-error" />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="validation-error" />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="E-commerce website, Branding..."
                  />
                  <label htmlFor="project" className="form-label">Project Type (Optional)</label>
                  <ValidationError prefix="Project" field="project" errors={state.errors} className="validation-error" />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows={4}
                    placeholder="Tell us about your project..."
                    style={{ resize: 'none' }}
                    required
                  />
                  <label htmlFor="message" className="form-label">How can we help? *</label>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="validation-error" />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn magnetic-btn"
                  disabled={state.submitting}
                >
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                  {state.submitting ? (
                    <div className="spinner" style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(11, 11, 11, 0.3)',
                      borderTopColor: 'var(--bg)',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                  ) : (
                    <FiSend style={{ fontSize: '0.9rem' }} />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Dynamic inline styles for spinner and validation error animation */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .validation-error {
          color: #ff4a4a;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          display: block;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

