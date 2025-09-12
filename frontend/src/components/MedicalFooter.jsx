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
import { useTranslation } from "react-i18next";

const MedicalFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <Container>
        <Row>
          {/* Left Side - Logo & Socials */}
          <Col md="3" className="mb-4">
            <h4 className="text-primary fw-bold">HaiDoc</h4>
            <p>
              {t("footer.tagline1")} <br /> {t("footer.tagline2")}
            </p>
            <div className="d-flex gap-3 mt-3">
              <Link to="/facebook" className="text-primary fs-5">
                <FaFacebook />
              </Link>
              <Link to="/twitter" className="text-primary fs-5">
                <FaTwitter />
              </Link>
              <Link to="/instagram" className="text-primary fs-5">
                <FaInstagram />
              </Link>
              <Link to="/linkedin" className="text-primary fs-5">
                <FaLinkedin />
              </Link>
            </div>
          </Col>

          {/* Our Services */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">{t("footer.servicesTitle")}</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/book" className="text-dark text-decoration-none">
                  {t("footer.bookAppointment")}
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.departments")}
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-dark text-decoration-none">
                  {t("footer.findDoctor")}
                </Link>
              </li>
              <li>
                <Link
                  to="/emergency"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.emergencyCare")}
                </Link>
              </li>
            </ul>
          </Col>

          {/* Patient Resources */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">{t("footer.resourcesTitle")}</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/faqs" className="text-dark text-decoration-none">
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/health-tips"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.healthTips")}
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.insuranceInfo")}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-dark text-decoration-none">
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </Col>

          {/* About Us */}
          <Col md="3" className="mb-4">
            <h6 className="fw-bold mb-3">{t("footer.aboutTitle")}</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/our-story"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.ourStory")}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-dark text-decoration-none"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr />
        <div className="text-center text-muted mt-3">
          © 2025 HaiDoc. {t("footer.rights")}{" "}
          <FaHeart className="text-danger" /> {t("footer.forHealthcare")}
        </div>
      </Container>
    </footer>
  );
};

export default MedicalFooter;
