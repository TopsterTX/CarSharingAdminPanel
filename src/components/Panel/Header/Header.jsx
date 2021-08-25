import React, { memo } from "react";
import { Button } from "./../../UI/Button/Button";
import { changeIsOpenAsideMenu } from "../../../redux/actions/aside/aside";
import { useSelector, useDispatch } from "react-redux";
import search from "../../../icons/header/Shape.svg";
import notice from "../../../icons/header/Notifications.svg";
import avatar from "../../../images/Avatar.png";
import exit from "../../../icons/Exit.svg";
import "./Header.scss";
import {
  changePassword,
  changeUsername,
  userLogout,
} from "./../../../redux/actions/user/user";
import { Notice } from "../../UI/Notice/Notice";

const HeaderInner = () => {
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogout(accessToken));
    dispatch(changePassword(""));
    dispatch(changeUsername(""));
  };

  return (
    <header className="header">
      <ul className="header__list">
        <Notice></Notice>
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
              <Button
                className="header__account-button"
                onClick={() => {
                  clickHandler();
                }}
                type="warning"
              >
                <span className="header__account-text">Выйти</span>
                <img src={exit} alt="" width="15px" height="15px" />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export const Header = memo(HeaderInner);
