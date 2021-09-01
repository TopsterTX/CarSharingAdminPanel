import {
  GET_CARS,
  GET_CARS_ON_PAGE,
  CHANGE_PAGE,
  GET_COUNT,
  GET_CATEGORIES,
  CHANGE_FILTER_MIN_PRICE,
  CHANGE_FILTER_MAX_PRICE,
  CHANGED_CATEGORY,
} from "../../reducers/cars/cars";
import { warningNotice, openNotice } from "../notice/notice";
import api from "../../../axios/axios";
import { showLoader } from "./../loader/loader";

export const changeCategory = (el) => {
  return {
    type: CHANGED_CATEGORY,
    payload: el,
  };
};

export const changeFilterMinPrice = (val) => {
  return {
    type: CHANGE_FILTER_MIN_PRICE,
    payload: val,
  };
};

export const changeFilterMaxPrice = (val) => {
  return {
    type: CHANGE_FILTER_MAX_PRICE,
    payload: val,
  };
};

export const getCount = (count) => {
  return {
    type: GET_COUNT,
    payload: count,
  };
};

export const getCarsOnPage =
  (limit, page, filter = "") =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      return await api
        .get(`db/car?limit=${limit}&page=${page}${filter}`, {
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          },
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
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
        })
        .finally(() => {
          return dispatch(showLoader(false));
        });
    } catch (e) {
      console.error(e);
    }
  };

export const getCategories = () => async (dispatch) => {
  try {
    return await api("db/category")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data,
          });
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
