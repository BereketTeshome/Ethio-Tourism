import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const isLoggedIn = false;

  return (
    <div className="nav-container">
      <div className="nav-left">
        <a href="/">
          <img src="./tour-images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="nav-center" style={{ top: `${nav ? "57px" : "-200px"}` }}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tours">Tours</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {isLoggedIn ? (
          <div className="nav-rightDiv">
            <button className="nav-register">Logout</button>{" "}
            <img src="/tour-images/user.png" alt="null" className="nav-png" />
            <p> B </p>
          </div>
        ) : (
          <div className="nav-right">
            <a href="/login" className="nav-login">
              Login
            </a>
            <a href="/register" className="nav-register">
              Register
            </a>
          </div>
        )}
        <span onClick={() => setNav(!nav)}>
          <FiMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
