// src/components/Hero.jsx
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md="6" className="text-center text-md-start">
            <h1 className="fw-bold display-5 text-dark">
              We Are Ready to <span className="text-info">Help Your Health</span> Problems
            </h1>
            <p className="mt-3 text-muted">
              In times like today, your health is very important, especially since the number 
              of COVID-19 cases is increasing day by day, so we are ready to help you with your 
              health consultation.
            </p>
            <Button
              style={{
                height: "50px",
                background: "linear-gradient(90deg, #56E0E0, #007299)",
                border: "none",
              }}
              className="mt-3 text-white rounded-pill px-4"
            >
              Try Free Consultation
            </Button>

            {/* Stats */}
            <Row className="mt-4 text-center text-md-start">
              <Col xs="4">
                <h1 className="text-dark">200+</h1>
                <p>Active Doctor</p>
              </Col>
              <Col xs="4">
                <h1 className="text-dark">15K+</h1>
                <p>Active User</p>
              </Col>
              <Col xs="4">
                <h1 className="text-dark">50+</h1>
                <p>Active Pharmacy</p>
              </Col>
            </Row>
          </Col>

          {/* Right Image with background + person */}
          <Col md="6" className="text-center position-relative mt-4 mt-md-0">
            {/* Background shape */}
            <img
              src="/bg.png"   // ✅ from public folder
              alt="Background Shape"
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                maxHeight: "500px",
                width: "100%",
                maxWidth: "726px",
                zIndex: 1,
              }}
            />
            {/* Foreground doctor */}
            <img
              src="/doctor.png"   // ✅ from public folder
              alt="Doctor"
              className="img-fluid rounded-4 shadow position-relative"
              style={{
                maxHeight: "450px",
                width: "100%",
                maxWidth: "450px",
                zIndex: 2,
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
