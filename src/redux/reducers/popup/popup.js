const defaultState = {
  openedCreatePopup: false,
  openedChangePopup: false,
};

const reduce = "POPUP_";
export const CHANGE_POPUP = `${reduce}CHANGE_POPUP`;
export const CREATE_POPUP = `${reduce}CREATE_POPUP`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_POPUP:
      return {
        ...state,
        openedCreatePopup: payload,
      };
    case CHANGE_POPUP:
      return {
        ...state,
        openedChangePopup: payload,
      };
    default:
      return state;
  }
};
