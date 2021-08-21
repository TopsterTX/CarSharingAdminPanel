import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import "./Setting.scss";

export function Setting({
  title,
  type,
  children,
  onClickApply,
  onClickCancel,
  onClickDelete,
  onClickCreate,
}) {
  const { editCar } = useSelector((state) => state.carCard);

  const checkText = (key, obj) => {
    if (key in obj) {
      return "Применить";
    } else {
      return "Создать";
    }
  };

  const applyOrCreateHandler = () => {
    if (checkText("updatedAt", editCar) === "Применить") {
      return onClickApply;
    } else {
      return onClickCreate;
    }
  };

  return (
    <form action="#" type="submit" className="setting">
      <div className="setting__block">
        <div className="setting__container">
          <h2 className="setting__title">{title}</h2>
          <div className="setting__main">{children}</div>
          <div className="setting__buttons">
            <div className="setting__buttons-wrapper">
              <Button onClick={applyOrCreateHandler()}>
                {checkText("updatedAt", editCar)}
              </Button>
              <Button type={"cancel"} onClick={onClickCancel}>
                Отменить
              </Button>
            </div>
            <Button type={"warning"} onClick={onClickDelete}>
              Удалить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
