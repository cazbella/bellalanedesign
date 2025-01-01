import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>404</h1>
      <p style={textStyles}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={linkStyles}>
        Go Back to Home
      </Link>
    </div>
  );
}

