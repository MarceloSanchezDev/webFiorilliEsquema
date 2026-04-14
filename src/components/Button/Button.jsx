import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  icon = null,
  type = "button",
}) {
  return (
    <button type={type} className={`btn btn-${variant}`}>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
}
