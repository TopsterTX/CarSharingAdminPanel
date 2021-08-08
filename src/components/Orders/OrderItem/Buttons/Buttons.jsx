import React from "react";
import "./Buttons.scss";

export const Buttons = () => {
  return (
    <section className="buttons">
      <ul className="buttons__container">
        <li className="buttons__item buttons__item--primary">
          <span className="buttons__text ">Готов</span>
        </li>
        <li className="buttons__item  buttons__item--warning">
          <span className="buttons__text ">Отмена</span>
        </li>
        <li className="buttons__item  buttons__item--default">
          <span className="buttons__text ">Изменить</span>
        </li>
      </ul>
    </section>
  );
};
