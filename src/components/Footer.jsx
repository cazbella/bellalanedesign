import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <p>© 2025 Bella Lane Design. All rights reserved.</p>
      <p>
        Follow us on{' '}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
          Instagram
        </a>
        .
      </p>
    </footer>
  );
}

const footerStyles = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '0.9rem',
};

const linkStyles = {
  color: '#ff6666',
  textDecoration: 'none',
};