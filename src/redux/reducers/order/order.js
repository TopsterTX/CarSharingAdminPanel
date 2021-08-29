import { v4 as uuidv4 } from "uuid";

const defaultState = {
  configureFilter: {
    filterItems: [
      {
        id: uuidv4(),
        text: "За неделю",
      },
      {
        id: uuidv4(),
        text: "ELANTRA",
      },
      {
        id: uuidv4(),
        text: "Ульяновск",
      },
      {
        id: uuidv4(),
        text: "В процессе",
      },
    ],
    buttons: [
      {
        id: uuidv4(),
        text: "Применить",
      },
    ],
  },
  orders: [],
  rates: [],
  ratesType: [],
  orderStatus: [],
  ordersOnPage: [],
  count: 0,
  limit: 3,
};

const reduce = "ORDER__";
export const GET_RATES = `${reduce}GET_RATES`;
export const GET_RATES_TYPE = `${reduce}GET_RATES_TYPE`;
export const GET_ORDER_STATUS = `${reduce}GET_ORDER_STATUS`;
export const GET_ORDERS_ON_PAGE = `${reduce}GET_ORDERS_ON_PAGE`;
export const GET_COUNT = `${reduce}GET_COUNT`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
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
