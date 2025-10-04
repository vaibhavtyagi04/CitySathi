import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaGoogle, FaFacebookF, FaGithub, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';
import loginbg from '../assets/log.jpg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.overlay}></div>
        <div style={styles.loginBox}>
          <h2 style={styles.title}>Be a part in tackling the environment 🌍</h2>

          {/* Social Login Buttons */}
          <div style={styles.socialButtons}>
            <button style={{ ...styles.socialBtn, backgroundColor: '#4285F4' }}>
              <FaGoogle style={styles.icon} /> Sign in with Google
            </button>
            <button style={{ ...styles.socialBtn, backgroundColor: '#3b5998' }}>
              <FaFacebookF style={styles.icon} /> Sign in with Facebook
            </button>
            <button style={{ ...styles.socialBtn, backgroundColor: '#333' }}>
              <FaGithub style={styles.icon} /> Sign in with GitHub
            </button>
            <button style={{ ...styles.socialBtn, backgroundColor: '#e4405f' }}>
              <FaInstagram style={styles.icon} /> Sign in with Instagram
            </button>
          </div>

          <div style={styles.divider}><span>OR</span></div>

          {/* Login Form */}
          <form style={styles.form}>
            <label>Email</label>
            <input type="email" placeholder="Enter email" style={styles.input} />

            <label>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                style={styles.input}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div style={styles.optionsRow}>
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
            </div>

            <button type="submit" style={styles.loginButton}>Login</button>
          </form>

          <p style={styles.footerText}>
            Don’t have an account? <a href="/register" style={styles.link}>Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

/* ---------- Styles ---------- */
const styles = {
  container: {
    backgroundImage: `url(${loginbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  loginBox: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(12px)',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    zIndex: 2,
    color: 'white',
  },
  title: {
    fontSize: '22px',
    marginBottom: '25px',
    fontWeight: '600',
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  socialBtn: {
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '15px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '18px',
  },
  divider: {
    margin: '20px 0',
    textAlign: 'center',
    color: '#ddd',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    marginTop: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    width: '100%',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '35%',
    cursor: 'pointer',
    color: '#333',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginBottom: '15px',
  },
  loginButton: {
    backgroundColor: '#319795',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '10px',
    transition: 'all 0.3s ease',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#38b2ac',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default LoginPage;
