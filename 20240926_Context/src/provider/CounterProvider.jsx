// CounterProvider.jsx

import { createContext, useState } from "react";

// context 생성

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  return (
    // value 에 전달할 데이터를 객체로 넣어준다.

    <CounterContext.Provider value={{ count, addCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
}
