import React, { useState } from "react";
import "./Filter.scss";

export const Filter = () => {
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
          <ul className="filter__list">
            <span>За неделю</span>
          </ul>
          <ul className="filter__list">
            <span>ELANTRA</span>
          </ul>
          <ul className="filter__list">
            <span>Ульяновск</span>
          </ul>
          <ul className="filter__list">
            <span>В процессе</span>
          </ul>
        </div>
        <button className="filter__button">Применить</button>
      </div>
    </section>
  );
};
