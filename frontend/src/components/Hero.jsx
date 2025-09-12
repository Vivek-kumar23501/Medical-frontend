// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import CustomNavbar from "./MedicalNavbar";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useTranslation } from "react-i18next"; // ✅ import

const HeroSection = () => {
  const { t } = useTranslation(); // ✅ hook
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: "/medical-slider-1.avif",
      caption: t("slider1Caption"),
      text: t("slider1Text"),
    },
    {
      src: "/medical-slider-2.avif",
      caption: t("slider2Caption"),
      text: t("slider2Text"),
    },
    {
      src: "/medical-slider-3.avif",
      caption: t("slider3Caption"),
      text: t("slider3Text"),
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          className="d-flex align-items-center"
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            position: "relative",
            color: "#000",
            fontWeight: "500",
          }}
        >
          <Container>
            <Row>
              <Col md="6">
                <span className="badge bg-primary mb-2">{t("passion")}</span>
                <h1 className="fw-bold display-5">{item.caption}</h1>
                <p className="text-muted">{item.text}</p>
                <Button color="primary" className="rounded-pill">
                  {t("readMore")}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <CustomNavbar />

      {/* Hero Carousel Section */}
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      {/* Info Cards Section */}
      <Container fluid className="info-cards" style={{ marginTop: "-60px" }}>
        <Row className="justify-content-center">
          <Col md="3" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#007bff" }}>
              <CardBody className="text-center">
                <h5>{t("emergencyCases")}</h5>
                <p>{t("emergencyText")}</p>
                <h6 className="fw-bold">
                  <i className="bi bi-telephone me-2"></i>987 654 321
                </h6>
              </CardBody>
            </Card>
          </Col>

          <Col md="3" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#003f7f" }}>
              <CardBody className="text-center">
                <h5>{t("doctorsTimetable")}</h5>
                <p>{t("doctorsText")}</p>
                <Button color="light" size="sm" className="rounded-pill">
                  {t("timetable")}
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col md="3" className="mb-3">
            <Card className="shadow text-white" style={{ backgroundColor: "#3c4247ff" }}>
              <CardBody className="text-center">
                <h5>{t("doctorsTimetable")}</h5>
                <p>{t("doctorsText")}</p>
                <Button color="light" size="sm" className="rounded-pill">
                  {t("timetable")}
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
