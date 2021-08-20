import { GET_ORDERS } from "../../reducers/order/order";
import api from "../../../axios/axios";

export const getOrder = (access) => async (dispatch) => {
  try {
    await api("entity").then((res) => console.log(res));
  } catch (e) {
    console.error(e);
  }
};
