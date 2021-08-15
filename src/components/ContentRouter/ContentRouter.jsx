import React from "react";
import { Route } from "react-router-dom";
import { Orders } from "./../Orders/Orders";
import { Entities } from "./../Entities/Entities";
import { CarCard } from "./../CarCard/CarCard";
import {OrderCard} from './../OrderCard/OrderCard'
import Cars from "./../Cars/Cars";


export const ContentRouter = () => {
  return (
    <React.Fragment>
      <Route path="/admin/panel/main" render={() => <Cars />} />
      <Route path="/admin/panel/entities" render={() => <Entities />} />
      <Route path="/admin/panel/orders" render={() => <Orders />} />
      <Route path="/admin/panel/card_car" render={() => <CarCard />} />
      <Route path="/admin/panel/card_order" render={() => <OrderCard />} />
    </React.Fragment>
  );
};
