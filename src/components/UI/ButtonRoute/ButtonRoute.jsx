import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ButtonRoute.scss";

export const ButtonRoute = ({ to, type, onClick, children }) => {
  const clickHadler = () => {
    onClick();
  };

  return (
    <NavLink
      to={to}
      className={`buttons__item buttons__item--${type}`}
      key={uuidv4()}
      onClick={() => clickHadler()}
    >
      <span className="buttons__text ">{children}</span>
    </NavLink>
  );
};
