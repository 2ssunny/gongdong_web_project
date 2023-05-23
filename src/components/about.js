import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./about.css";
function About() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
  };
  return (
    <div>
      <div className="about">
        <div className="abouttitle">
          <h1 className="abouttitle_text" {...animatedItem[0]}>
            about
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
