import React, { memo } from "react";
import PropTypes from "prop-types";
import fuel from "../../../../icons/order_item/gas-station.svg";
import chair from "../../../../icons/order_item/baby-chair.svg";
import wheel from "../../../../icons/order_item/steering-wheel.svg";
import "./CheckboxOrder.scss";

const CheckboxOrderInner = ({ isFullTank, isNeedChildChair, isRightWheel }) => {
  return (
    <div className="checkbox-order">
      <div className={`checkbox-order__item ${isFullTank ? "active" : null}`}>
        <input type="checkbox" className="checkbox-order__input" id="fuel" />
        <label htmlFor="fuel" className="checkbox-order__label">
          <img src={fuel} alt="" width="14px" height="14px" />
          <span>Полный бак</span>
        </label>
      </div>
      <div
        className={`checkbox-order__item ${isNeedChildChair ? "active" : null}`}
      >
        <input type="checkbox" className="checkbox-order__input" id="chair" />
        <label htmlFor="chair" className="checkbox-order__label">
          <img src={chair} alt="" width="14px" height="14px" />
          <span>Детское кресло</span>
        </label>
      </div>
      <div className={`checkbox-order__item ${isRightWheel ? "active" : null}`}>
        <input type="checkbox" className="checkbox-order__input" id="wheel" />
        <label htmlFor="wheel" className="checkbox-order__label">
          <img src={wheel} alt="" width="14px" height="14px" />
          <span>Правый руль</span>
        </label>
      </div>
    </div>
  );
};

CheckboxOrderInner.propTypes = {
  isNeedChildChair: PropTypes.bool.isRequired,
  isFullTank: PropTypes.bool.isRequired,
  isRightWheel: PropTypes.bool.isRequired,
};

export const CheckboxOrder = memo(CheckboxOrderInner);
