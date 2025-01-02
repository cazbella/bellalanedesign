import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'; // For additional styling if needed

const Navbar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Navbar.Brand href="/">
        <img
          src="/path-to-your-logo.png" // Replace with your logo path
          alt="Logo"
          style={{ width: '50px', height: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> {/* Align to the right */}
          <Nav.Link href="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="text-dark">
            About
          </Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown" className="text-dark">
            <NavDropdown.Item href="/service1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/service3">Service 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact" className="text-dark">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar;