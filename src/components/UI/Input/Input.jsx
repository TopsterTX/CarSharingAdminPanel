import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.scss";

export function Input(props) {
  let x = props.id ? props.id : uuidv4();

  return (
    <div className={`input ${props.addButton ? "plus" : null}`}>
      <label htmlFor={x} className={`input__label`}>
        {props.children}
      </label>
      <div className="input__wrapper">
        <input
          type={props.type ? props.type : "text"}
          className={`input__item ${props.warning ? "warning" : null} `}
          id={x}
          require={props.required ? "true" : "false"}
          value={props.value}
          onChange={props.onChange}
        />
        <button
          className={`input__plus ${props.addButton ? "active" : null}`}
          onClick={(e) => {
            e.preventDefault();
            props.onClickButton();
          }}
        ></button>
      </div>
      <span className={`input__error ${props.warning ? "active" : null}`}>
        {props.warningText}
      </span>
    </div>
  );
}
