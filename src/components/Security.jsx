import React from 'react';

const Security = () => {
  const securityFeatures = [
    {
      icon: "🛡️",
      title: "End-to-End Encryption",
      description: "Your data is encrypted before it leaves your device, ensuring only you can access it."
    },
    {
      icon: "🔐",
      title: "Zero-Knowledge Architecture",
      description: "We can't read your passwords - your encryption key never leaves your device."
    },
    {
      icon: "👆",
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA support for your vault."
    }
  ];

  return (
    <section className="security" id="security">
      <div className="container">
        <h2 className="section-title">Bank-Grade Security</h2>
        <div className="security-badge">
          <div className="badge-icon">🔒</div>
          <div className="badge-text">AES-256 Encryption</div>
        </div>
        <div className="security-grid">
          {securityFeatures.map((feature, index) => (
            <div className="security-card" key={index}>
              <div className="security-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;