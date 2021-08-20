import React from "react";
import car from "../../../images/car.png";
import { CheckboxOrder } from "./CheckboxOrder/CheckboxOrder";
import { Info } from "./Info/Info";
import { Buttons } from "../../UI/Buttons/Buttons";
import "./OrderItem.scss";

export const OrderItem = () => {
  const buttonsProps = {
    buttons: [{ type: "primary" }, { type: "warning" }, { type: "default" }],
  };

  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part order__item-part--wrapper">
          <div className="order__item-part order__item-part--full-width">
            <img src={car} alt="" className="order__item-image" />
            <Info />
          </div>
          <CheckboxOrder />
        </li>
        <li className="order__item-part">
          <span className="order__item-price">4 300 ₽</span>
        </li>
        <li className="order__item-part">
          <Buttons buttonsProps={buttonsProps} />
        </li>
      </ul>
    </section>
  );
};
