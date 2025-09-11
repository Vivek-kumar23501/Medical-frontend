// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API call for login
  };

  return (
    <Container fluid style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <Row>
        {/* Left Image Section */}
        <Col md="6" className="d-none d-md-block p-0">
          <div style={{ height: "100vh", position: "relative" }}>
            <img
              src="/doctor.png"
              alt="Doctor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // shows full image without cropping
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.35)",
                padding: "12px",
                borderRadius: "8px",
                maxWidth: "280px",
              }}
            >
              
            </div>
          </div>
        </Col>

        {/* Right Form Section */}
        <Col md="6" className="d-flex align-items-center justify-content-center">
          <div style={{ width: "80%", maxWidth: "400px", padding: "40px 0" }}>
            <h2 style={{ color: "#1a1a1a" }}>Welcome Back</h2>
            <p style={{ color: "#555" }}>Login to continue your journey.</p>

            {/* Google Login Button */}
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                border: "none",
                border: "1px solid #000",   // ✅ Black border
    height: "45px",
    borderRadius: "6px",
              }}
              className="w-100"
              
            >
              <img
                src="/google.png"
                alt="Google"
                style={{ width: "20px", marginRight: "10px", filter: "invert(1)" }}
              />
              Sign in with Google
            </Button>

            <p className="text-center" style={{ color: "#888", marginBottom: "20px" }}>Or</p>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                />
              </FormGroup>
              <FormGroup check className="mb-3 d-flex justify-content-between align-items-center">
                <Label check style={{ color: "#555" }}>
                  <Input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />{" "}
                  Remember Me
                </Label>
                <Link to="/forgot-password" style={{ fontSize: "14px", color: "#007bff" }}>
                  Forgot Password?
                </Link>
              </FormGroup>
              <Button
                color="primary"
                className="w-100 mb-2"
                type="submit"
                style={{ borderRadius: "8px", padding: "12px" }}
              >
                Login
              </Button>
            </Form>

            <p className="text-center mt-2" style={{ color: "#555" }}>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
