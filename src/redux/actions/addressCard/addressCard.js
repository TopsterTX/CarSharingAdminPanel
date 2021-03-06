import { openNotice, warningNotice } from "../notice/notice";
import api from "./../../../axios/axios";

import {
  CHANGE_POINT_NAME,
  CHANGE_ADDRESS_NAME,
  CHANGE_CITY_IN_POINT,
  CANCEL_EDIT_POINT,
  GET_EDIT_POINT,
} from "../../reducers/addressCard/addressCard";

export const changePointName = (val) => {
  return {
    type: CHANGE_POINT_NAME,
    payload: val,
  };
};

export const getEditPoint = (obj) => {
  return {
    type: GET_EDIT_POINT,
    payload: obj,
  };
};

export const changeAddressName = (val) => {
  return {
    type: CHANGE_ADDRESS_NAME,
    payload: val,
  };
};

export const changeCityInPoint = (val) => {
  return {
    type: CHANGE_CITY_IN_POINT,
    payload: val,
  };
};

export const cancelEditPoint = () => {
  return {
    type: CANCEL_EDIT_POINT,
  };
};

export const addPoint = (point) => async (dispatch) => {
  try {
    
    return await api
      .post("db/point", JSON.stringify(point), {
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
        dispatch(
          getEditPoint({
            id: "",
            address: "",
            name: "",
            cityId: {
              name: "",
              id: "",
            },
          })
        );
        
      });
  } catch (e) {
    console.error(e);
  }
};

export const deletePoint = (id) => async (dispatch) => {
  try {
    
    return await api
      .delete(`db/point/${id}`)
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
        dispatch(
          getEditPoint({
            id: "",
            address: "",
            name: "",
            cityId: {
              name: "",
              id: "",
            },
          })
        );
        
      });
  } catch (e) {
    console.error(e);
  }
};

export const changePoint = (point, id) => async (dispatch) => {
  try {
    
    return await api
      .put(`db/point/${id}`, JSON.stringify(point), {
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
        dispatch(
          getEditPoint({
            id: "",
            address: "",
            name: "",
            cityId: {
              name: "",
              id: "",
            },
          })
        );
        
      });
  } catch (e) {
    console.error(e);
  }
};
