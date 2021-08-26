import {
  CHANGE_COLOR,
  GET_ORDER,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  CHANGE_CAR,
  CHANGE_CITY,
  CHANGE_POINT,
  CHANGE_PRICE,
  CHANGE_IS_FULL_TANK,
  CHANGE_IS_RIGHT_WHEEL,
  CHANGE_IS_NEED_CHILD_CHAIR,
  CHANGE_RATE,
  CANCEL_CHANGE_ORDER,
  CHANGE_ORDER_STATUS,
} from "../../reducers/orderCard/orderCard";
import api from "../../../axios/axios";
import { showLoader } from "../loader/loader";
import { openNotice, warningNotice } from "../notice/notice";

export const changeOrderStatus = (status) => {
  return {
    type: CHANGE_ORDER_STATUS,
    payload: status,
  };
};

export const changeIsFullTank = (bool) => {
  return {
    type: CHANGE_IS_FULL_TANK,
    payload: bool,
  };
};

export const changeRate = (rate) => {
  return {
    type: CHANGE_RATE,
    payload: rate,
  };
};

export const changeIsNeedChildChair = (bool) => {
  return {
    type: CHANGE_IS_NEED_CHILD_CHAIR,
    payload: bool,
  };
};
export const changeIsRightWheel = (bool) => {
  return {
    type: CHANGE_IS_RIGHT_WHEEL,
    payload: bool,
  };
};

export const changeCar = (car) => {
  return {
    type: CHANGE_CAR,
    payload: car,
  };
};

export const changePrice = (val) => {
  return {
    type: CHANGE_PRICE,
    payload: val,
  };
};

export const changeCity = (city) => {
  return {
    type: CHANGE_CITY,
    payload: city,
  };
};

export const changePoint = (point) => {
  return {
    type: CHANGE_POINT,
    payload: point,
  };
};

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    payload: order,
  };
};

export const changeColor = (value) => {
  return {
    type: CHANGE_COLOR,
    payload: value,
  };
};

export const changeDateTo = (value) => {
  return {
    type: CHANGE_DATE_TO,
    payload: value,
  };
};

export const changeDateFrom = (value) => {
  return {
    type: CHANGE_DATE_FROM,
    payload: value,
  };
};

export const addOrder = (order, empty) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api
      .post(`db/order/`, JSON.stringify(order), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300)
          return dispatch(openNotice(true));
        else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(getOrder(empty));
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const deleteOrder = (id, empty) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api
      .delete(`db/order/${id}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300)
          return dispatch(openNotice(true));
        else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(getOrder(empty));
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const changeOrder = (id, order, empty) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api
      .put(`db/order/${id}`, JSON.stringify(order), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300)
          return dispatch(openNotice(true));
        else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(getOrder(empty));
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const cancelChangeOrder = () => {
  return {
    type: CANCEL_CHANGE_ORDER,
    payload: null,
  };
};
