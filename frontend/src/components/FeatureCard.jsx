// src/components/OurSpecifications.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

const features = [
  {
    title: "Vaccination",
    emoji: "💉",
    detail: "Stay updated with vaccination schedules and reminders. Our platform helps you keep track of upcoming vaccinations, provides alerts, and ensures you never miss an important dose."
  },
  {
    title: "Disease Awareness",
    emoji: "🦠",
    detail: "Get awareness tips and precautionary measures for diseases. We provide detailed insights, prevention guides, and awareness campaigns to protect your health."
  },
  {
    title: "Nutrition Tips",
    emoji: "🍎",
    detail: "Daily nutrition and diet tips for a healthy lifestyle. Explore balanced diet plans, food suggestions, and easy tips for maintaining overall wellness."
  },
  {
    title: "Mental Health",
    emoji: "🧠",
    detail: "Access resources and programs for mental well-being. Find meditation guides, stress management resources, and mental fitness exercises."
  },
  {
    title: "Fitness Program",
    emoji: "💪",
    detail: "Personalized fitness routines and workout guidance. From beginner to advanced, our platform helps you maintain fitness with easy-to-follow programs."
  }
];

const OurSpecifications = () => {
  const [expanded, setExpanded] = useState(Array(features.length).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="py-5 bg-light">
      <style>
        {`
          .flip-card {
            perspective: 1000px;
            height: 240px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.8s;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            backface-visibility: hidden;
            padding: 20px;
            text-align: center;
          }

          .flip-card-front {
            background: #ffffff;
            color: #333;
            font-size: 1.2rem;
            font-weight: bold;
          }

          .emoji-bg {
            font-size: 3rem;
            opacity: 0.15;
            position: absolute;
            top: 10px;
            right: 15px;
          }

          .flip-card-back {
            background: #007299;
            color: #fff;
            transform: rotateY(180deg);
          }

          .description {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .read-btn {
            margin-top: 10px;
            background: #fff;
            color: #007299;
            border: none;
            padding: 5px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: 0.3s;
          }

          .read-btn:hover {
            background: #e0f0f8;
          }
        `}
      </style>

      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md="4" sm="6" className="mb-4" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <span className="emoji-bg">{feature.emoji}</span>
                    <h4>{feature.title}</h4>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back">
                    <h5>{feature.title}</h5>
                    <p className="description">
                      {expanded[index]
                        ? feature.detail
                        : feature.detail.substring(0, 60) + "..."}
                    </p>
                    <Button
                      className="read-btn"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
                    </Button>
                  </div>
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
