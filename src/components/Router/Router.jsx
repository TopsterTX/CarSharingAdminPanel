import React from "react";
import { Login } from "../Login/Login";
import { useSelector } from "react-redux";
import { checkPropTypes } from "prop-types";
import PropTypes from "prop-types";

export const Router = () => {
  const { isUserLogin } = useSelector((state) => state.user);

  checkPropTypes(PropTypes.bool, isUserLogin);

  return isUserLogin ? (
    <main className="main">
      MAIN BLOCK
      <div></div>
      <div></div>
    </main>
  ) : (
    <Login />
  );
};
