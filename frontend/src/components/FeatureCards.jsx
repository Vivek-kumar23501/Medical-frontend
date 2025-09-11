import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const FeatureCards = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md="3">
          <Card className="text-center shadow-sm border-0 bg-primary text-white">
            <CardBody>
              <h5>Disease Prevention</h5>
              <p>Awareness and guidelines</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="3">
          <Card className="text-center shadow-sm border-0 bg-info text-white">
            <CardBody>
              <h5>Vaccination</h5>
              <p>Schedule & reminders</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="3">
          <Card className="text-center shadow-sm border-0 bg-success text-white">
            <CardBody>
              <h5>Emergency Cases</h5>
              <p>24/7 hotline support</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="3">
          <Card className="text-center shadow-sm border-0 bg-warning text-dark">
            <CardBody>
              <h5>Chatbot</h5>
              <p>Awareness & Q/A</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureCards;
