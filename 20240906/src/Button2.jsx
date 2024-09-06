export default function Button({ mode = "filled", children, Icon, ...props }) {
  let className = `button ${mode}-button`;

  if (Icon) {
    className += " icon-button";
  }

  return (
    <button className={className} {...props}>
      {Icon && (
        <span>
          <Icon />
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}
