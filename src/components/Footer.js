import React from 'react'

const Footer = () => {

  return (
    <div>
    <footer style={footerStyle}>
        <p><strong>CitySathi</strong> — Report. Act. Clean.</p>
        <p>Created for a cleaner Ghaziabad</p>
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  )
}

const footerStyle = {
        backgroundColor: '#052525ff',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
    
    };

export default Footer;
