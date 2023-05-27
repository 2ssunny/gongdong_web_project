import ChatBot from "react-simple-chatbot";
import React from "react";
import ReactDOM from "react-dom";

const Bot = () => {
  const steps = [
    {
      id: "0",
      message: `안녕하세요 학교정보 제공 서비스입니다`,
      trigger: "1",
    },
    {
      id: "1",
      message: `시작하기 버튼을 눌러 정보를 제공받으세요.`,
      trigger: "2",
    },
    {
      id: "2",
      options: [{ value: 1, label: "시작하기", trigger: "3" }],
    },
    {
      id: "3",
      options: [
        { value: 1, label: "오늘의 시간표", trigger: "4" },
        { value: 1, label: "오늘의 식단표", trigger: "5" },
      ],
    },
    {
      id: "4",
      message: `오늘의 시간표입니다.`,
    },
    {
      id: "5",
      message: `오늘의 식단표입니다.`,
    },
  ];

  ReactDOM.render(
    <div>
      <div>
        <ChatBot steps={steps} />
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Bot;
