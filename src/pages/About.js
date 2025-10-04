import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";

const About = () => {
  return (
  <>
  <Navbar />
    <div className="about-page">
      <section className="about-container">
        <h1 className="about-heading">About CitySathi</h1>
        <p className="about-text">
          <strong>CitySathi</strong> is a community-driven platform that empowers
          citizens to actively participate in building cleaner, safer, and smarter
          cities. Our mission is to bridge the gap between residents and municipal
          authorities by providing a simple and transparent way to report and track
          local civic issues.
        </p>

        <h2 className="about-subheading">Why CitySathi?</h2>
        <p className="about-text">
          Citizens face daily problems such as overflowing garbage, potholes, broken
          streetlights, stray animals, and drainage issues. Unfortunately, these often
          go unnoticed or unresolved due to a lack of communication channels.
          CitySathi solves this by enabling people to{" "}
          <strong>report issues instantly</strong> with photos, descriptions, and
          location details — ensuring they reach the right authorities.
        </p>

        <h2 className="about-subheading">Key Features</h2>
        <ul className="about-list">
          <li>📌 Easy reporting with photos, videos, and geolocation</li>
          <li>📊 Real-time progress tracking of submitted issues</li>
          <li>🤝 Transparent system connecting citizens and officials</li>
          <li>🏆 Rewards and recognition for active participants</li>
        </ul>

        <h2 className="about-subheading">Our Vision</h2>
        <p className="about-text">
          We envision cities where every citizen contributes to civic improvement, and
          local authorities can respond faster through technology. Together, we can
          create a healthier and more sustainable environment for everyone.
        </p>
      </section>
    </div>
    </>
  );
};

export default About;
