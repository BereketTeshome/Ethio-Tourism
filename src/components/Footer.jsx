import React from "react";
import { Facebook, GitHub, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-logo">
        <img src="./tour-images/logo.png" alt="logo" />
        <p>
          Welcome to Ethiopia, a land of ancient <br /> civilizations and
          stunning natural beauty.
        </p>
        <div className="footer-logoIcons">
          <YouTube style={{ fontSize: "medium", color: "#333" }} />
          <GitHub style={{ fontSize: "medium", color: "#333" }} />
          <Facebook style={{ fontSize: "medium", color: "#333" }} />
          <Instagram style={{ fontSize: "medium", color: "#333" }} />
        </div>
      </div>
      <div className="footer-discover">
        <h3>Discover</h3>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/tours">Tours</a>
      </div>
      <div className="footer-links">
        <h3>Quick links</h3>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>
          <span>Address: </span>Addis Ababa/ Ethiopia
        </p>
        <p>
          <span>Email: </span>bereket@gmail.com
        </p>
        <p>
          <span>Phone: </span>+2510987654321
        </p>
      </div>
    </div>
  );
};

export default Footer;
