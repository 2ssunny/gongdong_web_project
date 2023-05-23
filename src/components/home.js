import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./home.css";
function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
    1: useScrollFadeIn("up", 2, 0.4, 30),
    2: useScrollFadeIn("up", 2, 0.4, 30),
  };
  return (
    <div>
      <div className="home">
        <div className="hometitle">
          <h1 className="hometitle_text" {...animatedItem[0]}>
            School information chatbot
          </h1>
        </div>
        <div className="homebody">
          <div className="homebody_title">
            <h2 {...animatedItem[1]}>
              This chatbot can prodive information about your school life
            </h2>
          </div>
        </div>
        <div className="homebody2">
          <div className="homebody_title">
            <div className="homedody_content">
              <h2 {...animatedItem[2]}>Why don't you use this chatbot?</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
