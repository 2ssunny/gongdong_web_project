import { Link } from "react-router-dom";
import React from "react";

import "./nav.css";
import logo from "../media/daegunlogo.png";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">About</span>
        </Link>

        <Link to="Chat" className="tltle-text">
          <span className="title-text2">Chat</span>
        </Link>

        <Link to="Contact" className="tltle-text">
          <span className="title-text2">Contact</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
