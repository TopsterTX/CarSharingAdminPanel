import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Selector } from "../../UI/Selector/Selector";
import {
  changeCar,
  changeColor,
} from "../../../redux/actions/orderCard/orderCard";
import "./OrderCardCar.scss";

const OrderCardCarInner = ({ arr1, arr2, sortId1,sortId2,content1, content2,  className, }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={className}>
        <Selector array={arr1} content={"name"} onClick={changeCarHandler}>
          {carId
            ? carId.name.length
              ? carId.name
              : "Модель машины"
            : "Модель машины"}
        </Selector>
      </div>
      <div className={className}>
        <Selector
          array={carId.colors ? colors : []}
          content={"el"}
          onClick={changeColorHandler}
        >
          {color ? color : "Цвет"}
        </Selector>
      </div>
    </>
  );
};

export const OrderCardCar = memo(OrderCardCarInner);
