import React from "react";
import { Route } from "react-router-dom";
import { Orders } from "./../Orders/Orders";
import { Entities } from "./../Entities/Entities";
import Cars from "./../Cars/Cars";

export const ContentRouter = () => {
  return (
    <React.Fragment>
      <Route path="/admin/panel/main" render={() => <Cars />} />
      <Route path="/admin/panel/entities" render={() => <Entities />} />
      <Route path="/admin/panel/orders" render={() => <Orders />} />
    </React.Fragment>
  );
};
