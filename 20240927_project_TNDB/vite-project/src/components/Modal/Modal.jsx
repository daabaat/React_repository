import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ show, onClose, movie }) {
  // 모달이 열렸을 때 메인 스크롤 비활성화
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 바깥쪽 클릭 시 모달 닫기
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} 포스터`}
        />
        <p>{movie.overview}</p>
        <p>평점: {movie.vote_average}/10</p>
        <p>개봉일: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default Modal;
