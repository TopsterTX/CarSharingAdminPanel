import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import plus from "./plus.svg";
import { v4 as uuidv4 } from "uuid";
import "./Button.scss";

const ButtonInner = ({
  children = "",
  type = "",
  disabled = false,
  className = "",
  onClick = () => {},
  ...props
}) => {
  const clickHander = useCallback(
    (e) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );

  let key = uuidv4();

  return (
    <button
      className={`${
        className
          ? `${className} button ${type ? type : null}`
          : `button ${type ? type : null}`
      }`}
      onClick={(e) => clickHander(e)}
      key={key}
      {...props}
    >
      {type === "add" ? <img className="button__image" src={plus} /> : ""}
      {children}
    </button>
  );
};

ButtonInner.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export const Button = memo(ButtonInner);
