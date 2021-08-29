import {
  GET_RATES,
  GET_RATES_TYPE,
  GET_ORDER_STATUS,
  GET_COUNT,
  GET_ORDERS_ON_PAGE,
} from "../../reducers/order/order";
import api from "../../../axios/axios";
import { openNotice, warningNotice } from "../notice/notice";
import { showLoader } from "./../loader/loader";

export const getCount = (count) => {
  return {
    type: GET_COUNT,
    payload: count,
  };
};

export const getOrderOnPage =
  (limit = 3, page) =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      await api(`db/order?limit=${limit}&page=${page}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            dispatch({ type: GET_ORDERS_ON_PAGE, payload: res.data.data });
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

export const getRates = () => async (dispatch) => {
  try {
    await api("db/rate")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_RATES, payload: res.data.data });
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

export const getOrderStatus = () => async (dispatch) => {
  try {
    await api("db/orderStatus")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_ORDER_STATUS, payload: res.data.data });
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
