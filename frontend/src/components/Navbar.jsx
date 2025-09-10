// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Button,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import "./Navbar.css"; // custom css

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="light"
      light
      expand="md"
      className="px-4 shadow-sm custom-navbar py-3"
    >
      {/* Brand */}
      <NavbarBrand href="/" className="fw-bold text-primary fs-4">
        HaiDoc
      </NavbarBrand>

      {/* Mobile toggler */}
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        {/* Centered Nav Links */}
        <Nav className="mx-auto" navbar>
          <NavItem className="mx-3">
            <RRNavLink
              to="/"
              className="nav-link"
              activeClassName="active fw-bold text-info"
              end
            >
              Home
            </RRNavLink>
          </NavItem>
          <NavItem className="mx-3">
            <RRNavLink
              to="/services"
              className="nav-link"
              activeClassName="active fw-bold text-info"
            >
              Services
            </RRNavLink>
          </NavItem>
          <NavItem className="mx-3">
            <RRNavLink
              to="/blog"
              className="nav-link"
              activeClassName="active fw-bold text-info"
            >
              Blog
            </RRNavLink>
          </NavItem>
          <NavItem className="mx-3">
            <RRNavLink
              to="/about"
              className="nav-link"
              activeClassName="active fw-bold text-info"
            >
              About Us
            </RRNavLink>
          </NavItem>
        </Nav>

        {/* Right side button with gradient */}
        <Button
          style={{
            background: "linear-gradient(90deg, #56E0E0, #007299)",
            border: "none",
          }}
          className="text-white rounded-pill px-4"
        >
          Register
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
