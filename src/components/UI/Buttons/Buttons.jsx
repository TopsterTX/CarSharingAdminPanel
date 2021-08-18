import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Buttons.scss";

export const Buttons = ({ buttonsProps }) => {
  return (
    <section className="buttons">
      <ul className="buttons__container">
        {buttonsProps
          ? buttonsProps.buttons.map((el) => {
              let id = uuidv4();
              return (
                <NavLink
                  to={el.to}
                  className={`buttons__item buttons__item--${el.type}`}
                  key={id}
                  onClick={el.onClick}
                >
                  <span className="buttons__text ">
                    {el.type === "primary"
                      ? "Готово"
                      : el.type === "warning"
                      ? "Отмена"
                      : el.type === "default"
                      ? "Изменить"
                      : null}
                  </span>
                </NavLink>
              );
            })
          : null}
      </ul>
    </section>
  );
};
