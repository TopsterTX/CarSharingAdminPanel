const defaultState = {
  isUserLogin: false,
  password: "",
  username: "",
  refreshToken: null,
  accessToken: null,
  userId: null,
  isUserLoginFailed: false,
  basicKey: null,
};

const reduce = "USER__";
export const USER_LOGIN = `${reduce}LOGIN`;
export const CHANGE_USERNAME = `${reduce}CHANGE_USERNAME`;
export const CHANGE_PASSWORD = `${reduce}CHANGE_PASSWORD`;
export const GET_TOKENS = `${reduce}GET_TOKENS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLogin: payload.isUserLogin,
        refreshToken: payload.refresh_token,
        accessToken: payload.access_token,
        userId: payload.user_id,
        isUserLoginFailed: payload.isUserLoginFailed,
        basicKey: payload.basicKey,
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
    case GET_TOKENS:
      return {
        ...state,
        refreshToken: payload.refresh,
        accessToken: payload.access,
      };
    default:
      return state;
  }
};
