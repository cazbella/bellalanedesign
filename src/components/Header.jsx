import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure the CSS is correctly imported

function Header() {
  return (
    <div id="header" className="header-container">
      <div className="header-background">
        <div className="header-logo" style={{ opacity: 0.6 }}>
          <img 
            className="logo-image"
            data-src="//static.showit.co/1600/6DgNl2VNQFSdjYasPf454w/78449/verf_foto.png"
            src="//static.showit.co/1600/6DgNl2VNQFSdjYasPf454w/78449/verf_foto.png"
            alt="Logo" 
            width="1200" 
            height="1200" 
            style={{ width: '1185px', height: '494px', inset: '0px auto auto' }} 
          />
        </div>
      </div>
      <div id="header-view" className="header-view-active">
        <h1 className="header-title">Surface Pattern Design</h1>
        {/* Navigation Links */}
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item">
              <Link to="/designs" className="nav-link">Designs</Link>
              <ul className="dropdown-list">
                <li><Link to="/designs/craft-hobby" className="dropdown-link">Craft & Hobby</Link></li>
                <li><Link to="/designs/patterns-prints" className="dropdown-link">Patterns & Prints</Link></li>
              </ul>
            </li>
            <li><Link to="#contact-1" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;