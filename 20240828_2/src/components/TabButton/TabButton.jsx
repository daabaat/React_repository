export default function TabButton({ children, onSelect }) {
  console.log("Tap컴포넌트 실행");
  //   함수를 onClick에 넣을때는 괄호빼고 이름만.
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
