const defaultState = {
  isActive: false,
};

const reduce = "POPUP_";
export const CHANGE_POPUP = `${reduce}CHANGE_POPUP`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_POPUP:
      return { ...state, isActive: payload };
    default:
      return state;
  }
};
