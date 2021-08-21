const defaultState = {
  isActive: false,
};

const reduce = "LOADER__";
export const SHOW = `${reduce}SHOW`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SHOW:
      return {
        ...state,
        isActive: payload,
      };
    default:
      return state;
  }
};
