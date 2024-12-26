import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update isLoggedIn based on the presence of the token
  useEffect(() => {
    const isLoginToken = localStorage.getItem('token');
    setIsLoggedIn(!!isLoginToken); // Set to true if token exists, false otherwise
  }, []); // Run only once on component mount

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <a href="/">
            🔐 SecurePass
          </a>
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#security" onClick={() => setIsMenuOpen(false)}>Security</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <div className="nav-buttons">
            {isLoggedIn ? (
              <a href="/dashboard"><button className="button button-outline">Dashboard</button></a>
            ) : (
              <a href="/login"><button className="button button-outline">Log In</button></a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;