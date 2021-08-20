const defaultState = {
  popupIsCancel: false,
  popupIsApply: false,
  popupIsDelete: false,
};

const reduce = "WARNING-POPUP__";
export const CANCEL = `${reduce}CANCEL`;
export const APPLY = `${reduce}APPLY`;
export const DELETE = `${reduce}DELETE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CANCEL:
      return {
        ...state,
        popupIsCancel: payload,
      };
    case APPLY:
      return {
        ...state,
        popupIsApply: payload,
      };
    case DELETE:
      return {
        ...state,
        popupIsDelete: payload,
      };
    default:
      return state;
  }
};
