import ReviewForm from "./ReviewForm/ReviewForm";
import ReviewList from "./ReviewList/ReviewList";
import { useState } from "react";

export default function Main() {
  const [contents, setContents] = useState([]); // 제목과 내용을 하나로 묶은 상태
  const [reviewFormClass, setReviewFormClass] = useState("review-form-none");

  function handleDelete(indexToDelete) {
    setContents((prev) =>
      prev.filter((item, index) => index !== indexToDelete)
    );
  }
  return (
    <main>
      <button
        onClick={() => {
          reviewFormClass === "review-form-container"
            ? setReviewFormClass("review-form-none")
            : setReviewFormClass("review-form-container");
        }}
      >
        {reviewFormClass === "review-form-container" ? "창 닫기" : "리뷰 쓰기"}
      </button>
      <section>
        <ReviewForm setContents={setContents} className={reviewFormClass} />
        <ReviewList contents={contents} onDelete={handleDelete} />
      </section>
    </main>
  );
}
