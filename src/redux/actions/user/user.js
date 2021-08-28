import {
  USER_LOGIN,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  GET_TOKENS,
} from "../../reducers/user/user";
import api from "../../../axios/axios";
import { showLoader } from "./../loader/loader";
import { warningNotice } from "../notice/notice";
import { openNotice } from "../notice/notice";

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
    dispatch(showLoader(true));
    await api
      .post("auth/login", body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicKey}`,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch(
            userLogin(
              true,
              res.data.refresh_token,
              res.data.access_token,
              res.data.user_id,
              false,
              basicKey
            )
          );
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(userLogin(false, null, null, null, true));
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally((res) => {
        dispatch(showLoader(false));
      });
  } catch (e) {
    dispatch(userLogin(false, null, null, null, true));
  }
};

export const userLogout = (access) => async (dispatch) => {
  try {
    dispatch(showLoader(true));
    await api
      .post("auth/logout")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return dispatch(userLogin(false, null, null, null, false, null));
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .catch((err) => {
        dispatch(warningNotice(true));
        dispatch(openNotice(true));
      })
      .finally(() => {
        dispatch(showLoader(false));
      });
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
