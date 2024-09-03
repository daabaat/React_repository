function TabButton({ children, onSelect, isSelected }) {
  // function handleClick() {
  //   console.log("hello world");
  // }

  return (
    <li>
      <button onClick={onSelect} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
