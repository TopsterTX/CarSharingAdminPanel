import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Orders } from "./../Orders/Orders";
import { Address } from "./../Address/Address";
import { Cities } from "../Cities/Cities";
import { CarCard } from "./../CarCard/CarCard";
import { OrderCard } from "./../OrderCard/OrderCard";
import { Error } from "../Error/Error";
import { Cars } from "./../Cars/Cars";

const ContentRouterInner = () => {
  const { isShow } = useSelector((state) => state.error);

  if (isShow) return <Error></Error>;
  else
    return (
      <>
        <Route path="/admin/panel/main" render={() => <Cars />} />
        <Route path="/admin/panel/address" render={() => <Address />} />
        <Route path="/admin/panel/cities" render={() => <Cities />} />
        <Route path="/admin/panel/orders" render={() => <Orders />} />
        <Route path="/admin/panel/card_car" render={() => <CarCard />} />
        <Route path="/admin/panel/card_order" render={() => <OrderCard />} />
      </>
    );
};

export const ContentRouter = memo(ContentRouterInner);
