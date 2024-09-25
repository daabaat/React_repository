import "./App.css";
import { useState, useReducer } from "react";

function App() {
  // useReduce는 두개의 인수를받는다.
  // 첫번째 : 상태 변경을 처리하는 함수
  // 두번째 : 초기 상태
  // state : 현재 상태
  // dispatch : 특정 액션을 실행해서 상태를 업데이트하는 함수 (액션전달)

  const initState = { value: 0 };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    // 첫번째 parameter : 현재 상태
    // 두번째 parameter : 액션 객체
    switch (action.type) {
      case "INCREMENT":
        console.log(action);

        return { value: state.value + 1 };

      case "DECREMENT":
        return { value: state.value - 1 };
      default:
        throw new Error("정의되지 않은 액션");
    }
  }

  return (
    <div>
      <h2>카운트 : {state.value}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", name: "park" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
