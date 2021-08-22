const defaultState = {
  editOrder: {
    orderStatusId: {
      id: "",
      name: "",
    },
    cityId: {
      id: "",
      name: "",
    },
    pointId: {
      id: '',
      cityId: ''
    },
    carId: {},
    color: "",
    dateFrom: "",
    dateTo: "",
    rateId: {},
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
  copyOrder: {
    orderStatusId: {},
    cityId: {},
    pointId: {},
    carId: {},
    color: "",
    dateFrom: "",
    dateTo: "",
    rateId: {},
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
};

const reduce = "ORDER_CARD__";
export const GET_ORDER = `${reduce}GET_ORDER`;
export const CHANGE_COLOR = `${reduce}CHANGE_COLOR`;
export const CHANGE_DATE_FROM = `${reduce}CHANGE_DATE_FROM`;
export const CHANGE_DATE_TO = `${reduce}CHANGE_DATE_TO`;
export const CHANGE_PRICE = `${reduce}CHANGE_PRICE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return {
        ...state,
        editOrder: payload,
        copyOrder: payload,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        editOrder: {
          ...state.editOrder,
          color: payload,
        },
      };
    case CHANGE_DATE_FROM:
      return {
        ...state,
        editOrder: {
          ...state.editOrder,
          dateFrom: payload,
        },
      };
    case CHANGE_DATE_TO:
      return {
        ...state,
        editOrder: {
          ...state.editOrder,
          dateTo: payload,
        },
      };
    default:
      return state;
  }
};
