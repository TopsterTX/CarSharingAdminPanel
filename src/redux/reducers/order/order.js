import { v4 as uuidv4 } from "uuid";

const defaultState = {
  orders: [],
  rates: [],
  ratesType: [],
  orderStatus: [],
  ordersOnPage: [],
  count: 0,
  limit: 3,
  changedCity: {},
  inputMinPrice: "",
  inputMaxPrice: "",
  page: 1,
};

const reduce = "ORDER__";
export const GET_RATES = `${reduce}GET_RATES`;
export const GET_COUNT = `${reduce}GET_COUNT`;
export const CHANGE_PAGE = `${reduce}CAHNGE_PAGE`;
export const CHANGED_CITY = `${reduce}CHANGED_CITY`;
export const GET_RATES_TYPE = `${reduce}GET_RATES_TYPE`;
export const GET_ORDER_STATUS = `${reduce}GET_ORDER_STATUS`;
export const GET_ORDERS_ON_PAGE = `${reduce}GET_ORDERS_ON_PAGE`;
export const CHANGE_FILTER_MIN_PRICE = `${reduce}CHANGE_FILTER_MIN_PRICE`;
export const CHANGE_FILTER_MAX_PRICE = `${reduce}CHANGE_FILTER_MAX_PRICE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    case CHANGED_CITY:
      return {
        ...state,
        changedCity: payload,
      };
    case CHANGE_FILTER_MIN_PRICE:
      return {
        ...state,
        inputMinPrice: payload,
      };
    case CHANGE_FILTER_MAX_PRICE: {
      return {
        ...state,
        inputMaxPrice: payload,
      };
    }
    case GET_COUNT:
      return {
        ...state,
        count: payload,
      };
    case GET_ORDERS_ON_PAGE:
      return {
        ...state,
        ordersOnPage: payload,
      };
    case GET_RATES:
      return {
        ...state,
        rates: payload,
      };
    case GET_RATES_TYPE:
      return {
        ...state,
        ratesType: payload,
      };
    case GET_ORDER_STATUS:
      return {
        ...state,
        orderStatus: payload,
      };
    default:
      return state;
  }
};
