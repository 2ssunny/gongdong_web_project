import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./home.css";
function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
  };
  return (
    <div>
      <div className="home">
        <div className="hometitle">
          <h1 className="hometitle_text" {...animatedItem[0]}>
            Sccool information chatbot
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
