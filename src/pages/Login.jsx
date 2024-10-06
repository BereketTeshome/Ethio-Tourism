import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  return (
    <div>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-img">
            <img src="/tour-images/login.png" alt="null" />
          </div>
          <div className="login-form">
            <div className="login-formImg">
              <img src="/tour-images/user.png" alt="null" />
            </div>
            <h2>Login</h2>
            <form>
              <input
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
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
              />
              {passwordErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {passwordErr}{" "}
                </p>
              )}
              <button type="button">Login</button>{" "}
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
