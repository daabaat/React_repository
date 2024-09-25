import React, { useState, useEffect } from "react";
import { postData } from "./DUMMY_DATA";
import PostList from "./components/PostList/PostList";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

function App() {
  const [currentPosts, setCurrentPosts] = useState(postData.trending);
  const [selectedPost, setSelectedPost] = useState(null); // 선택한 게시물 상태

  const handleTrendingClick = () => setCurrentPosts(postData.trending);
  const handleLatestClick = () => setCurrentPosts(postData.latest);
  const handleFeedClick = () => setCurrentPosts(postData.feed);
  const handleNewPostClick = () => {
    alert("새 글 작성 페이지로 이동");
    // 새 글 작성 로직 구현
  };

  const handlePostClick = (post) => {
    setSelectedPost(post); // 게시글 클릭 시 모달을 띄우기 위해 게시글 데이터 설정
  };

  const closeModal = () => {
    setSelectedPost(null); // 모달 닫기
  };

  // Velog 클릭 시 첫 화면(트렌딩 페이지)으로 이동
  const handleVelogClick = () => {
    setCurrentPosts(postData.trending);
  };

  return (
    <div className="container">
      {/* 상단 헤더 */}
      <Header
        handleVelogClick={handleVelogClick}
        handleTrendingClick={handleTrendingClick}
        handleLatestClick={handleLatestClick}
        handleFeedClick={handleFeedClick}
        handleNewPostClick={handleNewPostClick}
      />

      {/* 게시글 리스트 */}
      <PostList posts={currentPosts} onPostClick={handlePostClick} />
      <Weather />

      {/* 모달창 */}
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
    </div>
  );
}

export default App;
