import api from "../../../axios/axios";
import { GET_POINTS, GET_POINTS_ON_PAGE } from "../../reducers/address/address";
import { showLoader } from "../loader/loader";
import { openNotice, warningNotice } from "../notice/notice";

export const getPointsOnPage =
  (page = 0) =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      return await api(`db/point?limit=5&page=${page}`)
        .then((res) => {
          dispatch({ type: GET_POINTS_ON_PAGE, payload: res.data.data });
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

export const getPoints = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    return await api("db/point")
      .then((res) => {
        dispatch({ type: GET_POINTS, payload: res.data.data });
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
