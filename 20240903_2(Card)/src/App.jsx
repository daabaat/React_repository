import Card from "./components/Card";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { data } from "./data";
import CARD_DATA from "./CARD_DATA";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div className="app">
      <h1>React Props 연습</h1>
      <div className="card-container">
        <Card {...CARD_DATA[0]} />
        <Card {...CARD_DATA[1]} />
        <Card {...CARD_DATA[2]} />
      </div>
      <section className="example">
        <h2>예시</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("props")}>
            데이터 전달
          </TabButton>
          <TabButton onSelect={() => handleSelect("component")}>
            재사용 컴포넌트
          </TabButton>
          <TabButton onSelect={() => handleSelect("styling")}>
            동적 스타일링
          </TabButton>
        </menu>
        {selectedTopic}
      </section>
      {selectedTopic === undefined ? (
        <p>주제를 선택해주세요.</p>
      ) : (
        <div style={{ backgroundColor: data[selectedTopic].backgroundColor }}>
          <h3>{data[selectedTopic].title}</h3>
          <p>{data[selectedTopic].content}</p>
          <pre>
            <code>{data[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
