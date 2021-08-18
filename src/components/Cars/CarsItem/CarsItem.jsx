import React from "react";
import { useDispatch } from "react-redux";
import { Buttons } from "../../UI/Buttons/Buttons";
import { getEditCar } from "../../../redux/actions/carCard/carCard";
import "./CarsItem.scss";

export function CarsItem({ car }) {
  const dispatch = useDispatch();
  let src;
  const buttonsProps = {
    buttons: [
      {
        type: "default",
        to: "/admin/panel/card_car",
        onClick: () => dispatch(getEditCar(car)),
      },
    ],
  };

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
                return <li className="car__colors-item">{el}</li>;
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
          <Buttons buttonsProps={buttonsProps} />
        </li>
      </ul>
    </section>
  );
}
