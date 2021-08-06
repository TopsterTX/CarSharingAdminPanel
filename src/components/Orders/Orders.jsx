import React from "react";
import "./Orders.scss";
import { OrderItem } from "./OrderItem/OrderItem";

export const Orders = () => {
  return (
    <section className="orders">
      <div className="orders__container">
        <h2 className="orders__title">Заказы</h2>
        <div className="orders__block">
          <div className="orders__filters">
            <div className="orders__inputs">
              <input type="text" className="order__liter" />
              <input type="text" className="order__liter" />
              <input type="text" className="order__liter" />
              <input type="text" className="order__liter" />
            </div>
            <button className="order__button">Применить</button>
          </div>
          <div className="orders__main">
            <OrderItem />
          </div>
          <div className="orders__pages"></div>
        </div>
      </div>
    </section>
  );
};
