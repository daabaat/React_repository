import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/**
 * 컴포넌트 생성 규칙
 * 1. 함수 이름의 첫글자는 무조건 대문자
 * 2. 단어가 두개 이상일 경우PascalCase로 작성
 * 3. 함수는 랜더링할 값을 반환을 해야한다.
 *
 * 커스텀 컴포넌트란 ?
 *
 * 내장 컴포넌트나 다른 사용자 정의 컴포넌트를 감싸는 역할을 한다.
 * react는 컴포넌트 트리를 탐색해서 내장 컴포넌트만 남을 때까지 진행한다.
 *
 */
function Header() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <p>
        <Header />
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
