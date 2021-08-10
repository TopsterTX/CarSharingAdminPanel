import React from "react";
import "./Orders.scss";
import { OrderItem } from "./OrderItem/OrderItem";
import { Pages } from "./Pages/Pages";
import { Filter } from "./Filter/Filter";
import { v4 as uuidv4 } from "uuid";

export const Orders = () => {
  const configureFilter = {
    filterItems: [
      {
        id: uuidv4(),
        text: "За неделю",
      },
      {
        id: uuidv4(),
        text: "ELANTRA",
      },
      {
        id: uuidv4(),
        text: "Ульяновск",
      },
      {
        id: uuidv4(),
        text: "В процессе",
      },
    ],
    buttons: [
      {
        id: uuidv4(),
        className: "filter__button",
        text: "Применить",
      },
    ],
  };

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
