import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "This password manager has completely transformed how I handle my online security. It's intuitive and reliable!"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The auto-fill feature saves me countless hours. I can't imagine going back to managing passwords manually."
    },
    {
      name: "Emma Wilson",
      role: "Digital Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "The cross-platform sync is seamless. I can access my passwords anywhere, anytime."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;