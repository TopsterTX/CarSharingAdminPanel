import {
  CHANGE_COLOR,
  GET_ORDER,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
} from "../../reducers/orderCard/orderCard";

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
