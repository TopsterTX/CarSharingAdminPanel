import React from "react";
import car from "../../../images/car.png";
import { Checkbox } from "./Checkbox/Checkbox";
import { Info } from "./Info/Info";
import { Buttons } from "../../UI/Buttons/Buttons";
import "./OrderItem.scss";

export const OrderItem = () => {
  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part order__item-part--wrapper">
          <div className="order__item-part order__item-part--full-width">
            <img src={car} alt="" className="order__item-image" />
            <Info />
          </div>
          <Checkbox />
        </li>
        <li className="order__item-part">
          <span className="order__item-price">4 300 ₽</span>
        </li>
        <li className="order__item-part">
          <Buttons />
        </li>
      </ul>
    </section>
  );
};
