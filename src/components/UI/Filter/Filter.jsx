import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { Selector } from "../Selector/Selector";
import { Button } from "../Button/Button";
import "./Filter.scss";
import { Input } from "./../Input/Input";

const FilterInner = ({
  onClickApply = () => {},
  onClickReset = () => {},
  children = <></>,
  addonComponent = <></>,
}) => {
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
        <div className="filter__wrapper">{children}</div>
        <div className="filter__button-wrapper">
          <div className="filter__button-wrapper-item">
            <Button onClick={onClickApply}>Применить</Button>
          </div>
          <div className="filter__button-wrapper-item">
            <Button type="warning" onClick={onClickReset}>
              Сбросить
            </Button>
          </div>
        </div>
      </div>
      {addonComponent}
    </section>
  );
};

FilterInner.propTypes = {
  onClickApply: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
  addonComponent: PropTypes.elementType.isRequired,
};

export const Filter = memo(FilterInner);
