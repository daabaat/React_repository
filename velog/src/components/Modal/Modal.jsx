import React, { useRef, useEffect } from "react";
import "./Modal.css";

const Modal = ({ post, onClose }) => {
  const modalRef = useRef();

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // 모달 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>   
        <div>작성자: {post.author}</div>
        <div>
          좋아요: {post.likes} | 댓글: {post.comments}
        </div>
      </div>
    </div>
  );
};

export default Modal;
