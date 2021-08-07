import React from "react";
import { changeIsOpenAsideMenu } from "../../../redux/actions/aside/aside";
import { useSelector, useDispatch } from "react-redux";
import search from "../../../icons/Shape.svg";
import notice from "../../../icons/Notifications.svg";
import avatar from "../../../images/Avatar.png";
import exit from "../../../icons/Exit.svg";
import "./Header.scss";
import { userLogout } from "./../../../redux/actions/user/user";

export const Header = () => {
  const { accessToken } = useSelector((state) => state.user);
  const { asideMenuIsOpen } = useSelector((state) => state.aside);
  const dispatch = useDispatch();

  const clickHandler = () => {
    return dispatch(userLogout(accessToken));
  };

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
          <ul className="header__account-sublist">
            <li className="header__account-item">
              <button
                className="header__account-button"
                onClick={() => {
                  console.log("click");
                  clickHandler();
                }}
              >
                <span className='header__account-text'>Выйти</span>
                <img src={exit} alt="" width="15px" height="15px" />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};
