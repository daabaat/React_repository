import TabButton from "./TabButton";
import { useState } from "react";
import { data } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

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

  let tabContent = <p>주제를 선택하세요</p>;

  if (selectedTopic) {
    tabContent = (
      <div style={{ backgroundColor: data[selectedTopic].backgroundColor }}>
        <h3>{data[selectedTopic].title}</h3>
        <p>{data[selectedTopic].content}</p>
        <pre>
          <code>{data[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section className="example" title="예시">
      <Tabs
        container="menu"
        buttons={
          <>
            <TabButton
              onClick={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              데이터 전달
            </TabButton>
            <TabButton
              onClick={() => handleSelect("component")}
              isSelected={selectedTopic === "component"}
            >
              재사용 컴포넌트
            </TabButton>
            <TabButton
              onClick={() => handleSelect("styling")}
              isSelected={selectedTopic === "styling"}
            >
              동적 스타일링
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
