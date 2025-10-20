import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import More from "./pages/More"

import English from "./pages/courses/English";
import French from "./pages/courses/French";
import Spanish from "./pages/courses/Spanish";
import German from "./pages/courses/German";

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
