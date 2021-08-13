import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.scss";

export function Input(props) {
  let x = props.id ? props.id : uuidv4();

  return (
    <div className="input">
      <label htmlFor={x} className="input__label">
        {props.label}
      </label>
      <input
        type={props.type ? props.type : "text"}
        className={`input__item ${props.warning ? "warning" : null}`}
        id={x}
        require={props.required ? true : false}
        value={props.value}
        onChange={props.onChange}
      />
      <span className={`input__error ${props.warning ? "active" : null}`}>
        {props.warningText}
      </span>
    </div>
  );
}
