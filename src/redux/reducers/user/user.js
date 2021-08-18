const defaultState = {
  isUserLogin: true,
};

const reduce = "USER__";
export const USER_LOGIN = `${reduce}LOGIN`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLogin: payload,
      };
    default:
      return state;
  }
};
