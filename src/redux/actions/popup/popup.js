import { CHANGE_POPUP, CREATE_POPUP } from "../../reducers/popup/popup";

export const changePopup = (bool) => {
  return {
    type: CHANGE_POPUP,
    payload: bool,
  };
};

export const createPopup = (bool) => {
  return {
    type: CREATE_POPUP,
    payload: bool,
  };
};
