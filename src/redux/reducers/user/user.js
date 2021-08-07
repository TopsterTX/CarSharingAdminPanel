const defaultState = {
  isUserLogin: false,
  password: "",
  username: "",
  refreshToken: null,
  accessToken: null,
  userId: null,
  isUserLoginFailed: false,
};

const reduce = "USER__";
export const USER_LOGIN = `${reduce}LOGIN`;
export const CHANGE_USERNAME = `${reduce}CHANGE_USERNAME`;
export const CHANGE_PASSWORD = `${reduce}CHANGE_PASSWORD`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLogin: payload.isUserLogin,
        refreshToken: payload.refreshToken,
        accessToken: payload.accessToken,
        userId: payload.userId,
        isUserLoginFailed: payload.isUserLoginFailed,
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
};
