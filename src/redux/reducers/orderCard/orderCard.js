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
      id: "",
      cityId: "",
      address: "",
      name: "",
    },
    carId: {
      id: "",
      name: "",
      priceMin: 0,
      priceMax: 0,
      description: "",
      colors: [],
      thumbnail: {
        path: "",
        size: 0,
        mimetype: "",
        originalname: "",
      },
      categoryId: {
        id: "",
        name: "",
      },
    },
    color: "",
    dateFrom: "",
    dateTo: "",
    rateId: {
      id: "",
      name: "",
    },
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
  copyOrder: {
    orderStatusId: {
      id: "",
      name: "",
    },
    cityId: {
      id: "",
      name: "",
    },
    pointId: {
      id: "",
      cityId: "",
      address: "",
      name: "",
    },
    carId: {
      id: "",
      name: "",
      priceMin: 0,
      priceMax: 0,
      description: "",
      colors: [],
      thumbnail: {
        path: "",
        size: 0,
        mimetype: "",
        originalname: "",
      },
      categoryId: {
        id: "",
        name: "",
      },
    },
    color: "",
    dateFrom: "",
    dateTo: "",
    rateId: {
      id: "",
      name: "",
    },
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
export const CANCEL_CHANGE_ORDER = `${reduce}CANCEL_CHANGE_ORDER`;
export const CHANGE_DATE_TO = `${reduce}CHANGE_DATE_TO`;
export const CHANGE_PRICE = `${reduce}CHANGE_PRICE`;
export const CHANGE_CAR = `${reduce}CHANGE_CAR`;
export const CHANGE_ORDER_STATUS = `${reduce}CHANGE_ORDER_STATUS`;
export const CHANGE_CITY = `${reduce}CHANGE_CITY`;
export const CHANGE_POINT = `${reduce}CHANGE_POINT`;
export const CHANGE_RATE = `${reduce}CHANGE_RATE`;
export const CHANGE_IS_FULL_TANK = `${reduce}CHANGE_IS_FULL_TANK`;
export const CHANGE_IS_NEED_CHILD_CHAIR = `${reduce}CHANGE_IS_NEED_CHILD_CHAIR`;
export const CHANGE_IS_RIGHT_WHEEL = `${reduce}CHANGE_IS_RIGHT_WHEEL`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_ORDER_STATUS:
      return {
        ...state,
        editOrder: { ...state.editOrder, orderStatusId: payload },
      };
    case CANCEL_CHANGE_ORDER:
      return {
        ...state,
        editOrder: state.copyOrder,
      };
    case CHANGE_IS_FULL_TANK:
      return {
        ...state,
        editOrder: { ...state.editOrder, isFullTank: payload },
      };
    case CHANGE_RATE:
      return {
        ...state,
        editOrder: { ...state.editOrder, rateId: payload },
      };
    case CHANGE_IS_NEED_CHILD_CHAIR:
      return {
        ...state,
        editOrder: { ...state.editOrder, isNeedChildChair: payload },
      };
    case CHANGE_IS_RIGHT_WHEEL:
      return {
        ...state,
        editOrder: { ...state.editOrder, isRightWheel: payload },
      };
    case GET_ORDER:
      return {
        ...state,
        editOrder: payload,
        copyOrder: payload,
      };
    case CHANGE_PRICE:
      return {
        ...state,
        editOrder: {
          ...state.editOrder,
          price: payload,
        },
      };
    case CHANGE_CITY:
      return {
        ...state,
        editOrder: { ...state.editOrder, cityId: payload },
      };
    case CHANGE_POINT:
      return {
        ...state,
        editOrder: { ...state.editOrder, pointId: payload },
      };
    case CHANGE_CAR: {
      return {
        ...state,
        editOrder: { ...state.editOrder, carId: payload },
      };
    }
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
