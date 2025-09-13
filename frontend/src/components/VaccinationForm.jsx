import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import "./VaccinationFormPage.css"; // custom css for layout
import CustomNavbar from "./MedicalNavbar";

const VaccinationFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    email: "",
    mobile: "",
    medicalIssue: "",
    bloodGroup: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Vaccination Registration Submitted Successfully!");
  };

  return (
    <><CustomNavbar />
    <div className="vaccination-page">
      {/* Left Image Section */}
      <div className="vaccination-left"></div>

      {/* Right Form Section */}
      <div className="vaccination-right">
        <Card className="form-card shadow-lg">
          <CardBody>
            <h2 className="text-center mb-4">Vaccination Registration</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
              </FormGroup>

          

              

              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
              </FormGroup>

              <FormGroup>
                <Label for="mobile">Mobile Number</Label>
                <Input type="tel" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} required />
              </FormGroup>

    <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} required />
              </FormGroup>

              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required />
              </FormGroup>
              

              <FormGroup>
                <Label for="medicalIssue">Medical Issue</Label>
                <Input type="text" name="medicalIssue" id="medicalIssue" value={formData.medicalIssue} onChange={handleChange} />
              </FormGroup>

              <FormGroup>
                <Label for="bloodGroup">Blood Group</Label>
                <Input type="select" name="bloodGroup" id="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Gender</Label>
                <div>
                  <FormGroup check inline>
                    <Input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                    <Label check>Male</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                    <Label check>Female</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} />
                    <Label check>Other</Label>
                  </FormGroup>
                </div>
              </FormGroup>

              <Button color="primary" block type="submit">
                Register
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
    </>
  );
};

export default VaccinationFormPage;
