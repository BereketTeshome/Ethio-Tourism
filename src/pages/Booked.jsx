import React from "react";
import Navbar from "../components/Navbar";
import { CheckCircle } from "@mui/icons-material";
import Footer from "../components/Footer";

const Booked = () => {
  return (
    <div>
      <div className="booked-wrapper">
        <CheckCircle style={{ fontSize: "50px", color: "#ff7e01" }} />
        <h2>Thank You</h2>
        <p>your tour is booked!</p>
        <a href="/">Back To Home</a>
      </div>
    </div>
  );
};

export default Booked;
