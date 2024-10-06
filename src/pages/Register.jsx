import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  return (
    <div>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-img">
            <img src="/tour-images/register.png" alt="null" />
          </div>
          <div className="login-form">
            <div className="login-formImg">
              <img src="/tour-images/user.png" alt="null" />
            </div>
            <h2>Register</h2>
            <form>
              <input
                type="text"
                placeholder="Enter your username..."
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  you must provide name
                </p>
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {emailErr}{" "}
                </p>
              )}
              <input
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  you must provide password
                </p>
              )}
              <button type="button">Register</button>
              <p>
                I have an account <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
