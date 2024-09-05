import { useState } from "react";
import Buttons from "./Buttons";

export default function Section_1() {
  const [background, setBackground] = useState();

  return (
    <section className="section_1" style={{ backgroundColor: background }}>
      <h2>배경화면 변경</h2>
      <Buttons
        onClick={() => {
          setBackground("red");
        }}
      >
        빨강
      </Buttons>
      <Buttons
        onClick={() => {
          setBackground("blue");
        }}
      >
        파랑
      </Buttons>
      <Buttons
        onClick={() => {
          setBackground("green");
        }}
      >
        초록
      </Buttons>
    </section>
  );
}
