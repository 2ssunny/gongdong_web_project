import ChatBot from "react-simple-chatbot";
import React from "react";
import ReactDOM from "react-dom";

import Bot from "./chatbot.js";

function App() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Welcome. school information service.",
            trigger: "2",
          },
          {
            id: "2",
            message: "press start button to get information.",
            trigger: "3",
          },
          {
            id: "3",
            options: [{ value: 1, label: "start", trigger: "4" }],
          },
          {
            id: "4",
            message: "select menu.",
          },
        ]}
      />
    </div>
  );
}
export default App;
