import api from "../../../axios/axios";
import { showLoader } from "../loader/loader";
import { warningNotice, openNotice } from "../notice/notice";
import {
  CHANGE_CITY_NAME,
  CANCEL_EDIT_CITY,
} from "../../reducers/citiesCard/citiesCard";

export const changeCityName = (val) => {
  return {
    type: CHANGE_CITY_NAME,
    payload: val,
  };
};

export const cancelEditCity = () => {
  return {
    type: CANCEL_EDIT_CITY,
  };
};

export const addCity = (city) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    return await api
      .post("db/city", JSON.stringify(city), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        dispatch(openNotice(true));
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

export const deleteCity = (id) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    return await api
      .delete(`db/city/${id}`)
      .then((res) => {
        dispatch(openNotice(true));
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

export const changeCity = (city, id) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    return await api
      .put(`db/city${id}`, JSON.stringify(city), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {})
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
