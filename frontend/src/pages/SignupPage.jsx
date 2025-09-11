// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
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
    // Handle form submission (API call)
  };

  return (
    <Container fluid style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <Row>
        {/* Left Image Section */}
      {/* Left Image Section */}
<Col md="6" className="d-none d-md-block p-0">
  <div style={{ height: "100vh", position: "relative" }}>
    <img
      src="/signup.jpg"
      alt="Doctor"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",   // 🔹 Shows full image without cropping
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "black",
        backgroundColor: "white",
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
            <h2 style={{ color: "#1a1a1a" }}>Create An Account</h2>
            <p style={{ color: "#555" }}>Discover a better way of spending with Uifry.</p>

            {/* Google Sign-up Button */}
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                border: "1px solid #000",   // ✅ Black border
    height: "45px",
    borderRadius: "6px",
              }}
              className="w-100"
       
            >
              <img
                src="google.png"
                alt="Google"
                style={{ width: "20px", marginRight: "10px", filter: "invert(1)" }}
              />
              Sign up with Google
            </Button>

            <p className="text-center" style={{ color: "#888", marginBottom: "20px" }}>Or</p>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                />
              </FormGroup>
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
              <FormGroup check className="mb-3">
                <Label check style={{ color: "#555" }}>
                  <Input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />{" "}
                  I agree with Terms and Privacy
                </Label>
              </FormGroup>
              <Button
                color="primary"
                className="w-100 mb-2"
                type="submit"
                style={{ borderRadius: "8px", padding: "12px" }}
              >
                Sign up
              </Button>
            </Form>

            <p className="text-center mt-2" style={{ color: "#555" }}>
              Have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
