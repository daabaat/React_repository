function TabButton({ children, isSelected, ...props }) {
  // function handleClick() {
  //   console.log("hello world");
  // }

  return (
    <li>
      <button {...props} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
} 

export default TabButton;
