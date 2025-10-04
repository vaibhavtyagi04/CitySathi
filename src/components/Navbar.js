import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Logo */}
      <h2 className="logo">CitySathi</h2>

      {/* Center Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/report">Submit Report</Link>
        <Link to="/reports">View Reports</Link>
        <Link to="/about">About</Link>

      </div>

      {/* Right Profile Button */}
      <Link to="/profile" className="profile-btn">Profile</Link>
    </nav>
  );
}

export default Navbar;
