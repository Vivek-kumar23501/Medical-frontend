import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomNavbar from "../components/MedicalNavbar";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email.trim(),
        password: formData.password.trim(),
      });

      if (res.data.success) {
        // Backend se user data
        const userData = res.data.user; // { name, email, role, _id }

        // Save in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(userData));

        // Redirect based on role
        if (userData.role === "medical_expert") {
          navigate("/medical-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        setErrorMsg(res.data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container fluid style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
        <Row>
          {/* Left Image Section */}
          <Col md="6" className="d-none d-md-block p-0">
            <div style={{ height: "100vh", position: "relative" }}>
              <img
                src="/doctor.png"
                alt="Doctor"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Col>

          {/* Right Form Section */}
          <Col md="6" className="d-flex align-items-center justify-content-center">
            <div style={{ width: "80%", maxWidth: "400px", padding: "40px 0" }}>
              <h2 style={{ color: "#1a1a1a" }}>Welcome Back</h2>
              <p style={{ color: "#555" }}>Login to continue your journey.</p>

              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderRadius: "8px", borderColor: "#ccc", padding: "12px" }}
                    required
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
                    required
                  />
                </FormGroup>

                <Button
                  color="primary"
                  className="w-100 mb-2"
                  type="submit"
                  style={{ borderRadius: "8px", padding: "12px" }}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Form>

              <p className="text-center mt-2" style={{ color: "#555" }}>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
