import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Logo from '../../assets/logo.jpeg';

export const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="header logo"
              src={Logo}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Pizza Mania
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}
