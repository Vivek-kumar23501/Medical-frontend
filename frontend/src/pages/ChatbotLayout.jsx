import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import { Mic, Image, Paperclip, Send, Menu } from "lucide-react";

const ChatbotUI = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋, I am your Medical Assistant." },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null); // store uploaded file
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const chatHeight = "90vh";

  // Handle send
  const handleSend = async () => {
    if (!input.trim() && !file) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input || (file ? `📎 Sent a file: ${file.name}` : "") },
    ]);

    try {
      // Create form data for API
      const formData = new FormData();
      if (input) formData.append("query", input);
      if (file) formData.append("file", file);

      // API call (replace this with real govt medical API)
      const response = await fetch(`https://api.govmedical.in/search`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Create bot reply (adjust to real API response)
      const botReply = data?.disease
        ? `🩺 Disease: ${data.disease}\n🛡️ Prevention: ${data.prevention}`
        : "Sorry, I couldn't find details for that.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Error fetching data from medical database." },
      ]);
    }

    // Reset input and file
    setInput("");
    setFile(null);
  };

  // File upload handler
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f6fa",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Mobile hamburger buttons */}
      <div className="d-flex d-md-none justify-content-between p-2 border-bottom bg-white">
        <Button
          color="light"
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
        >
          <Menu size={20} />
        </Button>
        <h6 className="m-0 fw-bold">Chat</h6>
        <Button
          color="light"
          onClick={() => setShowRightSidebar(!showRightSidebar)}
        >
          <Menu size={20} />
        </Button>
      </div>

      <Row style={{ flex: 1, margin: 0, height: chatHeight }}>
        {/* Left Sidebar */}
        <Col
          md="3"
          className={`d-none d-md-flex flex-column position-relative`}
          style={{
            background: "#ffffff",
            borderRight: "1px solid #e0e0e0",
            padding: "1rem",
            color: "#333",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <LeftSidebarContent />
        </Col>

        {/* Mobile Left Sidebar Overlay */}
        {showLeftSidebar && (
          <div
            className="d-md-none position-fixed"
            style={{
              top: 0,
              left: 0,
              width: "70%",
              height: "100%",
              background: "#fff",
              zIndex: 1050,
              padding: "1rem",
              boxShadow: "2px 0 6px rgba(0,0,0,0.2)",
              overflowY: "auto",
            }}
          >
            <Button
              close
              onClick={() => setShowLeftSidebar(false)}
              style={{ position: "absolute", top: 10, right: 10 }}
            />
            <LeftSidebarContent />
          </div>
        )}

        {/* Chat Window */}
        <Col
          md="6"
          xs="12"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0",
            background: "#fdfdfd",
            color: "#333",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Card
            className="border-0 flex-grow-1 shadow-sm"
            style={{
              borderRadius: "0",
              overflowY: "auto",
              background: "#fdfdfd",
              flex: 1,
            }}
          >
            <CardBody>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.from}`}
                  style={{
                    maxWidth: "70%",
                    marginLeft: msg.from === "user" ? "auto" : "0",
                    textAlign: msg.from === "user" ? "right" : "left",
                    whiteSpace: "pre-line",
                    fontWeight: "400",
                    padding: "0.5rem 1rem",
                    borderRadius: "12px",
                    marginBottom: "0.5rem",
                    background: msg.from === "bot" ? "#e6f0ff" : "#d9f7be",
                    color: "#333",
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
              background: "#f5f6fa",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {/* Voice button (future integration) */}
            <Button
              color="light"
              className="rounded-circle border"
              style={{ padding: "0.5rem", background: "#fff" }}
              onClick={() => document.getElementById("voice-upload").click()}
            >
              <Mic size={20} />
            </Button>
            <input
              type="file"
              accept="audio/*"
              id="voice-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />

            {/* Image upload */}
            <Button
              color="light"
              className="rounded-circle border"
              style={{ padding: "0.5rem", background: "#fff" }}
              onClick={() => document.getElementById("image-upload").click()}
            >
              <Image size={20} />
            </Button>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />

            {/* File upload */}
            <Button
              color="light"
              className="rounded-circle border"
              style={{ padding: "0.5rem", background: "#fff" }}
              onClick={() => document.getElementById("file-upload").click()}
            >
              <Paperclip size={20} />
            </Button>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />

            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="border"
              style={{ borderRadius: "20px", background: "#fff" }}
            />

            <Button
              style={{
                backgroundColor: "#007bff",
                border: "none",
              }}
              onClick={handleSend}
            >
              <Send size={18} className="text-white" />
            </Button>
          </div>
        </Col>

        {/* Right Sidebar */}
        <Col
          md="3"
          className={`d-none d-md-flex flex-column position-relative`}
          style={{
            background: "#ffffff",
            borderLeft: "1px solid #e0e0e0",
            padding: "1rem",
            height: "100%",
            overflowY: "auto",
            color: "#333",
          }}
        >
          <RightSidebarContent />
        </Col>

        {/* Mobile Right Sidebar Overlay */}
        {showRightSidebar && (
          <div
            className="d-md-none position-fixed"
            style={{
              top: 0,
              right: 0,
              width: "70%",
              height: "100%",
              background: "#fff",
              zIndex: 1050,
              padding: "1rem",
              boxShadow: "-2px 0 6px rgba(0,0,0,0.2)",
              overflowY: "auto",
            }}
          >
            <Button
              close
              onClick={() => setShowRightSidebar(false)}
              style={{ position: "absolute", top: 10, left: 10 }}
            />
            <RightSidebarContent />
          </div>
        )}
      </Row>

      <style>
        {`
          .chat-message.user:hover { transform: scale(1.02); transition: 0.2s; }
          .chat-message.bot:hover { transform: scale(1.02); transition: 0.2s; }
          .hover-highlight:hover { color: #007bff; cursor: pointer; }
          button.btn-sm:hover { background-color: #0069d9 !important; }
          .d-md-flex.flex-column::-webkit-scrollbar { width: 6px; }
          .d-md-flex.flex-column::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 3px; }
          .d-md-flex.flex-column::-webkit-scrollbar-track { background: transparent; }
        `}
      </style>
    </div>
  );
};

// Left sidebar content
const LeftSidebarContent = () => (
  <>
    <Button
      color="primary"
      className="w-100 mb-3 fw-bold text-white"
      style={{ borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
    >
      + New Chat
    </Button>
    <Input
      type="search"
      placeholder="Search chat..."
      className="mb-4 border"
      style={{ borderRadius: "8px", padding: "0.5rem", borderColor: "#d1d5db" }}
    />
    <h6 className="fw-bold">Library</h6>
    <ul className="list-unstyled small">
      <li className="mb-2 hover-highlight">📚 Health Tips</li>
      <li className="mb-2 hover-highlight">🥗 Nutrition Guides</li>
      <li className="mb-2 hover-highlight">🧠 Mental Wellness</li>
    </ul>
    <h6 className="fw-bold mt-4">History</h6>
    <ul className="list-unstyled small">
      {[
        "🩺 Vaccination Query",
        "💪 Fitness Program",
        "🍎 Nutrition Advice",
        "🧘 Stress Management",
        "🛌 Sleep Improvement",
        "💉 Covid Precautions",
        "🥦 Diet Chart",
        "🏃 Workout Plan",
        "🧴 Skin Care",
        "🩹 First Aid",
        "👟 Fitness Tracker",
        "🧃 Juice Diet",
      ].map((item, idx) => (
        <li key={idx} className="mb-2 hover-highlight">{item}</li>
      ))}
    </ul>
  </>
);

// Right sidebar content
const RightSidebarContent = () => (
  <div style={{ paddingTop: "60px", paddingBottom: "20px" }}>
    {/* Login button */}
    <div style={{ position: "absolute", top: "15px", right: "15px" }}>
      <Button
        size="sm"
        style={{
          backgroundColor: "#007bff",
          border: "none",
          fontWeight: "500",
          padding: "6px 14px",
          borderRadius: "20px",
          color: "#fff",
        }}
      >
        Login
      </Button>
    </div>

    {/* User Avatar */}
    <div className="text-center mb-4">
      <div
        style={{
          width: "90px",
          height: "90px",
          margin: "0 auto",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          border: "3px solid #007bff",
        }}
      >
        <img
          src="/yogaa.jpeg"
          alt="User Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h5 className="mt-3 fw-bold">John Doe</h5>
      <p className="text-muted small">johndoe@gmail.com</p>
    </div>

    {/* Health Info */}
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7ff, #ccefff)",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h6 className="fw-bold mb-3">Health Info</h6>
      <ul className="list-unstyled mb-0" style={{ lineHeight: "1.8" }}>
        <li>🧬 <strong>Blood Group:</strong> O+</li>
        <li>❤️ <strong>Age:</strong> 29</li>
        <li>⚖️ <strong>Weight:</strong> 72kg</li>
      </ul>
    </div>

    {/* Recent Activity */}
    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h6 className="fw-bold mb-3">Recent Activity</h6>
      <ul className="list-unstyled mb-0" style={{ lineHeight: "2" }}>
        <li>💊 <strong>Prescription Updated</strong></li>
        <li>🩺 <strong>Symptom Check</strong></li>
        <li>📅 <strong>Appointment Booked</strong></li>
      </ul>
    </div>
  </div>
);

export default ChatbotUI;
