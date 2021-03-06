const defaultState = {
  status: "504",
  isShow: false,
};

const reduce = "ERROR__";
export const SHOW = `${reduce}SHOW`;
export const GET_STATUS = `${reduce}GET_STATUS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_STATUS:
      return {
        ...state,
        status: payload,
      };
    case SHOW:
      return {
        ...state,
        isShow: payload,
      };
    default:
      return state;
  }
};
