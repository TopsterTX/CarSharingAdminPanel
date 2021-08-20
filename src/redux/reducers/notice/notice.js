const defaultState = {
  isOpenNotice: true,
};

const reduce = "NOTICE__";
export const OPEN = `${reduce}OPEN`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case OPEN:
      return {
        ...state,
        isOpenNotice: payload,
      };
    default:
      return state;
  }
};
