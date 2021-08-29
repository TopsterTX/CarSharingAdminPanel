import api from "../../../axios/axios";
import { warningNotice, openNotice } from "../notice/notice";
import {
  GET_CITIES,
  GET_CITIES_ON_PAGE,
  GET_COUNT,
} from "../../reducers/cities/cities";
import { showLoader } from "../loader/loader";

export const getCount = (count) => {
  return {
    type: GET_COUNT,
    payload: count,
  };
};

export const getCities = () => async (dispatch) => {
  try {
    return await api("db/city")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_CITIES, payload: res.data.data });
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getCitiesOnPage =
  (limit = 5, page = 0) =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      return await api(`db/city?limit=${limit}&page=${page}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            dispatch({
              type: GET_CITIES_ON_PAGE,
              payload: res.data.data,
            });
            return res;
          } else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error;
          }
        })
        .then((res) => dispatch(getCount(res.data.count)))
        .catch((err) => {
          dispatch(warningNotice(true));
          dispatch(openNotice(true));
        })
        .finally(() => {
          dispatch(showLoader(false));
        });
    } catch (e) {
      console.error(e);
    }
  };
