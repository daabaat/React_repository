import { useState, useEffect } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Example 2: count 값이 변경됨 - 새로운 값: ${count}`);
  }, [count]);

  return (
    <div>
      <div>Example 2: count 값 - {count}</div>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
    </div>
  );
};

export default Example2;
