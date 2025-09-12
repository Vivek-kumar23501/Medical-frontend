// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import CustomNavbar from "./MedicalNavbar";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { 
      src: "/medical-slider-1.avif", 
      caption: t("slider1Caption"), 
      text: t("slider1Text"),
      extraText: t("slider1ExtraText"),
      mobileBg: "linear-gradient(135deg, #d0f0fd 0%, #a0e5fc 100%)"
    },
    { 
      src: "/medical-slider-2.avif", 
      caption: t("slider2Caption"), 
      text: t("slider2Text"),
      extraText: t("slider2ExtraText"),
      mobileBg: "linear-gradient(135deg, #d9f7ee 0%, #a8e9d7 100%)"
    },
    { 
      src: "/medical-slider-3.avif", 
      caption: t("slider3Caption"), 
      text: t("slider3Text"),
      extraText: t("slider3ExtraText"),
      mobileBg: "linear-gradient(135deg, #f0f9ff 0%, #c0e8ff 100%)"
    },
  ];

  const next = () => { if (animating) return; setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1); };
  const previous = () => { if (animating) return; setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1); };
  const goToIndex = (newIndex) => { if (animating) return; setActiveIndex(newIndex); };

  useEffect(() => {
    const interval = setInterval(() => { next(); }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: isMobile ? item.mobileBg : `url(${item.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: isMobile ? "90vh" : "80vh",
          position: "relative",
          textAlign: "center",
          padding: isMobile ? "1rem" : "0",
        }}
      >
        {/* Mobile view floating card */}
        {isMobile && (
          <div style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: "25px 20px",
            width: "95%",
            maxWidth: "400px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            marginTop: "-30px",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}>
            <div>
              <span className="badge" style={{
                background: "linear-gradient(90deg, #a0e5fc, #d0f0fd)",
                color: "#333",
                fontWeight: "600",
                fontSize: "0.85rem",
                padding: "5px 12px",
              }}>{t("passion")}</span>

              <h2 className="fw-bold" style={{ fontSize: '1.8rem', margin: '15px 0', color: '#333' }}>
                {item.caption}
              </h2>

              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                {item.text} <br/><br/>
                {item.extraText}
              </p>
            </div>
          </div>
        )}

        {/* Desktop view */}
        {!isMobile && (
          <Container className="position-relative">
            <Row className="align-items-center">
              <Col md="6">
                <span  style={{
                  marginRight:"320px"
                }}  className="badge bg-primary mb-2">{t("passion")}</span>
                <h1 className="fw-bold display-5" style={{ backgroundColor: "rgba(255,255,255,0.85)", padding: "10px" }}>{item.caption}</h1>
                <p className="text-dark" style={{ backgroundColor: "rgba(255,255,255,0.85)", padding: "10px" }}>{item.text}</p>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </CarouselItem>
  ));

  return (
    <>
      <CustomNavbar />

      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      {/* Info Cards */}
      <Container fluid className="info-cards" style={{ marginTop: "-60px" }}>
        <Row className="justify-content-center">
          <Col md="3" sm="6" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#007bff" }}>
              <CardBody className="text-center">
                <h5>{t("emergencyCases")}</h5>
                <p>{t("emergencyText")}</p>
               
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#003f7f" }}>
              <CardBody className="text-center">
                <h5>{t("doctorsTimetable")}</h5>
                <p>{t("doctorsText")}</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#3c4247ff" }}>
              <CardBody className="text-center">
                <h5>{t("doctorsTimetable")}</h5>
                <p>{t("doctorsText")}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
