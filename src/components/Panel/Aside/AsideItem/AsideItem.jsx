import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeIsOpenAsideMenu } from "../../../../redux/actions/aside/aside";
import "./AsideItem.scss";

export const AsideItem = ({ item }) => {
  const { icon } = item;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(changeIsOpenAsideMenu(false));
  };

  return (
    <li
      className={`aside__item ${item.active ? "active" : null}`}
      onClick={() => clickHandler()}
    >
      <NavLink to={item.path} className="aside__item-container">
        {icon}
        <span className="aside__item-title">{item.title}</span>
      </NavLink>
    </li>
  );
};
