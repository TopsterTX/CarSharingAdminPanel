import {
  GET_EDIT_CAR,
  CHANGE_MODEL_CAR,
  CHANGE_DESCRIPTION_CAR,
  CHANGE_TYPE_CAR,
  CHANGE_COLORS_CAR,
  CHANGE_PRICE_MIN_CAR,
  CHANGE_PRICE_MAX_CAR,
} from "../../reducers/carCard/carCard";
// import api from "../../../axios/axios";

export const getEditCar = (car) => {
  return {
    type: GET_EDIT_CAR,
    payload: car,
  };
};

export const changeModelCar = (value) => {
  return {
    type: CHANGE_MODEL_CAR,
    payload: value,
  };
};

export const changeDescriptionCar = (value) => {
  return {
    type: CHANGE_DESCRIPTION_CAR,
    payload: value,
  };
};

export const changeTypeCar = (value) => {
  return {
    type: CHANGE_TYPE_CAR,
    payload: value,
  };
};

export const changeColorsCar = (value) => {
  return {
    type: CHANGE_COLORS_CAR,
    payload: value,
  };
};

export const changePriceMinCar = (value) => {
  return {
    type: CHANGE_PRICE_MIN_CAR,
    payload: value,
  };
};

export const changePriceMaxCar = (value) => {
  return {
    type: CHANGE_PRICE_MAX_CAR,
    payload: value,
  };
};

export const changePhotoCar = (value) => {
  return {
    type: CHANGE_PRICE_MAX_CAR,
    payload: value,
  };
};
