// src/components/MedicalFooter.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const MedicalFooter = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <Container>
        <Row>
          {/* Left Side - Logo & Socials */}
          <Col md="3" className="mb-4">
            <h4 className="text-primary fw-bold">HaiDoc</h4>
            <p>Your trusted medical partner. <br /> We care for you and your family.</p>
            <div className="d-flex gap-3 mt-3">
              <Link to="/facebook" className="text-primary fs-5"><FaFacebook /></Link>
              <Link to="/twitter" className="text-primary fs-5"><FaTwitter /></Link>
              <Link to="/instagram" className="text-primary fs-5"><FaInstagram /></Link>
              <Link to="/linkedin" className="text-primary fs-5"><FaLinkedin /></Link>
            </div>
          </Col>

          {/* Our Services */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">Our Services</h6>
            <ul className="list-unstyled">
              <li><Link to="/book" className="text-dark text-decoration-none">Book Appointment</Link></li>
              <li><Link to="/departments" className="text-dark text-decoration-none">Departments</Link></li>
              <li><Link to="/doctors" className="text-dark text-decoration-none">Find a Doctor</Link></li>
              <li><Link to="/emergency" className="text-dark text-decoration-none">Emergency Care</Link></li>
            </ul>
          </Col>

          {/* Patient Resources */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">Patient Resources</h6>
            <ul className="list-unstyled">
              <li><Link to="/faqs" className="text-dark text-decoration-none">FAQs</Link></li>
              <li><Link to="/health-tips" className="text-dark text-decoration-none">Health Tips</Link></li>
              <li><Link to="/insurance" className="text-dark text-decoration-none">Insurance Info</Link></li>
              <li><Link to="/support" className="text-dark text-decoration-none">Support</Link></li>
            </ul>
          </Col>

          {/* About Us */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">About Us</h6>
            <ul className="list-unstyled">
              <li><Link to="/our-story" className="text-dark text-decoration-none">Our Story</Link></li>
              <li><Link to="/our-team" className="text-dark text-decoration-none">Our Team</Link></li>
              <li><Link to="/careers" className="text-dark text-decoration-none">Careers</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
        </Row>

        <hr />
        <div className="text-center text-muted mt-3">
          © 2025 HaiDoc. All rights reserved. Made with{" "}
          <FaHeart className="text-danger" /> for healthcare
        </div>
      </Container>
    </footer>
  );
};

export default MedicalFooter;
