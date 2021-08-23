import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Input.scss";

const Input = ({
  id,
  addButton,
  children,
  warning,
  warningText,
  onChange,
  value,
  required,
  type,
  onClickButton,
}) => {
  let x = id ? id : uuidv4();

  const clickHandler = (e) => {
    e.preventDefault();
    onClickButton();
  };

  return (
    <div className={`input ${addButton ? "plus" : null}`}>
      <label htmlFor={x} className={`input__label`}>
        {children}
      </label>
      <div className="input__wrapper">
        <input
          type={type ? type : "text"}
          className={`input__item ${warning ? "warning" : null} `}
          id={x}
          require={required ? "true" : "false"}
          value={value}
          onChange={onChange}
        />
        <button
          className={`input__plus ${addButton ? "active" : null}`}
          onClick={(e) => {
            clickHandler(e);
          }}
        ></button>
      </div>
      <span className={`input__error ${warning ? "active" : null}`}>
        {warningText}
      </span>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  addButton: PropTypes.func,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  onClickButton: PropTypes.func,
  children: PropTypes.elementType.isRequired,
};

export default Input;
