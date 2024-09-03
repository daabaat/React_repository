import React from "react";
import { useState } from "react";

function App_1() {
  const [price, setPrice] = useState(10000);
  function Discount() {
    setPrice(5000);
  }

  return (
    <div className="app">
      <h1>{price}</h1>
      <button onClick={Discount}>가격할인하기</button>
    </div>
  );
}

function App_2() {
  const [number, setNumber] = useState(0);

  function NumberPlus() {
    setNumber((num) => num + 1);
  }
  function NumberMinus() {
    setNumber((num) => num - 1);
  }
  return (
    <div className="app">
      <h1>{number}</h1>
      <button onClick={NumberPlus}>+</button>
      <button onClick={NumberMinus}>-</button>
    </div>
  );
}

function App_3() {
  const [randomNumberArray, setRandomNumberArray] = useState([]);

  function PrintRandomNumber() {
    let randomNum = Math.floor(Math.random() * 100);

    // setRandomNumber(randomNumber.concat(randomNum));
    setRandomNumberArray([...randomNumberArray, randomNum]);
  }

  return (
    <div className="app">
      <h1>{randomNumberArray.join(",")}</h1>
      <button onClick={PrintRandomNumber}>랜덤숫자넣기</button>
    </div>
  );
}

export { App_1, App_2, App_3 };
