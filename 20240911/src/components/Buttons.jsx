export default function Buttons({ children, ...props }) {
  return (
    <>
      <button {...props}>시작</button>
      <p>{children}</p>
    </>
  );
}
