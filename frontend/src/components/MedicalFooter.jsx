// src/components/MedicalFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const MedicalFooter = () => {
  return (
    <footer className="bg-light text-dark py-5 mt-5 border-top">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand & Description */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold text-primary">HaiDoc</h5>
            <p className="small">
              Your trusted medical partner. <br />
              We care for you and your family.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Our Services</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/appointments" className="text-dark text-decoration-none">Book Appointment</Link></li>
              <li><Link to="/departments" className="text-dark text-decoration-none">Departments</Link></li>
              <li><Link to="/doctors" className="text-dark text-decoration-none">Find a Doctor</Link></li>
              <li><Link to="/emergency" className="text-dark text-decoration-none">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Patient Resources</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/faq" className="text-dark text-decoration-none">FAQs</Link></li>
              <li><Link to="/health-tips" className="text-dark text-decoration-none">Health Tips</Link></li>
              <li><Link to="/insurance" className="text-dark text-decoration-none">Insurance Info</Link></li>
              <li><Link to="/support" className="text-dark text-decoration-none">Support</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">About Us</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about" className="text-dark text-decoration-none">Our Story</Link></li>
              <li><Link to="/team" className="text-dark text-decoration-none">Our Team</Link></li>
              <li><Link to="/careers" className="text-dark text-decoration-none">Careers</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="row">
          <div className="col text-center mt-4">
            <p className="mb-0 text-muted small">
              © {new Date().getFullYear()} HaiDoc. All rights reserved.
              <br className="d-sm-none" /> Made with ❤️ for healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MedicalFooter;
