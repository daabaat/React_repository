import "./ReviewList.css";
import { useState } from "react";

export default function ReviewList({ contents, onDelete }) {
  const [activeIndex, setActiveIndex] = useState(null); // 클릭된 항목의 인덱스를 관리

  return (
    <ul className="contents">
      {contents.map((content, index) => (
        <li key={index} className="review-item">
          <div className="contents-title">
            {content.title}
            <button
              onClick={() => {
                setActiveIndex(activeIndex === index ? null : index); // 클릭한 항목만 활성화
              }}
            >
              {activeIndex === index ? "내용 숨기기" : "내용 보기"}
            </button>
          </div>
          {/* activeIndex와 현재 index가 같으면 내용을 보여줌 */}
          <div
            className={
              activeIndex === index ? "contents-text-block" : "contents-text"
            }
          >
            {content.text}
          </div>
          <button
            onClick={() => {
              onDelete(index);
            }}
          >
            리뷰 삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
