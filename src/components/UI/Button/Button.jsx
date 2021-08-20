import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Button.scss";

export function Button({ text, type, disabled, onClick }) {
  let key = uuidv4();
  return (
    <button
      className={`button ${type ? type : null}`}
      disable={disabled ? "true" : "false"}
      onClick={onClick}
      key={key}
    >
      {text}
    </button>
  );
}
