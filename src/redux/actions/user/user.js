import {
  USER_LOGIN,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  GET_TOKENS,
} from "../../reducers/user/user";
import api from "../../../axios/axios";

export const userLogin = (
  isUserLogin,
  refreshToken,
  accessToken,
  userId,
  isUserLoginFailed,
  basicKey
) => {
  return {
    type: USER_LOGIN,
    payload: {
      isUserLogin,
      refresh_token: refreshToken,
      access_token: accessToken,
      user_id: userId,
      isUserLoginFailed,
      basicKey,
    },
  };
};

export const userAuthorize = (body, basicKey) => async (dispatch) => {
  try {
    await api
      .post("auth/login", body, {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          "Content-Type": "application/json",
          Authorization: `Basic ${basicKey}`,
        },
      })
      .then((res) =>
        dispatch(
          userLogin(
            true,
            res.data.refresh_token,
            res.data.access_token,
            res.data.user_id,
            false,
            basicKey
          )
        )
      );
  } catch (e) {
    dispatch(userLogin(false, null, null, null, true));
  }
};

export const userLogout = (access) => async (dispatch) => {
  try {
    await api
      .post(
        "auth/logout",
        {},
        {
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => dispatch(userLogin(false, null, null, null, false, null)));
  } catch (e) {
    console.error(e);
  }
};

export const changeUsername = (value) => {
  return {
    type: CHANGE_USERNAME,
    payload: value,
  };
};

export const changePassword = (value) => {
  return {
    type: CHANGE_PASSWORD,
    payload: value,
  };
};

export const userRefreshAuthorize = (refresh, basicKey) => async (dispatch) => {
  try {
    await api
      .post(
        "auth/refresh",
        {
          refresh_token: `${refresh}`,
        },
        {
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: `Basic ${basicKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) =>
        dispatch(
          userLogin(
            true,
            res.data.refresh_token,
            res.data.access_token,
            res.data.user_id,
            false,
            basicKey
          )
        )
      );
  } catch (e) {
    console.error(e);
  }
};

export const getTokens = (access, refresh) => {
  return {
    type: GET_TOKENS,
    payload: {
      access,
      refresh,
    },
  };
};
