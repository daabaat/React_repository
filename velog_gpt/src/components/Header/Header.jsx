import React from "react";
import ButtonGroup from "./ButtonGroup/ButtonGroup"; // ButtonGroup 컴포넌트를 불러옵니다.

const Header = ({
  handleVelogClick,
  handleTrendingClick,
  handleLatestClick,
  handleFeedClick,
  handleNewPostClick,
}) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="velog-logo" onClick={handleVelogClick}>
          velog
        </div>
        <ButtonGroup
          handleTrendingClick={handleTrendingClick}
          handleLatestClick={handleLatestClick}
          handleFeedClick={handleFeedClick}
        />
      </div>
      <div className="header-right">
        <button className="new-post-btn" onClick={handleNewPostClick}>
          새 글 작성
        </button>
      </div>
    </div>
  );
};

export default Header;
