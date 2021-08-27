import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Input.scss";

function InputInner({
  id,
  addButton,
  disableButton = false,
  children = "",
  warning,
  warningText,
  onChange = () => {},
  value = "",
  required,
  type = "",
  onClickButton = () => {},
}) {
  let x = id ? id : uuidv4();
  const dispatch = useDispatch();

  const clickHandler = useCallback(
    (e) => {
      e.preventDefault();
      onClickButton(dispatch, value);
    },
    [onClickButton]
  );

  const changeHandler = useCallback(
    (e) => {
      return onChange(e);
    },
    [value, onChange]
  );

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
          onChange={(e) => changeHandler(e)}
        />
        <button
          className={`input__plus ${addButton ? "active" : null}`}
          onClick={(e) => (warning ? e.preventDefault() : clickHandler(e))}
        ></button>
      </div>
      <span className={`input__error ${warning ? "active" : null}`}>
        {warningText}
      </span>
    </div>
  );
}

InputInner.propTypes = {
  id: PropTypes.string,
  addButton: PropTypes.bool,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  onClickButton: PropTypes.func,
  children: PropTypes.elementType.isRequired,
};

export const Input = memo(InputInner);
