import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import { v4 as uuidv4 } from "uuid";
import { getEditCar } from "../../../redux/actions/carCard/carCard";
import "./CarsItem.scss";
import { ButtonsContainer } from "./../../UI/ButtonsContainer/ButtonsContainer";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import { openedDeletePopup } from "../../../redux/actions/warningPopup/warningPopup";
import { deleteCar } from "../../../redux/actions/carCard/carCard";

export function CarsItem({ car }) {
  const dispatch = useDispatch();
  let src;

  (function imageHandler() {
    if (car.thumbnail.path.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${car.thumbnail.path}`;
    } else {
      src = car.thumbnail.path;
    }
  })();

  return (
    <section className="car__item">
      <ul className="car__item-container">
        <li className="car__item-part car__item-part --full-width">
          <div className="car__item-part --first-block">
            <img src={src} alt="image" className="car__image" />
            <div className="car__info">
              <p className="car__model">{car.name}</p>
              <p className="car__description">{car.description}</p>
            </div>
          </div>
          <div>
            <ul className="car__colors">
              <span>Цвета:</span>
              {car.colors.map((el) => {
                return (
                  <li className="car__colors-item" key={uuidv4()}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>

        <li className="car__item-part">
          <span className="car__price">
            {car.priceMin} ₽ - {car.priceMax} ₽
          </span>
        </li>
        <li className="car__item-part">
          <ButtonsContainer>
            <ButtonRoute
              to={"/admin/panel/card_car"}
              type={"default"}
              onClick={() => dispatch(getEditCar(car))}
            >
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/main"}
              type={"warning"}
              onClick={() => dispatch(openedDeletePopup(true))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
      <WarningPopup type={"delete"} onClick={() => dispatch(deleteCar(car.id))}>
        Вы действительно хотите удалить машину ?
      </WarningPopup>
    </section>
  );
}
