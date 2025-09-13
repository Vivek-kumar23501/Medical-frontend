// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import MedicalFooter from "./components/MedicalFooter";
import FeatureCard from "./components/FeatureCard";
import Blogs from "./pages/Blogs";
import VaccinationForm from "./components/VaccinationForm";

// Pages
import LandingPage from "./pages/LandingPage";
import ChatbotLayout from "./pages/ChatbotLayout";
import AboutUs from "./pages/AboutUs";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MedicalDashboard from "./pages/MedicalDashboard";
// Wrapper to handle conditional Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Footer on Chatbot page
  const hideFooter = location.pathname === "/chatbot";

  return (
    <>
      
      {children}
      {/* Footer hidden only on Chatbot page */}
      {!hideFooter && <MedicalFooter />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/services" element={<FeatureCard />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/chatbot" element={<ChatbotLayout />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/vaccination-form" element={<VaccinationForm />} />



          {/* now the time is for medical dashboard */}
          <Route path="/medical-dashboard" element={<MedicalDashboard />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
