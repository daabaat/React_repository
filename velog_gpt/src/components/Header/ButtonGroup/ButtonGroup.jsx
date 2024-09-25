import React from "react";
import styles from "./ButtonGroup.module.css";

const ButtonGroup = ({
  handleTrendingClick,
  handleLatestClick,
  handleFeedClick,
}) => {
  return (
    <div className={styles["button-group"]}>
      <button className={styles.button} onClick={handleTrendingClick}>
        트렌딩
      </button>
      <button className={styles.button} onClick={handleLatestClick}>
        최신
      </button>
      <button className={styles.button} onClick={handleFeedClick}>
        피드
      </button>
    </div>
  );
};

export default ButtonGroup;
