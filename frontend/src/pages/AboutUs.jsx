// src/pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaSyringe, FaHeartbeat, FaUserMd, FaAward } from "react-icons/fa";
import CustomNavbar from "../components/MedicalNavbar";

const AboutUs = () => {
  return (
    <>  
    <CustomNavbar/>
    <section className="py-5 bg-light">
      <Container>
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold text-primary">About Us</h2>
            <p className="text-muted">
              At <span className="fw-bold">HaiDoc</span>, we are dedicated to 
              improving lives through healthcare, awareness, and innovation.
            </p>
          </Col>
        </Row>

        {/* Who We Are */}
        <Row className="align-items-center mb-5">
          <Col md="6">
            <img
              src="/doctoer tech.jpeg" // 👉 put an image inside public folder
              alt="About Medical"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md="6">
            <h3 className="fw-bold">Who We Are</h3>
            <p>
              HaiDoc is your trusted healthcare partner. From prevention to 
              treatment, our mission is to deliver reliable medical services, 
              spread awareness, and support families in every step of their 
              healthcare journey.
            </p>
          </Col>
        </Row>

        {/* Key Highlights */}
        <Row className="text-center g-4">
          <Col md="3">
            <Card className="h-100 shadow-sm border-0">
              <CardBody>
                <FaSyringe className="text-primary fs-1 mb-3" />
                <h5 className="fw-bold">Vaccination</h5>
                <p className="text-muted">
                  We organize vaccination drives and awareness programs to 
                  safeguard communities against preventable diseases.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card className="h-100 shadow-sm border-0">
              <CardBody>
                <FaHeartbeat className="text-danger fs-1 mb-3" />
                <h5 className="fw-bold">Disease Awareness</h5>
                <p className="text-muted">
                  Educating people about health risks and guiding them to live 
                  healthier, safer lives.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card className="h-100 shadow-sm border-0">
              <CardBody>
                <FaUserMd className="text-success fs-1 mb-3" />
                <h5 className="fw-bold">Our Faculty</h5>
                <p className="text-muted">
                  Experienced doctors, nurses, and medical staff committed to 
                  providing world-class healthcare services.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card className="h-100 shadow-sm border-0">
              <CardBody>
                <FaAward className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold">Awards</h5>
                <p className="text-muted">
                  Recognized for excellence in healthcare innovation and 
                  community service worldwide.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default AboutUs;
