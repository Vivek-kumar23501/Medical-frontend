// src/components/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaHeartbeat, FaHandsHelping, FaLightbulb, FaAccessibleIcon, FaLaptopMedical, FaShieldAlt, FaChartLine } from "react-icons/fa";
import doctorImage from "../assets/doctoer tech.jpeg";

const AboutUs = () => {
  return (
    <section style={{ background: "#f8fcff", padding: "60px 0" }}>
      <Container>
        {/* Intro */}
        <div className="text-center mb-5">
          {/* <h2 className="fw-bold text-primary">About Us</h2> */}
          {/* <p className="text-muted fs-5" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
            Our platform is a smart healthcare software designed to spread awareness, 
            provide disease insights, share wellness tips, and support a healthy lifestyle. 
            We believe technology can make healthcare simpler, accessible, and more effective.
          </p> */}
        </div>

        {/* Mission & Vision */}
        <Row className="align-items-center mb-5">
          <Col md="6" sm="12" className="mb-4 mb-md-0">
            <img
              src={doctorImage}
              alt="Healthcare Software"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md="6" sm="12">
            <Card className="shadow-sm border-0 p-5 h-100">
              <h4 className="fw-bold text-primary">Our Mission</h4>
              <p className="text-muted mt-3">
                To provide people with an innovative software solution that helps them track health, 
                understand medical conditions, and adopt healthier habits with ease.
              </p>

              <h4 className="fw-bold text-primary mt-4">Our Vision</h4>
              <p className="text-muted mt-3">
                To create a future where everyone has access to personalized, reliable, and 
                technology-driven healthcare support — anytime, anywhere.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Our Core Values */}
        <div className="text-center mb-5">
          <h3 className="fw-bold text-primary">Our Core Values</h3>
          <p className="text-muted fs-5">The principles that drive our software and services</p>
        </div>
        <Row className="g-4">
          {[
            { icon: <FaHeartbeat size={40} className="text-danger mb-3" />, title: "Trust", text: "Authentic medical knowledge you can rely on." },
            { icon: <FaHandsHelping size={40} className="text-success mb-3" />, title: "Care", text: "Built to improve everyday health and wellness." },
            { icon: <FaLightbulb size={40} className="text-warning mb-3" />, title: "Innovation", text: "Smart tools that make healthcare engaging and easy." },
            { icon: <FaAccessibleIcon size={40} className="text-primary mb-3" />, title: "Accessibility", text: "Health resources available to everyone, everywhere." }
          ].map((value, index) => (
            <Col md="3" sm="6" xs="12" key={index}>
              <Card className="h-100 shadow-sm border-0 text-center p-4 hover-effect">
                {value.icon}
                <CardBody>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-muted">{value.text}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* What Our Software Offers */}
        <div className="text-center my-5">
          <h3 className="fw-bold text-primary">What Our Software Offers</h3>
          <p className="text-muted fs-5">
            Powerful features that make healthcare smarter and more convenient
          </p>
        </div>
        <Row className="g-4">
          {[
            { icon: <FaLaptopMedical size={40} className="text-info mb-3" />, title: "Disease Awareness", text: "Get reliable information about common diseases and how to prevent them." },
            { icon: <FaShieldAlt size={40} className="text-primary mb-3" />, title: "Health & Safety", text: "Stay updated with vaccination info, nutrition tips, and safety guidelines." },
            { icon: <FaChartLine size={40} className="text-success mb-3" />, title: "Wellness Programs", text: "Access fitness routines, mental health support, and lifestyle plans." }
          ].map((value, index) => (
            <Col md="4" sm="6" xs="12" key={index}>
              <Card className="h-100 shadow-sm border-0 text-center p-4 hover-effect">
                {value.icon}
                <CardBody>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-muted">{value.text}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Extra CSS for hover effect */}
      <style>
        {`
          .hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-effect:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
