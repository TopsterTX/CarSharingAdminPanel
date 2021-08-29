import {
  GET_CARS,
  GET_CARS_ON_PAGE,
  CHANGE_PAGE,
  GET_COUNT,
} from "../../reducers/cars/cars";
import { warningNotice, openNotice } from "../notice/notice";
import api from "../../../axios/axios";

export const getCount = (count) => {
  return {
    type: GET_COUNT,
    payload: count,
  };
};

export const getCarsOnPage = (page) => async (dispatch) => {
  try {
    return await api
      .get(`db/car?limit=3&page=${page}`, {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log(res.data);
          dispatch({ type: GET_CARS_ON_PAGE, payload: res.data.data });
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((res) => dispatch(getCount(res.data.count)))
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getCars = () => async (dispatch) => {
  try {
    return await api
      .get(`db/car`, {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_CARS, payload: res.data.data });
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      });
  } catch (e) {
    console.error(e);
  }
};

export const changePage = (value) => {
  return {
    type: CHANGE_PAGE,
    payload: value,
  };
};
