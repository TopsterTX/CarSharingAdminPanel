import React from "react";
import { changeIsOpenAsideMenu } from "../../../redux/actions/aside/aside";
import { useSelector, useDispatch } from "react-redux";
import search from "../../../icons/header/Shape.svg";
import notice from "../../../icons/header/Notifications.svg";
import avatar from "../../../images/Avatar.png";
import "./Header.scss";

export const Header = () => {
  const { asideMenuIsOpen } = useSelector((state) => state.aside);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <ul className="header__list">
        <div
          className="header__button"
          onClick={() => dispatch(changeIsOpenAsideMenu(true))}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <li className="header__item header__item-search">
          <img src={search} alt="" className="header__search-logo" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Поиск ..."
          />
        </li>
        <li className="header__item header__item-notice">
          <img src={notice} alt="" className="header__notice-logo" />
        </li>
        <li className="header__item header__item-account">
          <img src={avatar} alt="" className="header__account-logo" />
          <span className="header__account-name">Admin</span>
          <div className="header__account-arrow">
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
    </header>
  );
};
