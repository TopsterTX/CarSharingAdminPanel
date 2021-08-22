import api from "../../../axios/axios";
import { GET_CITIES, GET_POINTS } from "../../reducers/address/address";

export const getCities = () => async (dispatch) => {
  try {
    return await api("db/city").then((res) =>
      dispatch({ type: GET_CITIES, payload: res.data.data })
    );
  } catch (e) {
    console.error(e);
  }
};

export const getPoints = () => async (dispatch) => {
  try {
    return await api("db/point").then((res) => {
      dispatch({ type: GET_POINTS, payload: res.data.data });
    });
  } catch (e) {
    console.error(e);
  }
};
