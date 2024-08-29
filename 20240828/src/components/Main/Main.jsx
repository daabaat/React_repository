import "./Main.css";

export default function Main({ quote, authors }) {
  // quotes -> Object

  return (
    <main>
      <h1>오늘의 명언</h1>
      <div>{quote}</div>
      <div>{authors}</div>
    </main>
  );
}
