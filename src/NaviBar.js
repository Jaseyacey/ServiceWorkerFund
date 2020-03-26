import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">S.I.W.F</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/AboutPage">About Page</Nav.Link>
      <Nav.Link href="/DonatePage">Donations</Nav.Link>
      <Nav.Link href="/PaymentPage">Application Page</Nav.Link>
      <Nav.Link href="/tandc">Terms and Conditions Page</Nav.Link>
      <Nav.Link href="/ContactMe">Contact Me</Nav.Link>
    </Nav>

  </Navbar>
);

export default NavBar;
