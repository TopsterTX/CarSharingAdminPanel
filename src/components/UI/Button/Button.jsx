import React from "react";
import "./Button.scss";

export function Button({key, text, type, disabled, onClick }) {
  return (
    <button
      className={`button ${type ? type : null}`}
      disable={disabled ? true : false}
      onClick={onClick}
      key={key}
    >
      {text}
    </button>
  );
}
