// src/components/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Input } from "reactstrap";
import CustomNavbar from "../components/MedicalNavbar";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/blogs"; // Backend URL

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on search
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6); // Show max 6 blogs

  return (
    <>
      <CustomNavbar />
      <section className="py-5" style={{ background: "#f8fcff" }}>
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Blogs</h2>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Explore useful tips, insights, and guides to help you maintain a healthy lifestyle.
            </p>
            <div style={{ maxWidth: "400px", margin: "20px auto 0" }}>
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Row className="g-4">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Col lg="4" md="6" sm="12" key={blog._id}>
                  <Card className="h-100 shadow-sm hover-effect">
                    <img
                      src={`http://localhost:5000${blog.image}`}
                      alt={blog.title}
                      className="img-fluid rounded-top"
                      style={{ maxHeight: "250px", objectFit: "cover" }}
                    />
                    <CardBody>
                      <CardTitle tag="h5" className="mt-2">
                        {blog.title}
                      </CardTitle>
                      <p className="text-muted">— {blog.name}</p>
                      <CardText>{blog.description.substring(0, 100)}...</CardText>
                      <Button color="primary" className="w-100">
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center text-danger">No blogs found...</p>
            )}
          </Row>
        </Container>

        <style>
          {`
            .hover-effect {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-effect:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            }
          `}
        </style>
      </section>
    </>
  );
};

export default BlogPage;
