/**
 * Props 구성
 * props: 컴포넌트에 데이터를 전달하는 역할
 * props : html attribute(속성)
 * react는 props를 하나의 Object로 묶어서 전달
 * props는 컴포넌트 함수에 첫번째 인수로 전달된다.
 * attribute를통해 값을 전달하고 속성의 이름은 자유롭게 정할수있다
 * 글자,숫자,객체,배열등을 전달할수 있다
 *
 */

import React from "react";
import { useState } from "react";

import { Card } from "./components/Card/Card";
import TabButton from "./components/TabButton/TabButton";
import cardData from "./cardData";
/**
 * 자바스크립트 구조분해(destructuring)
 *
 */

// 컴포넌트 분리

// function TabButton({props}) {
//   const data = props.children;
//   return (
//     <li>
//       <button>{data}</button>
//     </li>
//   );
// }

/**
 * 데이터를 넘겨주는 방법
 * 1.props(attribute)
 * 2.chilren
 * attribute 방식 : 보통 작은 여러가지 데이터를 컴포넌트에 전달할 때 사용한다.
 * children 방식 : jsx 코드를 다른 컴포넌트에 넘겨줄 때 편리하게 사용이 가능하다.
 *
 */

function App() {
  // selectedLabel (첫번째): 컴포넌트 함수가 재실행될 때 변경되는 값
  // setSelectedLabel (두번째) : 저장된 값을 수정하고 컴포넌트 함수가 재실행 하도록 명령
  // useState(""): 초기화 값

  const [selectedLabel, setSelectedLabel] = useState("버튼을 클릭해주세요");
  console.log("App컴포넌트 실행");

  function HandleSelect(label) {
    setSelectedLabel(label);
    console.log(selectedLabel);
  }
  return (
    <div className="app">
      <h1>React Props 연습</h1>
      <div className="card-container">
        <Card {...cardData[0]} />
        <Card {...cardData[1]} />
        <Card {...cardData[2]} />
      </div>
      <section className="example">
        <h2>예시</h2>
        <menu>
          <TabButton onSelect={() => HandleSelect("props")}>
            <h2>데이터 전달</h2>
          </TabButton>
          <TabButton onSelect={() => HandleSelect("component")}>
            <h2>재사용 컴포넌트</h2>
          </TabButton>
          <TabButton onSelect={() => HandleSelect("styling")}>
            <h2>동적 스타일링</h2>
          </TabButton>
        </menu>
      </section>
      {/* 리액트 컴포넌트는 오직 한번 실행한다. */}
      {selectedLabel}
    </div>
  );
}

export default App;
