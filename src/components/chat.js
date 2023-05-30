import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import React from "react";
import { useState } from "react";

import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

function App() {
  const useTimetable = async (grade, room) => {
    const [data, setData] = useState([]);
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    const api_key = process.env.REACT_APP_API_KEY;

    const link =
      "https://open.neis.go.kr/hub/hisTimetable?Type=&Key=" +
      { api_key } +
      "&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240082&GRADE={grade}&AY=2023&CLASS_NM={room}&TI_FROM_YMD=" +
      year +
      month +
      date +
      "&TI_TO_YMD=" +
      year +
      month +
      date;
    const res = await fetch(link).then((res) => res.json());
    console.log(res.mealServiceDietInfo[1].row);
    setData(res.mealServiceDietInfo[1].row);
  };

  // const useDiet = async () => {
  //   const [data2, setData2] = useState([]);
  //   let today = new Date();
  //   let year = today.getFullYear();
  //   let month = today.getMonth() + 1;
  //   let date = today.getDate();

  //   const api_key = process.env.REACT_APP_API_KEY;

  //   const link =
  //     "https://open.neis.go.kr/hub/mealServiceDietInfo?MLSV_YMD=" +
  //     year.toString() +
  //     month.toString().padStart(2, "0") +
  //     date.toString().padStart(2, "0") +
  //     "&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240082";
  //   const res = await fetch(link).then((res) => res.json());
  //   console.log(res.hisTimetable[1].row);
  //   setData2(res.hisTimetable[1].row);
  //   return data2;
  // };
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
export default App;
