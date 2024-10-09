import "./App.css";
import Exercise from "./components/Exercise";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [selectedExercise, setSelectesExercise] = useState("walk");
  const [currentTime, setCurrentTIme] = useState();
  function handleExercise(exercise) {
    setSelectesExercise(exercise);
  }
  let content = <p>운동을 선택하세요.</p>;
  if (selectedExercise) {
    content = <p>{selectedExercise}을(를) 선택하셨습니다.</p>;
  }

  return (
    <>
      <Buttons
        onClick={() => {
          setCurrentTIme(Date.now());
        }}
      >
        {currentTime}
      </Buttons>
      <Exercise
        onClick={() => {
          handleExercise("걷기");
        }}
        isSelected={selectedExercise == "걷기"}
      >
        걷기
      </Exercise>
      <Exercise
        onClick={() => {
          handleExercise("달리기");
        }}
        isSelected={selectedExercise == "달리기"}
      >
        달리기
      </Exercise>
      <Exercise
        onClick={() => {
          handleExercise("수영");
        }}
        isSelected={selectedExercise == "수영"}
      >
        수영
      </Exercise>
      {content}
    </>
  );
}

export default App;
