import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink to="/admin/panel/main" className="footer__link">
              Главная страница
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/admin/panel/main" className="footer__link">
              Ссылка
            </NavLink>
          </li>
        </ul>
        <div className="footer__footer">
          <span className="footer__copyright">
            Copyright &copy; 2020 Simbirsoft
          </span>
        </div>
      </div>
    </footer>
  );
};
