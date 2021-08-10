import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "./OrderItem/OrderItem";
import { Pages } from "./Pages/Pages";
import { Filter } from "./Filter/Filter";
import "./Orders.scss";

export const Orders = () => {
  const { configureFilter } = useSelector((state) => state.order);

  return (
    <section className="orders">
      <div className="orders__container">
        <h2 className="orders__title">Заказы</h2>
        <div className="orders__block">
          <div className="orders__filters">
            <Filter {...configureFilter} />
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
