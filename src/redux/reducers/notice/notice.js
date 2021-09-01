const defaultState = {
  isOpenNotice: false,
  isWarning: false,
};

const reduce = "NOTICE__";
export const OPEN = `${reduce}OPEN`;
export const WARNING = `${reduce}WARNING`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case OPEN:
      return {
        ...state,
        isOpenNotice: payload,
      };
    case WARNING:
      return {
        ...state,
        isWarning: payload,
      };
    default:
      return state;
  }
};
