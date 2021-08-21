import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Button.scss";

export function Button({
  children,
  type,
  disabled,
  className,
  onClick = () => null,
  ...props
}) {
  const clickHander = (e) => {
    e.preventDefault();
    onClick();
  };

  let key = uuidv4();

  return (
    <button
      className={`${
        className
          ? `${className} button ${type ? type : null}`
          : `button ${type ? type : null}`
      }`}
      disable={disabled ? "true" : "false"}
      onClick={(e) => clickHander(e)}
      key={key}
      {...props}
    >
      {children}
    </button>
  );
}
