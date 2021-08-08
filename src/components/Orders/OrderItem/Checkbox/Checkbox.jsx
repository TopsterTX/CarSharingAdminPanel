import React from "react";
import fuel from "../../../../icons/order_item/gas-station.svg";
import chair from "../../../../icons/order_item/baby-chair.svg";
import wheel from "../../../../icons/order_item/steering-wheel.svg";
import "./Checkbox.scss";

export const Checkbox = () => {
  return (
    <div className="checkbox">
      <div className="checkbox__item active">
        <input type="checkbox" className="checkbox__input" id="fuel" />
        <label htmlFor="fuel" className="checkbox__label">
          <img src={fuel} alt="" width="14px" height="14px" />
          <span>Полный бак</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="chair" />
        <label htmlFor="chair" className="checkbox__label">
          <img src={chair} alt="" width="14px" height="14px" />
          <span>Детское кресло</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="wheel" />
        <label htmlFor="wheel" className="checkbox__label">
          <img src={wheel} alt="" width="14px" height="14px" />
          <span>Правый руль</span>
        </label>
      </div>
    </div>
  );
};
