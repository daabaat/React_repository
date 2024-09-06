import { Fragment } from "react";
import { useState } from "react";
import "./ReviewForm.css";

export default function ReviewForm({ setContents, setContentsText, ...props }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleText(e) {
    setText(e.target.value);
  }

  function submitForm() {
    if (title.trim() === "") {
      alert("제목을 입력하세요");
      return; // 제목이 비어 있을 경우, 이후의 코드 실행을 중단합니다.
    }
    if (text.trim() === "") {
      alert("내용을 입력하세요");
      return; // 내용이 비어 있을 경우, 이후의 코드 실행을 중단합니다.
    }

    // 제목과 내용을 하나의 객체로 묶어서 상태에 저장
    setContents((prev) => [...prev, { title, text }]);

    // 폼 초기화
    setTitle("");
    setText("");
  }
  return (
    <Fragment>
      <div {...props}>
        <textarea
          className="review-title"
          onChange={handleTitle}
          placeholder="제목을 입력하세요"
          value={title}
        ></textarea>
        <textarea
          className="review-text"
          onChange={handleText}
          placeholder="내용을 입력하세요."
          value={text}
        ></textarea>
        <button className="submit-button" onClick={submitForm}>
          제출
        </button>
      </div>
    </Fragment>
  );
}
