import React from 'react';

const CTA = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="cta" id="signup">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Secure Your Digital Life?</h2>
          <p>Join thousands of users who trust us with their password security.</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <button type="submit" className="button cta-button">
              Get Started Free
            </button>
          </form>
          
          <div className="cta-features">
            <div className="feature">✓ No credit card required</div>
            <div className="feature">✓ 14-day free trial</div>
            <div className="feature">✓ Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;