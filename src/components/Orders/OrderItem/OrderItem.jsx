import React from "react";
import car from '../../../images/car.png'
import "./OrderItem.scss";

export const OrderItem = () => {
  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part">
          <img src={car} alt="" className="order__item-image" />
          <div className="order__item-info">
            <span className="order__item-place">
              ELANTRA в Ульяновск, Нариманова 42
            </span>
            <span className="order__item-date">
              12.06.2019 12:00 - 13.06.2019 12:00
            </span>
            <span className="order__item-color">Цвет: Голубой</span>
          </div>
        </li>
        <li className="order__item-part"></li>
        <li className="order__item-part"></li>
        <li className="order__item-part"></li>
      </ul>
    </section>
  );
};
