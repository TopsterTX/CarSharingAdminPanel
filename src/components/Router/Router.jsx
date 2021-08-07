import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "../Login/Login";
import { Panel } from "../Panel/Panel";
import { useSelector } from "react-redux";
import { checkPropTypes } from "prop-types";
import PropTypes from "prop-types";

export const Router = () => {
  const { isUserLogin } = useSelector((state) => state.user);

  checkPropTypes(PropTypes.bool, isUserLogin);

  return isUserLogin ? (
    <React.Fragment>
      <Route path="/admin/panel" render={() => <Panel />} />
      <Redirect to="/admin/panel/main" />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Route path="/admin" exact render={() => <Login />} />
      <Redirect to="/admin" />
    </React.Fragment>
  );
};
