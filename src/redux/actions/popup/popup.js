import { CHANGE_POPUP } from "../../reducers/popup/popup";

export const changePopup = (bool) => {
  return {
    type: CHANGE_POPUP,
    payload: bool,
  };
};
