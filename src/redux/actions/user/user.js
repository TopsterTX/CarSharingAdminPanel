import {
  USER_LOGIN,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from "../../reducers/user/user";
import { BASE_URL } from "./../../../constants";

export const userLogin = (bool, refreshToken, accessToken, userId) => {
  return {
    type: USER_LOGIN,
    payload: {
      isUserLogin: bool,
      refreshToken,
      accessToken,
      userId,
    },
  };
};

export const userAuthorize = (body, key) => async (dispatch) => {
  try {
    await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        Authorization: `Basic ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch(userLogin(true, res.refresh_token, res.access_token, res.user_id))
      );
  } catch (e) {
    console.error(e);
  }
};

export const userLogout = (access) => async (dispatch) => {
  try {
    await fetch(`${BASE_URL}auth/logout`, {
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => dispatch(userLogin(false, null, null, null)));
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
