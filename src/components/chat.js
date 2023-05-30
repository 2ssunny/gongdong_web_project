import ChatBot from "react-simple-chatbot";
import React from "react";
function App() {
  return (
    <div>
      <div className="chatbot">
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
              options: [
                { value: 1, label: "Today's timetable", trigger: "4" },
                { value: 1, label: "Today's diet", trigger: "5" },
              ],
            },
            {
              id: "5",
              message: "Today's timetable.",
            },
            {
              id: "6",
              message: "Today's diet.",
            },
          ]}
        />
      </div>
    </div>
  );
}
export default App;
