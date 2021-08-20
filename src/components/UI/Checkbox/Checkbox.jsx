import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Checkbox.scss";

export function Checkbox({ label, ID }) {
  let id = ID ? ID : uuidv4();

  return (
    <div className="checkbox">
      <input type="checkbox" id={id} className="checkbox__input" />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
}
