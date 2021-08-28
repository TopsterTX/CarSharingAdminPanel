import {
  GET_ORDERS,
  GET_RATES,
  GET_RATES_TYPE,
  GET_ORDER_STATUS,
} from "../../reducers/order/order";
import api from "../../../axios/axios";
import { openNotice, warningNotice } from "../notice/notice";

export const getOrder = () => async (dispatch) => {
  try {
    await api("db/order?limit=3&page=0")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_ORDERS, payload: res.data.data });
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
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
      })
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
      })
  } catch (e) {
    console.error(e);
  }
};
