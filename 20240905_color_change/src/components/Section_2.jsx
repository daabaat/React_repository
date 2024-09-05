import { useState } from "react";
import Buttons from "./Buttons";

export default function Section_2() {
  const [stringColor, setStringColor] = useState();

  return (
    <section className="section_1" style={{ color: stringColor }}>
      <h2>글자색 변경</h2>
      <Buttons
        onClick={() => {
          setStringColor("green");
        }}
      >
        초록색
      </Buttons>
      <Buttons
        onClick={() => {
          setStringColor("black");
        }}
      >
        검은색
      </Buttons>
      <Buttons
        onClick={() => {
          setStringColor("skyblue");
        }}
      >
        하늘색
      </Buttons>
    </section>
  );
}
