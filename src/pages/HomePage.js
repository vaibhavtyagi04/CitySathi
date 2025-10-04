import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-overlay">
    <h1 className="hero-title">
      Make Your City <span>Cleaner & Smarter</span>
    </h1>
    <p className="hero-subtitle">
      CitySathi empowers citizens to take action by reporting local issues like 
      <strong> potholes, broken streetlights, stray animals, drainage problems, and garbage collection </strong>.
      Track progress, stay updated, and be part of the solution for a better tomorrow. 🌍
    </p>

    <div className="hero-buttons">
      <Link to="/report" className="btn-primary">🚀 Get Started</Link>
      <Link to="/about" className="btn-outline">📖 Learn More</Link>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="features-section">
        <h3>Why Report?</h3>
        <div className="features-wrapper">
          <div className="feature-card">
            <h4>Report Issues</h4>
            <p>Quickly upload photos, videos, and descriptions of local issues.</p>
          </div>
          <div className="feature-card">
            <h4>Track Progress</h4>
            <p>See how your reports contribute to cleaner streets.</p>
          </div>
          <div className="feature-card">
            <h4>Earn Rewards</h4>
            <p>Receive incentives for active participation in keeping our city clean.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h3>Live Report Map</h3>
        <div className="map-container">
          <iframe
            title="AKGEC Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.69078016602!2d77.44327355!3d28.6758956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1aabaf5f4b5%3A0x69f5a12e1982cf9e!2sAjay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1693910485678!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h3>About CitySathi</h3>
        <p>
          CitySathi is a community-driven initiative to help make Ghaziabad cleaner and safer by enabling citizens
          to report civic issues. Each report is a step towards a smarter and greener city.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p><strong>CitySathi</strong> — Report. Act. Clean.</p>
        <p>Created for a cleaner Ghaziabad</p>
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
