import React from "react";
import { Route } from "react-router-dom";
import { Orders } from "./../Orders/Orders";

export const ContentRouter = () => {
  return (
    <React.Fragment>
      <Route path="/admin/panel/main" />
      <Route path="/admin/panel/main" />
      <Route path="/admin/panel/orders" render={() => <Orders />} />
    </React.Fragment>
  );
};
