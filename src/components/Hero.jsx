import React from 'react';
import Reactimg from '../assets/react.svg'
import '../styles/component.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Simplify and Secure Your Passwords!
          </h1>
          <p className="hero-subtitle">
            Keep all your passwords safe and accessible in one secure vault.
          </p>
          <a href="/signup">
          <button className="button hero-cta">
            Get Started - It's Free
          </button></a>
        </div>
        <div className="hero-image">
          <img  alt="Logo" srcSet="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;