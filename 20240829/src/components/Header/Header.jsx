import "./Header.css";

function Program({ children }) {
  return <li>{children}</li>;
}

export default function Header() {
  return (
    <header className="header">
      <h1>학생 관리 프로그램</h1>
      <nav>
        <ul>
          <Program>
            <a href="#home">홈</a>
          </Program>
          <Program>
            <a href="#studnets">학생</a>
          </Program>
          <Program>
            <a href="#contact">연락</a>
          </Program>
        </ul>
      </nav>
    </header>
  );
}
