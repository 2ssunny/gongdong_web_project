import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./contact.css";
function Contact() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
  };
  return (
    <div>
      <div className="contact">
        <div className="contacttitle">
          <h1 className="contacttitle_text" {...animatedItem[0]}>
            contact
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
