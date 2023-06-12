import ChatBot from "react-simple-chatbot";
import React from "react";
import { useState } from "react";

async function Timetable() {
  const [data, setData] = useState([]);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  const api_key = process.env.REACT_APP_API_KEY;

  const link =
    "https://open.neis.go.kr/hub/hisTimetable?Type=&Key=" +
    { api_key } +
    "&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240082&GRADE={props.grade}&AY=2023&CLASS_NM={props.room}&TI_FROM_YMD=" +
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
  return data;
}

// async function Timetable() {
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

function App() {
  let [modal, setModal] = useState(false);
  return (
    <div className="chat_page">
      <div>
        <div className="chat_explain">
          <h2 className="chat_explain_title">
            This service is not completely done.
          </h2>
          <h2 className="chat_explain_title2">
            Interactive is done, but timetable and diet feature is not
            implemented.
          </h2>
        </div>
        <div className="chatbot">
          <button
            className="chatbot_button"
            onClick={() => {
              modal ? setModal(false) : setModal(true);
            }}
          >
            use chatbot
          </button>
          {modal ? <Modal modal={modal} setModal={setModal}></Modal> : ""}
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
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
            { value: 1, label: "Today's timetable", trigger: "5" },
            { value: 1, label: "Today's diet", trigger: "5" },
          ],
        },
        {
          id: "5",
          message: "select your grade.",
          trigger: "6",
        },
        {
          id: "6",
          options: [
            { value: 1, label: "1", trigger: "7" },
            { value: 1, label: "2", trigger: "7" },
            { value: 1, label: "3", trigger: "7" },
          ],
        },
        {
          id: "7",
          message: "select your class.",
          trigger: "8",
        },
        {
          id: "8",
          options: [
            { value: 1, label: "1", trigger: "9" },
            { value: 1, label: "2", trigger: "10" },
            { value: 1, label: "3", trigger: "11" },
            { value: 1, label: "4", trigger: "12" },
            { value: 1, label: "5", trigger: "13" },
            { value: 1, label: "6", trigger: "14" },
            { value: 1, label: "7", trigger: "15" },
            { value: 1, label: "8", trigger: "16" },
            { value: 1, label: "9", trigger: "17" },
          ],
        },
        // {
        //1-1
        //   id: "9",
        //   message: "timetable of today",
        //   component: <div>{Timetable(1, 1)}</div>,
        //   trigger: "2",
        // },
        {
          //1-1
          id: "9",
          message: "timetable of today",
          component: <Timetable grade="1" room="1" />,
          trigger: "1",
        },
        {
          //1-2
          id: "10",
          message: "timetable of today",
          component: <div>{Timetable(1, 2)}</div>,
          trigger: "1",
        },
        {
          //1-3
          id: "11",
          message: "timetable of today",
          component: <div>{Timetable(1, 3)}</div>,
          trigger: "2",
        },
        {
          //1-4
          id: "12",
          message: "timetable of today",
          component: <div>{Timetable(1, 4)}</div>,
          trigger: "2",
        },
        {
          //1-5
          id: "13",
          message: "timetable of today",
          component: <div>{Timetable(1, 5)}</div>,
          trigger: "2",
        },
        {
          //1-6
          id: "14",
          message: "timetable of today",
          component: <div>{Timetable(1, 6)}</div>,
          trigger: "2",
        },
        {
          //1-7
          id: "15",
          message: "timetable of today",
          component: <div>{Timetable(1, 7)}</div>,
          trigger: "2",
        },
        {
          //1-8
          id: "16",
          message: "timetable of today",
          component: <div>{Timetable(1, 8)}</div>,
          trigger: "2",
        },
        {
          //1-9
          id: "17",
          message: "timetable of today",
          component: <div>{Timetable(1, 9)}</div>,
          trigger: "2",
        },
        {
          id: "9",
          message: "select your grade.",
        },
      ]}
    />
  );
}
export default App;
