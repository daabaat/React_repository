import { useState } from "react";

import "./App.css";

const menuList = {
  korean: ["비빔밥", "불고기", "김치"],
  western: ["돈까스", "피자", "치킨"],
  japanese: ["스시", "오니기리", "소바"],
};

function FoodBtn({ title, onSelect }) {
  return <button onClick={onSelect}>{title}</button>;
}

function App() {
  const [menu, setMenu] = useState(["메뉴를 선택하세요"]);

  function printMenu(menu) {
    setMenu(menuList[menu]);
  }

  return (
    <>
      <main>
        <FoodBtn title="한식" onSelect={() => printMenu("korean")} />
        <FoodBtn title="양식" onSelect={() => printMenu("western")} />
        <FoodBtn title="일식" onSelect={() => printMenu("japanese")} />
        <p>{menu.join(",")}</p>
      </main>
    </>
  );
}

export default App;
