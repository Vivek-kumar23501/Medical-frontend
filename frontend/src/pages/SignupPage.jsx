import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button, Alert } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomNavbar from "../components/MedicalNavbar";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Request OTP
  const handleRequestOtp = async () => {
    setError("");
    setSuccess("");

    if (!formData.email?.trim()) {
      setError("Please enter your email to receive OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email.trim() }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setOtpSent(true);
        setSuccess("OTP sent to your email. Please check your inbox.");
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  // Verify OTP & Signup
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password } = formData;

    if (!name?.trim() || !email?.trim() || !password?.trim() || !otp?.trim()) {
      setError("All fields and OTP are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
          otp: otp.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container fluid style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
        <Row>
          {/* Left Image */}
          <Col md="6" className="d-none d-md-block p-0">
            <div style={{ height: "100vh", position: "relative" }}>
              <img
                src="/signup.jpg"
                alt="Doctor"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Col>

          {/* Right Form */}
          <Col md="6" className="d-flex align-items-center justify-content-center">
            <div style={{ width: "80%", maxWidth: "400px", padding: "40px 0" }}>
              <h2 style={{ color: "#1a1a1a" }}>Create An Account</h2>
              <p style={{ color: "#555" }}>Discover a better way of spending with Uifry.</p>

              {error && <Alert color="danger">{error}</Alert>}
              {success && <Alert color="success">{success}</Alert>}

              <Form onSubmit={otpSent ? handleVerifyOtp : (e) => e.preventDefault()}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                    disabled={otpSent} // disable after OTP sent
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                    disabled={otpSent} // disable after OTP sent
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                    disabled={otpSent} // disable after OTP sent
                  />
                </FormGroup>

                {/* OTP Input */}
                {otpSent && (
                  <FormGroup>
                    <Input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                    />
                  </FormGroup>
                )}

                {/* Button */}
                {!otpSent ? (
                  <Button
                    color="primary"
                    className="w-100 mb-2"
                    type="button"
                    style={{ borderRadius: "8px", padding: "12px" }}
                    onClick={handleRequestOtp}
                  >
                    Send OTP
                  </Button>
                ) : (
                  <Button
                    color="success"
                    className="w-100 mb-2"
                    type="submit"
                    style={{ borderRadius: "8px", padding: "12px" }}
                  >
                    Verify OTP & Signup
                  </Button>
                )}
              </Form>

              <p className="text-center mt-2" style={{ color: "#555" }}>
                Have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
