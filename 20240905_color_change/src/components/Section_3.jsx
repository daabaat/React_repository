import { useState } from "react";
import Buttons from "./Buttons";

export default function Section_3() {
  const [toggle, setToggle] = useState("black");

  return (
    <section className="section_1" style={{ color: toggle }}>
      <h2>On/Off</h2>
      <Buttons
        onClick={() => {
          toggle === "black" ? setToggle("yellow") : setToggle("black");
        }}
      >
        on
      </Buttons>
    </section>
  );
}
