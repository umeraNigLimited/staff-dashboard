import React from "react";
import "../styles/Buttons.css";

function Buttons({
  label = "",
  onClick,
  type = "button",
  style = {},
  className = "",
  disabled = false,
  icon = null,
  variant = "with-bg",
}) {
  const baseStyle = "button";
  const styles = {
    default: "",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`btn ${
        variant === "with-bg" ? "btn-with-bg" : "btn-without-bg"
      } ${className}`}
      disabled={disabled}
    >
      {label && <span className="btn-label">{label}</span>}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}

export default Buttons;
