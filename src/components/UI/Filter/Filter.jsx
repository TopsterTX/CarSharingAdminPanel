import React, { useState } from "react";
import PropTypes from "prop-types";
import Selector from "../Selector/Selector";
import { Button } from "../Button/Button";
import "./Filter.scss";

const Filter = ({ filterItems, buttons }) => {
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
            ? filterItems.map(({ text, id }) => {
                return (
                  <div className="filter__item" key={id}>
                    <Selector>{text}</Selector>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="filter__button-wrapper">
          {buttons
            ? buttons.map(({ text, id, type }) => {
                return (
                  <Button key={id} type={type}>
                    {text}
                  </Button>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
};

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default Filter;
