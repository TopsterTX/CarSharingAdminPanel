import React, { memo } from "react";
import PropTypes from "prop-types";
import plus from "./plus.svg";
import { NavLink } from "react-router-dom";
import { Button } from "./../Button/Button";
import "./AddButton.scss";

const AddButtonInner = ({ to = "", children = "", onClick = () => {} }) => {
  return to.length > 0 ? (
    <NavLink className="button-add add" to={to} onClick={() => onClick()}>
      <img className="button-add__image" src={plus} />
      {children}
    </NavLink>
  ) : (
    <Button type="add" onClick={onClick}>
      {children}
    </Button>
  );
};

AddButtonInner.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const AddButton = memo(AddButtonInner);
