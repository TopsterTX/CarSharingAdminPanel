import {
  GET_ORDERS,
  GET_RATES,
  GET_RATES_TYPE,
  GET_ORDER_STATUS,
} from "../../reducers/order/order";
import { showLoader } from "../loader/loader";
import api from "../../../axios/axios";
import { openNotice, warningNotice } from "../notice/notice";

export const getOrder = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api("db/order?limit=3&page=0")
      .then((res) => {
        dispatch({ type: GET_ORDERS, payload: res.data.data });
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getRates = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api("db/rate")
      .then((res) => {
        dispatch({ type: GET_RATES, payload: res.data.data });
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getRatesType = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api("db/rateType")
      .then((res) => {
        dispatch({ type: GET_RATES_TYPE, payload: res.data.data });
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getOrderStatus = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api("db/orderStatus")
      .then((res) => {
        dispatch({ type: GET_ORDER_STATUS, payload: res.data.data });
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};
