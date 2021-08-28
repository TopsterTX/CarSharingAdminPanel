import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { Selector } from "../Selector/Selector";
import { Button } from "../Button/Button";
import "./Filter.scss";

const FilterInner = ({ filterItems, buttons, addonComponent = <></> }) => {
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
            ? buttons.map(({ text, id, type, onClick }) => {
                return (
                  <div className="filter__button-wrapper-item">
                    <Button key={id} type={type} onClick={onClick}>
                      {text}
                    </Button>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      {addonComponent}
    </section>
  );
};

FilterInner.propTypes = {
  filterItems: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export const Filter = memo(FilterInner);
