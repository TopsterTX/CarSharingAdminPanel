import {
  GET_EDIT_CAR,
  CANCEL_EDIT_CAR,
  CHANGE_MODEL_CAR,
  CHANGE_DESCRIPTION_CAR,
  CHANGE_TYPE_CAR,
  CHANGE_COLORS_CAR,
  CHANGE_PRICE_MIN_CAR,
  CHANGE_PRICE_MAX_CAR,
  GET_CATEGORIES,
  DELETE_COLOR,
  ADD_COLOR,
  ADD_IMAGE,
  APPLY_CATEGORY,
} from "../../reducers/carCard/carCard";
import api from "../../../axios/axios";
import { warningNotice, openNotice } from "./../notice/notice";
import { showLoader } from "../loader/loader";

export const addColor = (value) => {
  return {
    type: ADD_COLOR,
    payload: value,
  };
};

export const applyCategory = (category) => {
  return {
    type: APPLY_CATEGORY,
    payload: category,
  };
};

export const getEditCar = (car) => {
  return {
    type: GET_EDIT_CAR,
    payload: car,
  };
};

export const changeModelCar = (value) => {
  return {
    type: CHANGE_MODEL_CAR,
    payload: value,
  };
};

export const changeDescriptionCar = (value) => {
  return {
    type: CHANGE_DESCRIPTION_CAR,
    payload: value,
  };
};

export const changeTypeCar = (value) => {
  return {
    type: CHANGE_TYPE_CAR,
    payload: value,
  };
};

export const changeColorsCar = (value) => {
  return {
    type: CHANGE_COLORS_CAR,
    payload: value,
  };
};

export const changePriceMinCar = (value) => {
  return {
    type: CHANGE_PRICE_MIN_CAR,
    payload: value,
  };
};

export const changePriceMaxCar = (value) => {
  return {
    type: CHANGE_PRICE_MAX_CAR,
    payload: value,
  };
};

export const changePhotoCar = (value) => {
  return {
    type: CHANGE_PRICE_MAX_CAR,
    payload: value,
  };
};

export const cancelEditCar = () => {
  return {
    type: CANCEL_EDIT_CAR,
    payload: null,
  };
};

export const deleteColor = (index) => {
  return {
    type: DELETE_COLOR,
    payload: index,
  };
};

export const getCategories = () => async (dispatch) => {
  try {
    return await api("db/category")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data,
          });
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

export const sendChangesCar = (id, car, emptyCar) => async (dispatch) => {
  try {
    await api
      .put(
        `db/car/${id}`,
        JSON.stringify(car),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.request.status >= 200 && res.request.status < 300) {
          dispatch(openNotice(true));
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
      .finally((res) => {
        dispatch(getEditCar(emptyCar));
      });
  } catch (e) {
    console.error(e);
  }
};

export const addImage = (img) => {
  return {
    type: ADD_IMAGE,
    payload: {
      path: img.path,
      mimetype: img.mimetype,
      originalname: img.originalname,
      size: img.size,
    },
  };
};

export const deleteCar = (id, emptyCar) => (dispatch) => {
  try {
    api
      .delete(`db/car/${id}`)
      .then((res) => {
        if (res.request.status >= 200 && res.request.status < 300) {
          dispatch(openNotice(true));
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch(() => {
        dispatch(showLoader(false));
        dispatch(warningNotice(true));
      })
      .finally(() => {
        dispatch(getEditCar(emptyCar));
      });
  } catch (e) {}
};

export const addCar = (car, emptyCar) => async (dispatch) => {
  try {
    await api
      .post(`db/car/`, JSON.stringify(car), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.request.status >= 200 && res.request.status < 300) {
          dispatch(openNotice(true));
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch(() => {
        dispatch(showLoader(false));
        dispatch(warningNotice(true));
      })
      .finally(() => {
        dispatch(getEditCar(emptyCar));
      });
  } catch (e) {
    console.error(e);
  }
};
