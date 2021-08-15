import React from "react";
import { Button } from "../Button/Button";
import "./Setting.scss";

export function Setting({ title, type, children }) {
  return (
    <section className="setting">
      <div className="setting__block">
        <div className="setting__container">
          <h2 className="setting__title">{title}</h2>
          <div className="setting__main">{children}</div>
          <div className="setting__buttons">
            <div className="setting__buttons-wrapper">
              <Button text={"Применить"} />
              <Button type={"cancel"} text={"Отменить"} />
            </div>
            <Button type={"warning"} text={"Удалить"} />
          </div>
        </div>
      </div>
    </section>
  );
}
