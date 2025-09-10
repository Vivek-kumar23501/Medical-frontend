// src/components/ChatbotUI.jsx
import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from "reactstrap";
import { Mic, Image, Paperclip, Send } from "lucide-react";

const ChatbotUI = () => {
  const [messages] = useState([
    { from: "bot", text: "Hello 👋, I am your Medical Assistant." },
    { from: "user", text: "Hi, I want to know about my symptoms." },
    { from: "bot", text: "Sure! Please describe your symptoms in detail." },
    { from: "user", text: "Ok, I feel fever and headache." },
    { from: "bot", text: "Noted! You should drink water and take rest." },
  ]);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Navbar */}
      <Navbar
        expand="md"
        className="shadow-sm"
        style={{ background: "linear-gradient(90deg, #000000, #1a1a1a)" }}
      >
        <NavbarBrand href="/" className="fw-bold text-white">
          MediChat
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#" className="text-white">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Row style={{ flex: 1, margin: 0 }}>
        {/* Sidebar */}
        <Col
          md="3"
          className="d-none d-md-block"
          style={{
            background: "linear-gradient(180deg, #1a1a1a, #333333)",
            borderRight: "1px solid #444",
            padding: "1rem",
            color: "#fff",
          }}
        >
          <Button color="dark" className="w-100 mb-3">
            + New Chat
          </Button>

          <Input
            type="search"
            placeholder="Search chat..."
            className="mb-4 bg-dark text-white border-0"
            style={{ borderRadius: "5px" }}
          />

          <h6 className="text-light">Library</h6>
          <ul className="list-unstyled small">
            <li className="mb-2">📚 Health Tips</li>
            <li className="mb-2">🥗 Nutrition Guides</li>
            <li className="mb-2">🧠 Mental Wellness</li>
          </ul>

          <h6 className="text-light mt-4">History</h6>
          <ul className="list-unstyled small">
            <li className="mb-2">🩺 Vaccination Query</li>
            <li className="mb-2">💪 Fitness Program</li>
            <li className="mb-2">🍎 Nutrition Advice</li>
          </ul>
        </Col>

        {/* Chat Window */}
        <Col
          md="9"
          xs="12"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0",
            background: "linear-gradient(180deg, #0d0d0d, #1a1a1a)",
            color: "#fff",
          }}
        >
          {/* Messages Section */}
          <Card
            className="border-0"
            style={{
              borderRadius: "0",
              height: "70vh",
              overflowY: "auto",
              background: "transparent",
            }}
          >
            <CardBody>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 p-2 rounded ${
                    msg.from === "user" ? "bg-gradient-user text-white" : "bg-gradient-bot text-white"
                  }`}
                  style={{
                    maxWidth: "70%",
                    marginLeft: msg.from === "user" ? "auto" : "0",
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Input + extra options */}
          <div
            className="p-2 border-top"
            style={{
              background: "linear-gradient(90deg, #111, #222)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Button color="dark" className="rounded-circle" style={{ padding: "0.5rem" }}>
              <Mic size={20} className="text-white" />
            </Button>

            <Button color="dark" className="rounded-circle" style={{ padding: "0.5rem" }}>
              <Image size={20} className="text-white" />
            </Button>

            <Button color="dark" className="rounded-circle" style={{ padding: "0.5rem" }}>
              <Paperclip size={20} className="text-white" />
            </Button>

            <Input
              type="text"
              placeholder="Type your message..."
              className="bg-dark text-white border-0"
              style={{ borderRadius: "20px" }}
            />

            <Button
              style={{
                background: "linear-gradient(90deg, #444, #000)",
                border: "none",
              }}
            >
              <Send size={18} className="text-white" />
            </Button>
          </div>
        </Col>
      </Row>

      {/* Custom message gradients */}
      <style>
        {`
          .bg-gradient-user {
            background: linear-gradient(90deg, #007299, #56E0E0);
          }
          .bg-gradient-bot {
            background: linear-gradient(90deg, #333, #555);
          }
        `}
      </style>
    </div>
  );
};

export default ChatbotUI;
