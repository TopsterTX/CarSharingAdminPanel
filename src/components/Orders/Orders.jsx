import React from "react";
import "./Orders.scss";
import { OrderItem } from "./OrderItem/OrderItem";
import { Pages } from "./Pages/Pages";
import { Filter } from "./Filter/Filter";

export const Orders = () => {
  return (
    <section className="orders">
      <div className="orders__container">
        <h2 className="orders__title">Заказы</h2>
        <div className="orders__block">
          <div className="orders__filters">
            <Filter />
          </div>
          <div className="orders__main">
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
          <div className="orders__pages">
            <Pages />
          </div>
        </div>
      </div>
    </section>
  );
};
