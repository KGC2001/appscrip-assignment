import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Your Store</p>
      <p>&copy; 2024 My Store. All rights reserved.</p>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
