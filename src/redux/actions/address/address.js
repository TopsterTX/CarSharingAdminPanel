import api from "../../../axios/axios";
import {
  GET_COUNT,
  GET_POINTS,
  GET_POINTS_ON_PAGE,
  CHANGE_PAGE,
  CHANGED_CITY,
} from "../../reducers/address/address";
import { openNotice, warningNotice } from "../notice/notice";
import { showLoader } from "./../loader/loader";

export const changeCity = (city) => {
  return {
    type: CHANGED_CITY,
    payload: city,
  };
};

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const getCount = (count) => {
  return {
    type: GET_COUNT,
    payload: count,
  };
};

export const getPointsOnPage =
  (limit = 5, page = 0, filter) =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      return await api(`db/point?limit=${limit}&page=${page}${filter}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            dispatch({
              type: GET_POINTS_ON_PAGE,
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
          return dispatch(showLoader(false));
        });
    } catch (e) {
      console.error(e);
    }
  };

export const getPoints = () => async (dispatch) => {
  try {
    return await api("db/point")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch({ type: GET_POINTS, payload: res.data.data });
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
