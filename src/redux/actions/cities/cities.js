import api from "../../../axios/axios";
import { warningNotice, openNotice } from "../notice/notice";
import { showLoader } from "../loader/loader";
import { GET_CITIES, GET_CITIES_ON_PAGE } from "../../reducers/cities/cities";

export const getCities = () => async (dispatch) => {
  try {
    dispatch(showLoader(true));
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
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    console.error(e);
  }
};

export const getCitiesOnPage =
  (page = 0) =>
  async (dispatch) => {
    try {
      dispatch(showLoader(true));
      return await api(`db/city?limit=5&page=${page}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return dispatch({
              type: GET_CITIES_ON_PAGE,
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
        .finally((res) => {
          dispatch(showLoader(false));
        });
    } catch (e) {
      console.error(e);
    }
  };
