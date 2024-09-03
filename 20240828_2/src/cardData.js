import componentImg from "./assets/components.png";
import confgImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";

const cardData = [
  {
    title: "리액트 props",
    content: "react props는 컴포넌트에 데이터를 전달하는 방법입니다.",
    backgroundColor: "#ffddc1",
    textColor: "#333",
    img: componentImg,
  },
  {
    title: "Reusable Component",
    content: "Card 컴포넌트를 재사용하여 다양한 데이터를 보여줄 수 있습니다.",
    backgroundColor: "#c1d7ff",
    textColor: "#333",
    img: confgImg,
  },
  {
    title: "Dynamic Styling",
    content: "props를 이용해 동적으로 스타일을 변경할 수 있습니다.",
    backgroundColor: "#d1ffc1",
    textColor: "#333",
    img: jsxImg,
  },
];

export default cardData;
