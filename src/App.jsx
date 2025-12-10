import React from "react";
import { Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import More from "./pages/More";

import English from "./pages/courses/English";
import French from "./pages/courses/French";
import Spanish from "./pages/courses/Spanish";
import German from "./pages/courses/German";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Main page content */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/more" element={<More />} />

          <Route path="/courses/english" element={<English />} />
          <Route path="/courses/french" element={<French />} />
          <Route path="/courses/spanish" element={<Spanish />} />
          <Route path="/courses/german" element={<German />} />
        </Routes>
      </main>

      {/* Floating social bar */}
      <div className="social-bar">
        <a href="https://wa.me/2349017428035" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/neodialecta" target="_blank" rel="noopener noreferrer" className="instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/neodialecta" target="_blank" rel="noopener noreferrer" className="twitter">
          <FaTwitter />
        </a>
      </div>

      {/* Footer now works! */}
      <Footer />
    </div>
  );
}

export default App;