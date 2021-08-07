import { USER_LOGIN } from "../../reducers/user/user";
import { BASE_URL } from "./../../../constants";

export const userLogin = (bool) => {
  return {
    type: USER_LOGIN,
    payload: bool,
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
      .then((res) => dispatch(userLogin(true)));
  } catch (e) {
    console.error(e);
  }
};
