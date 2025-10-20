

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coursesOpen, setCoursesOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//     setCoursesOpen(false);
//   };

//   const toggleCourses = () => setCoursesOpen((prev) => !prev);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           NeoDialecta
//         </Link>

//         {/* Desktop Menu */}
//         <div className="desktop-menu">
//           <ul className="main-menu">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li className="desktop-dropdown">
//               <span className="dropdown-trigger">Courses ▾</span>
//               <ul className="sub-menu">
//                 <li><Link to="/courses/english">English</Link></li>
//                 <li><Link to="/courses/french">French</Link></li>
//                 <li><Link to="/courses/german">German</Link></li>
//                 <li><Link to="/courses/spanish">Spanish</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/faq">FAQ</Link></li>
//             <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>

//           </ul>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="desktop-actions">
//           <Link to="/login" className="btn login">Login</Link>
//           <Link to="/signup" className="btn signup">Sign Up</Link>
//         </div>

//         {/* Hamburger Toggle */}
//         <button
//           className={`menu-toggle ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`menu-overlay ${menuOpen ? "active" : ""}`}>
//         {!coursesOpen ? (
//           <ul className="main-menu">
//             <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//             <li>
//               <span className="mobile-courses-trigger" onClick={toggleCourses}>Courses ▾</span>
//             </li>
//             <li><Link to="/courses/english" onClick={toggleMenu}>About</Link></li>
//             <li><Link to="/courses/french" onClick={toggleMenu}>Contact</Link></li>
//             <li><Link to="/courses/german" onClick={toggleMenu}>Youtube</Link></li>
//             <li><Link to="/contact" onClick={toggleMenu}>FAQ</Link></li>
//             <li><Link to="/login" className="btn login" onClick={toggleMenu}>Login</Link></li>
//             <li><Link to="/signup" className="btn signup" onClick={toggleMenu}>Sign Up</Link></li>
//           </ul>
//         ) : (
//           <div>
//             <span className="back-btn" onClick={toggleCourses}>← Back</span>
//             <ul className="sub-menu">
//               <li><Link to="/english" onClick={toggleMenu}>English</Link></li>
//               <li><Link to="/french" onClick={toggleMenu}>French</Link></li>
//               <li><Link to="/german" onClick={toggleMenu}>German</Link></li>
//               <li><Link to="/spanish" onClick={toggleMenu}>Spanish</Link></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coursesOpen, setCoursesOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//     setCoursesOpen(false);
//   };

//   const toggleCourses = () => setCoursesOpen((prev) => !prev);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">NeoDialecta</Link>

//         {/* Desktop Menu */}
//         <div className="desktop-menu">
//           <ul className="main-menu">
//             <li><Link to="/">Home</Link></li>
//             <li className="desktop-dropdown">
//               <span className="dropdown-trigger">Courses ▾</span>
//               <ul className="sub-menu">
//                 <li><Link to="/courses/english">English</Link></li>
//                 <li><Link to="/courses/french">French</Link></li>
//                 <li><Link to="/courses/german">German</Link></li>
//                 <li><Link to="/courses/spanish">Spanish</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/faq">FAQ</Link></li>
//             <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
//           </ul>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="desktop-actions">
//           <Link to="/login" className="btn login">Login</Link>
//           <Link to="/signup" className="btn signup">Sign Up</Link>
//         </div>

//         {/* Hamburger Toggle */}
//         <button
//           className={`menu-toggle ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`menu-overlay ${menuOpen ? "active" : ""}`}>
//         {!coursesOpen ? (
//           <ul className="main-menu">
//             <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//             <li>
//               <span className="mobile-courses-trigger" onClick={toggleCourses}>Courses ▾</span>
//             </li>
//             <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
//             <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//             <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
//             <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
//             <li><Link to="/login" className="btn login" onClick={toggleMenu}>Login</Link></li>
//             <li><Link to="/signup" className="btn signup" onClick={toggleMenu}>Sign Up</Link></li>
//           </ul>
//         ) : (
//           <div>
//             <span className="back-btn" onClick={toggleCourses}>← Back</span>
//             <ul className="sub-menu">
//               <li><Link to="/courses/english" onClick={toggleMenu}>English</Link></li>
//               <li><Link to="/courses/french" onClick={toggleMenu}>French</Link></li>
//               <li><Link to="/courses/german" onClick={toggleMenu}>German</Link></li>
//               <li><Link to="/courses/spanish" onClick={toggleMenu}>Spanish</Link></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setCoursesOpen(false);
  };

  const toggleCourses = () => setCoursesOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">NeoDialecta</Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="main-menu">
            <li><Link to="/">Home</Link></li>
            <li className="desktop-dropdown">
              <span className="dropdown-trigger">Courses ▾</span>
              <ul className="sub-menu">
                <li><Link to="/courses/english">English</Link></li>
                <li><Link to="/courses/french">French</Link></li>
                <li><Link to="/courses/german">German</Link></li>
                <li><Link to="/courses/spanish">Spanish</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="desktop-actions">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`menu-overlay ${menuOpen ? "active" : ""}`}>
        {!coursesOpen ? (
          <ul className="main-menu">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><span className="mobile-courses-trigger" onClick={toggleCourses}>Courses ▾</span></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><Link to="/login" className="btn login" onClick={toggleMenu}>Login</Link></li>
            <li><Link to="/signup" className="btn signup" onClick={toggleMenu}>Sign Up</Link></li>
          </ul>
        ) : (
          <div>
            <span className="back-btn" onClick={toggleCourses}>← Back</span>
            <ul className="sub-menu">
              <li><Link to="/courses/english" onClick={toggleMenu}>English</Link></li>
              <li><Link to="/courses/french" onClick={toggleMenu}>French</Link></li>
              <li><Link to="/courses/german" onClick={toggleMenu}>German</Link></li>
              <li><Link to="/courses/spanish" onClick={toggleMenu}>Spanish</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
