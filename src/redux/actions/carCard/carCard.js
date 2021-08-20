import {
  GET_EDIT_CAR,
  CANCEL_EDIT_CAR,
  CHANGE_MODEL_CAR,
  CHANGE_DESCRIPTION_CAR,
  CHANGE_TYPE_CAR,
  CHANGE_COLORS_CAR,
  CHANGE_PRICE_MIN_CAR,
  CHANGE_PRICE_MAX_CAR,
  ADD_COLOR,
} from "../../reducers/carCard/carCard";
import api from "../../../axios/axios";
import { OPEN } from "./../../reducers/notice/notice";

export const addColor = (value) => {
  return {
    type: ADD_COLOR,
    payload: value,
  };
};

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

export const cancelEditCar = () => {
  return {
    type: CANCEL_EDIT_CAR,
    payload: null,
  };
};

export const sendChangesCar = (id, car) => async (dispatch) => {
  try {
    await api
      .put(
        `db/car/${id}`,
        JSON.stringify(car, (key, value) => {
          if ((key === "createdAt") | "updatedAt") {
            return undefined;
          }
          return value;
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => dispatch({ type: OPEN, payload: true }));
  } catch (e) {
    console.error(e);
  }
};

export const deleteChangesCar = (id, car) => async (dispatch) => {
  try {
    await api
      .delete(
        `db/car/${id}`,
        JSON.stringify(car, (key, value) => {
          if ((key === "createdAt") | "updatedAt") {
            return undefined;
          }
          return value;
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => dispatch({ type: OPEN, payload: true }));
  } catch (e) {
    console.error(e);
  }
};

export const addChangesCar = (id, car) => async (dispatch) => {
  try {
    await api
      .post(
        `db/car/${id}`,
        JSON.stringify(car, (key, value) => {
          if ((key === "createdAt") | "updatedAt") {
            return undefined;
          }
          return value;
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => dispatch({ type: OPEN, payload: true }));
  } catch (e) {
    console.error(e);
  }
};
