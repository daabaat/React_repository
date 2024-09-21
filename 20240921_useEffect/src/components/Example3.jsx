import { useState, useEffect } from "react";

const Example3 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  useEffect(() => {
    console.log("Example 3: ChildComponent가 렌더링됨");

    return () => {
      console.log("Example 3: ChildComponent가 언마운트됨");
    };
  }, []);

  return <div>Child Component가 렌더링됨</div>;
};

export default Example3;
