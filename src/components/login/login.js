import React from "react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "../../animation.js";

import "./login.css";
function Login() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
  };
  return (
    <div>
      <div className="login">
        <div className="logintitle">
          <h1 className="logintitle_text" {...animatedItem[0]}>
            Login
          </h1>
          <div className="login_input">
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="Password" />
            <button className="login_button">Login</button>
          </div>
          <div className="signup_link">
            <Link to="/signup" className="signup_link_text">
              Clink to Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
