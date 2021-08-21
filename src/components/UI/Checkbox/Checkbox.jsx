import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Checkbox.scss";

export function Checkbox({ children, ID, key }) {
  let id = ID ? ID : uuidv4();

  return (
    <div className="checkbox" key={key}>
      <input type="checkbox" id={id} className="checkbox__input" />
      <label htmlFor={id} className="checkbox__label">
        {children}
      </label>
    </div>
  );
}
