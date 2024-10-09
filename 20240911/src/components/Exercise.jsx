export default function Exercise({ children, isSelected, ...props }) {
  return (
    <div {...props} className={isSelected ? "active" : undefined}>
      {children}
    </div>
  );
}
