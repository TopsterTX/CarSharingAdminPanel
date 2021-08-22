import {
  GET_ORDERS,
  GET_RATES,
  GET_RATES_TYPE,
  GET_ORDER_STATUS,
} from "../../reducers/order/order";
import api from "../../../axios/axios";

export const getOrder = () => async (dispatch) => {
  try {
    await api("db/order?limit=3&page=0").then((res) =>
      dispatch({ type: GET_ORDERS, payload: res.data.data })
    );
  } catch (e) {
    console.error(e);
  }
};

export const getRates = () => async (dispatch) => {
  try {
    await api("db/rate").then((res) =>
      dispatch({ type: GET_RATES, payload: res.data.data })
    );
  } catch (e) {
    console.error(e);
  }
};

export const getRatesType = () => async (dispatch) => {
  try {
    await api("db/rateType").then((res) =>
      dispatch({ type: GET_RATES_TYPE, payload: res.data.data })
    );
  } catch (e) {
    console.error(e);
  }
};

export const getOrderStatus = () => async (dispatch) => {
  try {
    await api("db/orderStatus").then((res) =>
      dispatch({ type: GET_ORDER_STATUS, payload: res.data.data })
    );
  } catch (e) {
    console.error(e);
  }
};
