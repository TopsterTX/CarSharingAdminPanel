import React, { useState } from "react";
import { Selector } from "../Selector/Selector";
import { Button } from "../Button/Button";
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
                return <Selector text={el.text} key={el.id} />;
              })
            : ""}
        </div>
        <div className="filter__button-wrapper">
          {buttons
            ? buttons.map((el) => {
                return <Button text={el.text} key={el.id} type={el.type} />;
              })
            : ""}
        </div>
      </div>
    </section>
  );
};
