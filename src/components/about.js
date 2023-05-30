import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./about.css";
function About() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
    1: useScrollFadeIn("up", 2, 0.4, 30),
    2: useScrollFadeIn("up", 2, 0.8, 30),
    3: useScrollFadeIn("up", 2, 1.2, 30),
    4: useScrollFadeIn("up", 2, 1.6, 30),
  };
  return (
    <div>
      <div className="about">
        <div className="abouttitle">
          <h1 className="abouttitle_text" {...animatedItem[0]}>
            About my Chatbot service
          </h1>
        </div>
      </div>
      <div className="aboutbody">
        <div className="aboutbody_text">
          <h1 className="aboutbody_text_begin" {...animatedItem[1]}>
            This service started with Telegram at first time
          </h1>
          <h2 className="aboutbody_text_explain" {...animatedItem[2]}>
            Then, this service developed with React to service on the web
            environment
          </h2>
          <h3 className="aboutbody_text_explain" {...animatedItem[3]}>
            Now, this service is only available for Daegun High School.
          </h3>
          <h3 className="aboutbody_text_explain" {...animatedItem[4]}>
            But someday, I want to make this service available for all the other
            schools in Korea.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
