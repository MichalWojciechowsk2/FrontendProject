import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBarMenu = ({ items }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">FrontendReactApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Labolatoria" id="basic-nav-dropdown">
              {items
                .filter((item) => item.inNavbar) // Tylko elementy z inNavbar: true
                .map((item) => (
                  <NavDropdown.Item as={Link} to={item.url} key={item.id}>
                    {item.label}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMenu;
