import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { OrderItem } from "./OrderItem/OrderItem";
import { Table } from "../UI/Table/Table";
import { getOrder } from "../../redux/actions/order/order";
import "./Orders.scss";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Title } from "./../UI/Title/Title";

export const Orders = () => {
  const { configureFilter } = useSelector((state) => state.order);
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getOrder());
  });

  return (
    <section className="orders">
      <ContentContainer>
        <Title>Заказы</Title>
        <Table configureFilter={configureFilter}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </Table>
      </ContentContainer>
    </section>
  );
};
