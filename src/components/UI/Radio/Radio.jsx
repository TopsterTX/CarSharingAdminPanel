import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Radio.scss";

const Radio = ({ id, children, active }) => {
  let ID = id ? id : uuidv4();

  return (
    <>
      <label
        htmlFor={ID}
        className={`radio__label ${active ? "active" : null}`}
      >
        {children}
      </label>
      <input type="radio" id={ID} className="radio__input" />
    </>
  );
};

Radio.propTypes = {
  id: PropTypes.any,
  children: PropTypes.elementType.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Radio;
