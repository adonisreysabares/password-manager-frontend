import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🔒",
      title: "Bank-Level Encryption",
      description: "Your passwords are protected with AES-256 encryption, the same standard used by banks."
    },
    {
      icon: "⚡",
      title: "Auto-Fill",
      description: "Save time with our intelligent auto-fill feature across all your devices."
    },
    {
      icon: "🔄",
      title: "Cross-Platform Sync",
      description: "Access your passwords seamlessly across all your devices in real-time."
    },
    {
      icon: "🎯",
      title: "Password Generator",
      description: "Create strong, unique passwords with our advanced generator tool."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;