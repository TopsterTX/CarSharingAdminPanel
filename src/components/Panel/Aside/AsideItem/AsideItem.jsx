import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeIsOpenAsideMenu } from "../../../../redux/actions/aside/aside";
import "./AsideItem.scss";

export const AsideItem = ({ item }) => {
  const { asideMenuIsOpen } = useSelector((state) => state.aside);
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
        <img src={item.icon} alt="" className="aside__item-icon" />
        <span className="aside__item-title">{item.title}</span>
      </NavLink>
    </li>
  );
};
