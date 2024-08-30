import "./Main.css";

export default function Main({ quote, authors, onSelect }) {
  return (
    <main>
      <h1>오늘의 명언</h1>
      <div>{quote}</div>
      <div>{authors}</div>
      <button onClick={onSelect}>명언 출력</button>
    </main>
  );
}
