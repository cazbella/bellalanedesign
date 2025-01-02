import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import FullLogo from '../assets/images/full_logo.png'; 


function Header() {
  return (
    <header className="position-relative header-container">
      {/* Background Image */}
      <div
        className="header-background position-relative"
        style={{
          backgroundImage: `url('/path-to-your-background-image.jpg')`, // Replace with actual path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px', // Adjust as needed
        }}
      >
        {/* Logo on Top */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <img
            src= {FullLogo}
            alt="Logo"
            className="header-logo img-fluid"
            style={{
              width: '80%',
              maxWidth: '600px', // Optional max width for larger screens
              opacity: 0.8,
            }}
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="py-3">
        <div className="container">
          <Navbar.Brand as={Link} to="/">
            Surface Pattern Design
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav className="dropdown">
                <Nav.Link
                  as={Link}
                  to="/designs"
                  className="dropdown-toggle"
                  id="designs-dropdown"
                  data-bs-toggle="dropdown"
                >
                  Designs
                </Nav.Link>
                <div className="dropdown-menu" aria-labelledby="designs-dropdown">
                  <Nav.Link as={Link} to="/designs/craft-hobby" className="dropdown-item">
                    Craft & Hobby
                  </Nav.Link>
                  <Nav.Link as={Link} to="/designs/patterns-prints" className="dropdown-item">
                    Patterns & Prints
                  </Nav.Link>
                </div>
              </Nav>
              <Nav.Link as={Link} to="#contact-1">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;