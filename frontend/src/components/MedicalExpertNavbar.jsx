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
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExpertNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    // Clear any authentication tokens or localStorage if needed
    localStorage.removeItem("authToken"); 
    navigate("/"); // redirect to home
  };

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
          Medicate Expert
        </NavbarBrand>

        {/* Mobile Toggle */}
        <NavbarToggler onClick={toggle} />

        {/* Menu Items */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/medical-dashboard">{t("Dashboard")}</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/patients">{t("Patients")}</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/appointments">{t("Appointments")}</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/reports">{t("Reports")}</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/chatbot">{t("Chatbot")}</Link>
            </NavItem>
          </Nav>

          {/* Right Side - Search + Logout + Language */}
          <div className="d-flex align-items-center">
            <span className="search-icon me-3">
              <i className="bi bi-search"></i>
            </span>

            {/* Logout Button */}
            <Button color="danger" className="rounded-pill px-3" onClick={handleLogout}>
              {t("logout")}
            </Button>

            {/* Language Switcher */}
            <div className="ms-3">
              <Button size="sm" outline onClick={() => changeLanguage("en")}>EN</Button>
              <Button size="sm" outline onClick={() => changeLanguage("hi")} className="ms-2">हिं</Button>
              <Button size="sm" outline onClick={() => changeLanguage("ur")} className="ms-2">اردو</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default ExpertNavbar;
