// src/pages/MedicalDashboard.jsx
import React, { useState, useEffect } from "react";
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
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/blogs"; // Backend URL

const MedicalDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newBlog, setNewBlog] = useState({
    name: "",
    title: "",
    description: "",
    img: null,
    imgPreview: "",
  });

  // Fetch all blogs from backend
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Image preview handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewBlog({
        ...newBlog,
        img: file,
        imgPreview: URL.createObjectURL(file),
      });
    }
  };

  // Add blog (POST)
  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!newBlog.name || !newBlog.title || !newBlog.description || !newBlog.img) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newBlog.name);
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("image", newBlog.img); // must match multer field

    try {
      await axios.post(BASE_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setNewBlog({ name: "", title: "", description: "", img: null, imgPreview: "" });
      fetchBlogs(); // refresh list
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  // Filtered blogs based on search
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MedicalNavbar />

      <section
        className="py-5"
        style={{ background: "linear-gradient(135deg, #f8fcff, #e6f7ff)", minHeight: "100vh" }}
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
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={newBlog.name}
                      onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Upload Image</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                    {newBlog.imgPreview && (
                      <img
                        src={newBlog.imgPreview}
                        alt="Preview"
                        style={{
                          width: "150px",
                          marginTop: "10px",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      rows="3"
                      value={newBlog.description}
                      onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
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
                <Col lg="4" md="6" sm="12" key={blog._id}>
                  <Card className="h-100 shadow-sm hover-effect border-0">
                    <img
                      src={`http://localhost:5000${blog.image}`}
                      alt={blog.title}
                      className="img-fluid rounded-top"
                      style={{ maxHeight: "220px", objectFit: "cover" }}
                    />
                    <CardBody>
                      <CardTitle tag="h5" className="mt-2">
                        {blog.title}
                      </CardTitle>
                      <p className="text-muted">— {blog.name}</p>
                      <CardText>{blog.description.substring(0, 100)}...</CardText>
                      <div className="d-flex justify-content-between">
                        <Button color="primary" size="sm">
                          Read More
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => handleDelete(blog._id)}
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

        {/* Hover Effect CSS */}
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
