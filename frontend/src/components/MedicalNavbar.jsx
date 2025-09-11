import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const MedicalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <style>
        {`
          .custom-navbar {
            min-height: 80px;
          }
          .navbar-nav .nav-link {
            font-weight: 500;
            color: #333 !important;
            margin-right: 15px;
          }
          .navbar-nav .nav-link:hover {
            color: #007bff !important;
          }
          .navbar-brand img {
            height: 40px;
            margin-right: 10px;
          }
          .search-icon {
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>

      <Navbar expand="lg" light className="shadow-sm px-4 bg-white custom-navbar">
        {/* Logo */}
        <NavbarBrand tag={Link} to="/" className="fw-bold text-dark d-flex align-items-center">
          <img src="/react.svg" alt="Logo" />
          Medicate
        </NavbarBrand>

        {/* Mobile Toggle */}
        <NavbarToggler onClick={toggle} />

        {/* Menu Items */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">HOME</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">ABOUT US</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/services">SERVICES</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects">PROJECTS</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/blog">BLOG</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </NavItem>
          </Nav>

          {/* Right Side - Search + Button */}
          <div className="d-flex align-items-center">
            <span className="search-icon me-3">
              <i className="bi bi-search"></i>
            </span>
            <Link to ="/login"> <Button color="primary" className="rounded-pill px-3">
             Login
            </Button>  </Link>
            
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default MedicalNavbar;
