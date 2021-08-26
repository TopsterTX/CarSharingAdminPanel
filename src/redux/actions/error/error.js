import { SHOW, GET_STATUS } from "../../reducers/error/error";

export const showError = (bool) => {
  return {
    type: SHOW,
    payload: bool,
  };
};

export const getStatus = (status) => {
    return {
        type: GET_STATUS,
        payload: status
    }
}
