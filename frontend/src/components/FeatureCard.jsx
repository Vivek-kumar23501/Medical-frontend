import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const OurSpecifications = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(Array(6).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // ✅ Features array ab translation keys use karega
  const features = [
    { title: t("specs.vaccinationTitle"), emoji: "💉", detail: t("specs.vaccinationDetail"), bg: "/vaccination.jpg" },
    { title: t("specs.diseaseTitle"), emoji: "🦠", detail: t("specs.diseaseDetail"), bg: "/disease awarness.jpg" },
    { title: t("specs.nutritionTitle"), emoji: "🍎", detail: t("specs.nutritionDetail"), bg: "/nutrition.jpeg" },
    { title: t("specs.mentalTitle"), emoji: "🧠", detail: t("specs.mentalDetail"), bg: "/mental health.jpg" },
    { title: t("specs.fitnessTitle"), emoji: "💪", detail: t("specs.fitnessDetail"), bg: "/yogaa.jpeg" },
    { title: t("specs.emergencyTitle"), emoji: "🚑", detail: t("specs.emergencyDetail"), bg: "/emergency.jpeg" },
  ];

  return (
    <section className="specs-section py-5">
      <style>
        {`
          .specs-section {
            position: relative;
            background: rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }
          .specs-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/bg-health.jpg') center/cover no-repeat;
            opacity: 0.08;
            z-index: 0;
          }
          .specs-container {
            position: relative;
            z-index: 1;
          }
          .card-slide {
            position: relative;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            height: 220px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
          .card-slide::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.25);
            border-radius: 15px;
            z-index: 0;
          }
          .card-title {
            font-size: 1.3rem;
            font-weight: bold;
            text-align: center;
            padding: 30px 15px;
            position: relative;
            z-index: 1;
            color: #fff;
          }
          .emoji-bg {
            font-size: 3rem;
            opacity: 0.15;
            position: absolute;
            top: 10px;
            right: 15px;
          }
          .card-overlay {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(105, 201, 233, 0.9), rgba(0,114,153,0.95));
            color: #fff;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: left 0.4s ease-in-out;
            border-radius: 15px;
            z-index: 2;
          }
          .card-slide:hover {
            transform: translateY(-6px);
          }
          .card-slide:hover .card-overlay {
            left: 0;
          }
          .card-description {
            font-size: 0.9rem;
            line-height: 1.4;
            margin-bottom: 12px;
            max-height: 100px;
            overflow-y: auto;
          }
          .read-btn {
            background: #fff;
            color: #007299;
            border: none;
            padding: 6px 14px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: 0.3s;
          }
          .read-btn:hover {
            background: #e0f0f8;
          }
          @media (max-width: 767px) {
            .card-overlay {
              left: 0 !important;
              top: 100%;
              transition: top 0.4s ease-in-out;
            }
            .card-slide:hover .card-overlay {
              top: 0;
            }
          }
        `}
      </style>

      <Container className="specs-container">
        <h2 className="text-center mb-5">{t("specs.sectionTitle")}</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md="4" sm="6" className="mb-4" key={index}>
              <div
                className="card-slide"
                style={{ background: `url('${feature.bg}') center/cover no-repeat` }}
              >
                <div className="card-title">
                  {feature.title}
                  <span className="emoji-bg">{feature.emoji}</span>
                </div>
                <div className="card-overlay">
                  <h5>{feature.title}</h5>
                  <p className="card-description">
                    {expanded[index]
                      ? feature.detail
                      : feature.detail.substring(0, 80) + "..."}
                  </p>
                  <Button className="read-btn" onClick={() => toggleReadMore(index)}>
                    {expanded[index] ? t("common.readLess") : t("common.readMore")}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurSpecifications;
