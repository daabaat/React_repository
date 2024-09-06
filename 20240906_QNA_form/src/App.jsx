import "./App.css";
import Header from "./components/Header";
import QnaForm from "./components/QnaForm";
import { useState } from "react";
import QnaList from "./components/QnsList";

// lifting state up
// 리액트 상태 끌어올리기

function App() {
  const [contents, setContents] = useState([]);
  console.log(contents);

  function handleDelete(indexToDelete) {
    setContents((prev) =>
      prev.filter((item, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="main">
      <Header />
      <QnaForm setContents={setContents} />
      <QnaList contents={contents} onDelete={handleDelete} />
    </div>
  );
}

export default App;
