import React, { useState } from "react";
import "./Filter.scss";

export const Filter = ({ filterItems, buttons }) => {
  const [active, setActive] = useState(false);

  return (
    <section className="filter">
      <button
        className="filter__toggler"
        onClick={() => setActive((active) => !active)}
      >
        Фильтры
      </button>
      <div className={`filter__container ${active ? "active" : ""}`}>
        <div className="filter__wrapper">
          {filterItems
            ? filterItems.map((el) => {
                return (
                  <ul className="filter__list" key={el.id}>
                    <span>{el.text}</span>
                  </ul>
                );
              })
            : ""}
        </div>
        <div className="filter__button-wrapper">
          {buttons
            ? buttons.map((el) => {
                return (
                  <button className={el.className} key={el.id}>
                    {el.text}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
};
