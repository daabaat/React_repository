export default function Button({ mode = "filled", children, Icon, ...props }) {
  mode
    ? Icon
      ? (mode = "button " + mode + "-button" + " icon-button")
      : (mode = "button " + mode + "-button")
    : mode;

  return (
    <button className={mode} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}

      {children}
    </button>
  );
}
