import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="mb-4">
      <div className="container">
        <Navbar.Brand as={Link} to="/dashboard">URL Shortener</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/create">Create URL</Link>
            <Link  to="/list">List URLs</Link>
            <Link  to="/login">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
