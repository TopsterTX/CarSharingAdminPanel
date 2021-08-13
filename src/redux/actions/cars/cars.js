import { GET_CARS } from "../../reducers/cars/cars";
import api from "../../../axios/axios";

export const getCars = (page) => async (dispatch) => {
  try {
    await api
      .get(`db/car?limit=3&page=${page}`)
      .then((res) => dispatch({type: GET_CARS, payload: res.data.data}));
  } catch (e) {
    console.error(e);
  }
};
