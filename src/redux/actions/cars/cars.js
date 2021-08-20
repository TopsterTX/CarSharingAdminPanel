import { GET_CARS } from "../../reducers/cars/cars";
import api from "../../../axios/axios";

export const getCars = (page) => async (dispatch) => {
  try {
    await api
      .get(`db/car?limit=3&page=${page}`, {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
      .then((res) => dispatch({ type: GET_CARS, payload: res.data.data }));
  } catch (e) {
    console.error(e);
  }
};
