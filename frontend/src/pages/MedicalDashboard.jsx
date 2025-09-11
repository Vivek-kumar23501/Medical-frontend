// src/pages/MedicalDashboard.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import MedicalNavbar from "../components/MedicalNavbar";

const MedicalDashboard = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      category: "Self Care",
      title: "Daily Health Habits",
      author: "Avita Jackson",
      description:
        "Simple daily routines can help you maintain overall well-being and prevent common illnesses.",
      img: "/fit.jpg",
    },
    {
      id: 2,
      category: "Fitness",
      title: "Home Workouts for Everyone",
      author: "Dr. John Smith",
      description:
        "Simple exercises you can do at home to stay fit without going to the gym.",
      img: "/home workout.png",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newBlog, setNewBlog] = useState({
    title: "",
    category: "",
    author: "",
    description: "",
    img: "",
  });

  // Add Blog
  const handleAddBlog = (e) => {
    e.preventDefault();
    if (
      newBlog.title.trim() &&
      newBlog.category.trim() &&
      newBlog.author.trim() &&
      newBlog.description.trim() &&
      newBlog.img.trim()
    ) {
      setBlogs([
        ...blogs,
        { ...newBlog, id: blogs.length + 1 },
      ]);
      setNewBlog({
        title: "",
        category: "",
        author: "",
        description: "",
        img: "",
      });
    }
  };

  // Delete Blog
  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MedicalNavbar />

      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8fcff, #e6f7ff)",
          minHeight: "100vh",
        }}
      >
        <Container>
          {/* Header + Search */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Medical Dashboard</h2>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Manage and create health blogs easily.
            </p>
            <div style={{ maxWidth: "400px", margin: "20px auto 0" }}>
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-pill shadow-sm"
              />
            </div>
          </div>

          {/* Add Blog Form */}
          <Card className="p-4 mb-5 shadow-sm border-0">
            <h4 className="mb-3">Add New Blog</h4>
            <Form onSubmit={handleAddBlog}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      value={newBlog.title}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Category</Label>
                    <Input
                      type="text"
                      value={newBlog.category}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, category: e.target.value })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Author</Label>
                    <Input
                      type="text"
                      value={newBlog.author}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, author: e.target.value })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Image URL</Label>
                    <Input
                      type="text"
                      value={newBlog.img}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, img: e.target.value })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      rows="3"
                      value={newBlog.description}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, description: e.target.value })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" className="mt-2 rounded-pill">
                Add Blog
              </Button>
            </Form>
          </Card>

          {/* Blog List */}
          <Row className="g-4">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Col lg="4" md="6" sm="12" key={blog.id}>
                  <Card className="h-100 shadow-sm hover-effect border-0">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="img-fluid rounded-top"
                      style={{ maxHeight: "220px", objectFit: "cover" }}
                    />
                    <CardBody>
                      <span className="badge bg-info text-dark">{blog.category}</span>
                      <CardTitle tag="h5" className="mt-2">
                        {blog.title}
                      </CardTitle>
                      <p className="text-muted">— {blog.author}</p>
                      <CardText>
                        {blog.description.substring(0, 100)}...
                      </CardText>
                      <div className="d-flex justify-content-between">
                        <Button color="primary" size="sm">
                          Read More
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center text-danger">No blogs found...</p>
            )}
          </Row>
        </Container>

        {/* Custom CSS */}
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

export default MedicalDashboard;
