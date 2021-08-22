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
};

const reduce = "ORDER";
export const GET_RATES = `${reduce}GET_RATES`;
export const GET_ORDERS = `${reduce}GET_ORDERS`;
export const GET_RATES_TYPE = `${reduce}GET_RATES_TYPE`;
export const GET_ORDER_STATUS = `${reduce}GET_ORDER_STATUS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
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
