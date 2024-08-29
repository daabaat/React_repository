import "./App.css";
import reactImg from "./assets/mountain.jpg";

const language = ["리액트", "자바스크립트", "플러터"];

function getRandomInt(max) {
  // 0~max 숫자안의 랜덤숫자를 출력
  return Math.floor(Math.random() * (max + 1));
}

/**
 *
 * 정적 콘텐츠, 동적 콘텐츠
 * 정적 콘텐츠 : 직접 타이핑되고 런타임에서 변경되지 않는다.
 * 동적 콘텐츠 : 런타임에 값이 입력된다.
 */
function Header() {
  return (
    <div>
      <h1>컴포넌트 연습</h1>
    </div>
  );
}

function MainGoal() {
  const getLanguage = language[getRandomInt(2)];
  return (
    <div>
      <p>나의 주요 목표 : {getLanguage} 매일 1시간 공부하기</p>
    </div>
  );
}
function App() {
  return (
    <div id="app">
      <Header />
      <img src={reactImg} alt="" />

      <p>
        <code>&lt;MainGoal&gt;</code>
        <MainGoal />
      </p>
    </div>
  );
}

export default App;
