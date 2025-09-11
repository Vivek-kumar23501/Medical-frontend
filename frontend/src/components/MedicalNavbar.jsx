import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom"; // ✅ Router Link use

const MedicalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Custom CSS inside same file */}
      <style>
        {`
          .custom-navbar {
            min-height: 80px; /* ✅ Navbar height increased */
          }
          .navbar-nav .nav-link {
            font-weight: 500;
            color: #333 !important;
            margin-right: 15px;
          }
          .navbar-nav .nav-link:hover {
            color: #007bff !important;
          }
          .navbar .dropdown-menu {
            border-radius: 8px;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .navbar-brand img {
            height: 40px; /* logo thoda bada */
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>HOME</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/">Home 1</DropdownItem>
                <DropdownItem tag={Link} to="/home2">Home 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>PAGES</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/about">About Us</DropdownItem>
                <DropdownItem tag={Link} to="/doctors">Doctors</DropdownItem>
                <DropdownItem tag={Link} to="/faq">FAQ</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>SERVICES</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/emergency">Emergency</DropdownItem>
                <DropdownItem tag={Link} to="/vaccination">Vaccination</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>PROJECTS</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/projects/project1">Project 1</DropdownItem>
                <DropdownItem tag={Link} to="/projects/project2">Project 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>BLOG</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/blog">Latest Posts</DropdownItem>
                <DropdownItem tag={Link} to="/health-tips">Health Tips</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </NavItem>
          </Nav>

          {/* Right Side - Search + Button */}
          <div className="d-flex align-items-center">
            <span className="search-icon me-3">
              <i className="bi bi-search"></i>
            </span>
            <Button color="primary" className="rounded-pill px-3">
              MAKE APPOINTMENT +
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default MedicalNavbar;
