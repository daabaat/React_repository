import headerImg from "../assets/header.png";

const reactDes = ["리액트 기초", "리액트 필수요소", "리액트 핵심기술"];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const des = reactDes[genRandom(2)];

  return (
    <header>
      <img src={headerImg} alt="" />
      <p>{des}</p>
    </header>
  );
}
