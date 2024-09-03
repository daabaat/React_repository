import "./Card.css";

export function Card2() {
  return <div></div>;
}

export function Card({
  title: subject,
  content: body,
  backgroundColor,
  textColor,
  img,
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <img src={img} alt="" />
      <h2 className="card-title">{subject}</h2>
      <p className="card-content">{body}</p>
    </div>
  );
}

// 하나의 함수만 내부로 보낼떄 default
// 두개 이상 함수 보낼때는 객체형태로.
// export { Card };
