import api from "../../../axios/axios";
import { GET_POINTS, GET_POINTS_ON_PAGE } from "../../reducers/address/address";

import { openNotice, warningNotice } from "../notice/notice";

export const getPointsOnPage =
  (page = 0) =>
  async (dispatch) => {
    try {
      return await api(`db/point?limit=5&page=${page}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return dispatch({
              type: GET_POINTS_ON_PAGE,
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
      })
      
  } catch (e) {
    console.error(e);
  }
};
