import React from "react";
import "./Footer.css"; 
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About NeoDialecta</h3>
          <p>
            Dialecta empowers learners around the world to communicate confidently. 
            From English and Spanish to German and French, our courses help you achieve 
            fluency through interactive learning, expert tutors, and real-world practice. 
            Join a global community of passionate learners today!
          </p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#core-values">Courses</a></li>
            <li><a href="#language-courses">About</a></li>
            <li><a href="#shop-resources">Contact</a></li>
            <li><a href="#blog-articles">FQA</a></li>
          </ul>
        </div>

    
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@dialecta.com</p>
          <a href="tel: +"></a>
          <div className="social-icons">
  <a href="#"><FaWhatsapp /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaTwitter/></a>
  
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dialecta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
