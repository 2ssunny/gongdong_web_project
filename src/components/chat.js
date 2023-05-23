import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./chat.css";
function Chat() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
  };
  return (
    <div>
      <div className="chat">
        <div className="chattitle">
          <h1 className="chattitle_text" {...animatedItem[0]}>
            chat
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Chat;
