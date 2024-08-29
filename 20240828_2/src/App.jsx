/**
 * Props 구성
 * props: 컴포넌트에 데이터를 전달하는 역할
 * props : html attribute(속성)
 * react는 props를 하나의 Object로 묶어서 전달
 * props는 컴포넌트 함수에 첫번째 인수로 전달된다.
 * attribute를통해 값을 전달하고 속성의 이름은 자유롭게 정할수있다
 * 글자,숫자,객체,배열등을 전달할수 있다
 *
 */

import React from "react";
import componentImg from "./assets/components.png";
import confgImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import { Card } from "./components/Card/Card";
/**
 * 자바스크립트 구조분해(destructuring)
 *
 */

// 컴포넌트 분리

// function TabButton({props}) {
//   const data = props.children;
//   return (
//     <li>
//       <button>{data}</button>
//     </li>
//   );
// }

/**
 * 데이터를 넘겨주는 방법
 * 1.props(attribute)
 * 2.chilren
 * attribute 방식 : 보통 작은 여러가지 데이터를 컴포넌트에 전달할 때 사용한다.
 * children 방식 : jsx 코드를 다른 컴포넌트에 넘겨줄 때 편리하게 사용이 가능하다.
 *
 */

function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

function App() {
  return (
    <div className="app">
      <h1>React Props 연습</h1>
      <div className="card-container">
        <Card
          title="리액트 props"
          content="react props는 컴포넌트에 데이터를 전달하는 방법입니다."
          backgroundColor="#ffddc1"
          textColor="#333"
          img={componentImg}
          array={["자바스크립트"]}
        />
        <Card
          title="Reusable Component"
          content="Card 컴포넌트를 재사용하여 다양한 데이터를 보여줄 수 있습니다."
          backgroundColor="#c1d7ff"
          textColor="#333"
          img={confgImg}
          array={["플러터"]}
        />
        <Card
          title="Dynamic Styling"
          content="props를 이용해 동적으로 스타일을 변경할 수 있습니다."
          backgroundColor="#d1ffc1"
          textColor="#333"
          img={jsxImg}
        />
      </div>
      <section className="example">
        <h2>예시</h2>
        <menu>
          <TabButton>
            <h2>데이터 전달</h2>
          </TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
