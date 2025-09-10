// src/components/BlogPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Input } from "reactstrap";

const blogData = [
  {
    id: 1,
    category: "Self Care",
    title: "Daily Health Habits",
    author: "Avita Jackson",
    description: "Simple daily routines can help you maintain overall well-being and prevent common illnesses.",
    img: "/fit.jpg", // from public folder
  },
  {
    id: 2,
    category: "Dental Health",
    title: "Care of Your Teeth",
    author: "Dr. Emily Brown",
    description: "Maintain proper oral hygiene to keep your teeth and gums healthy.",
    img: "/teeth.jpeg",
  },
  {
    id: 3,
    category: "Fitness",
    title: "Home Workouts for Everyone",
    author: "Dr. John Smith",
    description: "Simple exercises you can do at home to stay fit without going to the gym.",
    img: "/home workout.png",
  },
  {
    id: 4,
    category: "Mental Health",
    title: "Managing Stress and Anxiety",
    author: "Dr. Alan Doe",
    description: "Learn effective techniques to reduce stress and improve your mental health daily.",
    img: "/meditation.jpeg",
  },
  {
    id: 5,
    category: "Health Tips",
    title: "Importance of Sleep",
    author: "Avita Jackson",
    description: "Good sleep is essential for physical health, mental clarity, and overall well-being.",
    img: "/sleep.jpg",
  },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6); // Show max 6 blogs

  return (
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
              <Col lg="4" md="6" sm="12" key={blog.id}>
                <Card className="h-100 shadow-sm hover-effect">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="img-fluid rounded-top"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                  <CardBody>
                    <span className="badge bg-info text-dark">{blog.category}</span>
                    <CardTitle tag="h5" className="mt-2">
                      {blog.title}
                    </CardTitle>
                    <p className="text-muted">— {blog.author}</p>
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
  );
};

export default BlogPage;
