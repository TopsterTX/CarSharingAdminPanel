import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Checkbox.scss";

const Checkbox = ({ children, ID, key, active, onClick }) => {
  let id = ID ? ID : uuidv4();
  const dispatch = useDispatch();

  return (
    <div className="checkbox" key={key}>
      <input
        type="checkbox"
        id={id}
      />
      <label 
        htmlFor={id} 
        className={`checkbox__label ${active ? 'active' : null}`}
        onClick={() => onClick(!active)}
      >
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.elementType.isRequired,
  ID: PropTypes.string,
  key: PropTypes.any,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Checkbox;
