import React from "react";
import { NavLink } from "react-router-dom";
import { Buttons } from "../../UI/Buttons/Buttons";
import "./CarsItem.scss";

export function CarsItem({ car }) {
  return (
    <section className="car__item">
      <ul className="car__item-container">
        <li className="car__item-part car__item-part --full-width">
          <li className="car__item-part --first-block">
            <img src="" alt="image" className="car__image" />
            <div className="car__info">
              <p className="car__model">ELANTRA</p>
              <p className="car__description">
                Супер пупер автомобиль для повседневной жизни
              </p>
            </div>
          </li>
          <li>
            <ul className="car__colors">
              <span>Цвета:</span>
              <li className="car__colors-item">Красный,</li>
              <li className="car__colors-item">Синий,</li>
              <li className="car__colors-item">Чёрный</li>
            </ul>
          </li>
        </li>

        <li className="car__item-part">
          <span className="car__price">10 000 - 20 000</span>
        </li>
        <li className="car__item-part">
          <Buttons />
        </li>
      </ul>
    </section>
  );
}
