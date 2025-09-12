// src/components/OurMission.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurMission = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", alignItems: "center", background: "#f8fcff" }}>
      <Container style={{ width: "100%", marginTop: "40px" }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card
              style={{
                textAlign: "center",
                padding: "3rem",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <CardBody>
                {/* Title */}
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                  }}
                >
                  {t("missionTitle")}
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                  }}
                >
                  {t("missionText")}
                </p>

                {/* Link Button */}
                <Link to="/chatbot">
                  <Button
                    style={{
                      background: "linear-gradient(90deg, #56E0E0, #007299)",
                      border: "none",
                      color: "#fff",
                      padding: "0.75rem 2rem",
                      borderRadius: "50px",
                      fontSize: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0, 115, 153, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(0, 115, 153, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 115, 153, 0.3)";
                    }}
                  >
                    {t("getStarted")}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurMission;
