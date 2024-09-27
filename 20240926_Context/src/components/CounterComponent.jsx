import { useContext } from "react";
import { CounterContext } from "../provider/CounterProvider";

export default function CounterComponent() {
  //   useContext 는 {count,setCount}를 반환

  const { count, addCount, minusCount } = useContext(CounterContext);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
    </>
  );
}
