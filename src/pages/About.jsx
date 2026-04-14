import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-top">
        <h2>About Us</h2>
        <div className="about-divider"></div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur, eum veritatis minima
          tempore laborum ad aspernatur quod itaque. Nostrum.
        </p>
      </div>

      <div className="about-grid">
        <ul className="about-list">
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
        </ul>
        <ul className="about-list">
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
          <li><span>✓</span> Lorem ipsum dolor sit.</li>
        </ul>
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <div className="stat-number">2500</div>
          <div className="stat-label">Travelled</div>
        </div>
        <div className="about-stat">
          <div className="stat-number">500</div>
          <div className="stat-label">Places</div>
        </div>
        <div className="about-stat">
          <div className="stat-number">400</div>
          <div className="stat-label">Guide</div>
        </div>
        <div className="about-stat">
          <div className="stat-number">20</div>
          <div className="stat-label">Sport</div>
        </div>
      </div>

      <div className="about-cta">
        <div className="cta-text">What are you waiting for, reach us right now.</div>
        <Link to="/contact" className="cta-button">
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default About;
