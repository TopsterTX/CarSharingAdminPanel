import {
  CANCEL,
  APPLY,
  DELETE,
  CREATE,
} from "../../reducers/warningPopup/warningPopup";

export const openedCancelPopup = (bool) => {
  return {
    type: CANCEL,
    payload: bool,
  };
};

export const openedCreatePopup = (bool) => {
  return {
    type: CREATE,
    payload: bool,
  };
};

export const openedApplyPopup = (bool) => {
  return {
    type: APPLY,
    payload: bool,
  };
};

export const openedDeletePopup = (bool) => {
  return {
    type: DELETE,
    payload: bool,
  };
};
