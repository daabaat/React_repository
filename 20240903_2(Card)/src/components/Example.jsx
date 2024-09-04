import TabButton from "./TabButton";
import { useState } from "react";
import { data } from "../data";

/**
 *
 * Example 을 component로 안빼주고 App.jsx 안에 있었을 때는
 * 버튼을 누르면 Header 도  rebuild 되었지만
 * useState를 Example.jsx 로 따로 빼주면서
 * 버튼을 누를때는 Example만 rebuild 되고
 * Header는 새로고침 할 때만 rebuild 됨.
 *
 */

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }
  return (
    <section className="example">
      <h2>예시</h2>
      <menu>
        <TabButton
          onSelect={() => handleSelect("props")}
          isSelected={selectedTopic === "props"}
        >
          데이터 전달
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("component")}
          isSelected={selectedTopic === "component"}
        >
          재사용 컴포넌트
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("styling")}
          isSelected={selectedTopic === "styling"}
        >
          동적 스타일링
        </TabButton>
      </menu>
      {selectedTopic}

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
    </section>
  );
}
