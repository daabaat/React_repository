import { Fragment } from "react";
import { useState } from "react";

export default function QnaForm({ setContents }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  function submitForm() {
    console.log(text);
    setText("");
    // prev : 데이터를 넣기전 기존에 있던 값
    setContents((prev) => [...prev, text]);
  }

  return (
    <Fragment>
      <textarea
        onChange={handleChange}
        placeholder="불만사항을 입력하세요"
        value={text}
      ></textarea>
      <button onClick={submitForm}>제출</button>
    </Fragment>
  );
}
