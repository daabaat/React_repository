import { useState } from "react";

export default function NumCount() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>카운트 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
}
