// src/pages/AboutUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaSyringe, FaHeartbeat, FaUserMd, FaAward } from "react-icons/fa";
import CustomNavbar from "../components/MedicalNavbar";

const AboutUs = () => {
  const { t } = useTranslation(); // translation hook

  return (
    <>  
      <CustomNavbar/>
      <section className="py-5 bg-light">
        <Container>
          {/* Header */}
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold text-primary">{t("about_title")}</h2>
              <p className="text-muted">{t("about_desc")}</p>
            </Col>
          </Row>

          {/* Who We Are */}
          <Row className="align-items-center mb-5">
            <Col md="6">
              <img
                src="/doctoer tech.jpeg"
                alt="About Medical"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md="6">
              <h3 className="fw-bold">{t("who_we_are")}</h3>
              <p>{t("who_we_are_desc")}</p>
            </Col>
          </Row>

          {/* Key Highlights */}
          <Row className="text-center g-4">
            <Col md="3">
              <Card className="h-100 shadow-sm border-0">
                <CardBody>
                  <FaSyringe className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">{t("vaccination")}</h5>
                  <p className="text-muted">{t("vaccination_desc")}</p>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card className="h-100 shadow-sm border-0">
                <CardBody>
                  <FaHeartbeat className="text-danger fs-1 mb-3" />
                  <h5 className="fw-bold">{t("disease_awareness")}</h5>
                  <p className="text-muted">{t("disease_awareness_desc")}</p>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card className="h-100 shadow-sm border-0">
                <CardBody>
                  <FaUserMd className="text-success fs-1 mb-3" />
                  <h5 className="fw-bold">{t("faculty")}</h5>
                  <p className="text-muted">{t("faculty_desc")}</p>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card className="h-100 shadow-sm border-0">
                <CardBody>
                  <FaAward className="text-warning fs-1 mb-3" />
                  <h5 className="fw-bold">{t("awards")}</h5>
                  <p className="text-muted">{t("awards_desc")}</p>
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
