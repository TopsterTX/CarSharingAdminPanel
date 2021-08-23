import {
  CHANGE_COLOR,
  GET_ORDER,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  CHANGE_CAR,
  CHANGE_CITY,
  CHANGE_POINT,
  CHANGE_PRICE,
  CHANGE_IS_FULL_TANK,
  CHANGE_IS_RIGHT_WHEEL,
  CHANGE_IS_NEED_CHILD_CHAIR,
} from "../../reducers/orderCard/orderCard";

export const changeIsFullTank = (bool) => {
  return {
    type: CHANGE_IS_FULL_TANK,
    payload: bool,
  };
};
export const changeIsNeedChildChair = (bool) => {
  return {
    type: CHANGE_IS_NEED_CHILD_CHAIR,
    payload: bool,
  };
};
export const changeIsRightWheel = (bool) => {
  return {
    type: CHANGE_IS_RIGHT_WHEEL,
    payload: bool,
  };
};

export const changeCar = (car) => {
  return {
    type: CHANGE_CAR,
    payload: car,
  };
};

export const changePrice = (val) => {
  return {
    type: CHANGE_PRICE,
    payload: val,
  };
};

export const changeCity = (city) => {
  return {
    type: CHANGE_CITY,
    payload: city,
  };
};

export const changePoint = (point) => {
  return {
    type: CHANGE_POINT,
    payload: point,
  };
};

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    payload: order,
  };
};

export const changeColor = (value) => {
  return {
    type: CHANGE_COLOR,
    payload: value,
  };
};

export const changeDateTo = (value) => {
  return {
    type: CHANGE_DATE_TO,
    payload: value,
  };
};

export const changeDateFrom = (value) => {
  return {
    type: CHANGE_DATE_FROM,
    payload: value,
  };
};
