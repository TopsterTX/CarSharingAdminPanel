import React, { useEffect, memo } from "react";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Title } from "./../UI/Title/Title";
import { OrderItem } from "./OrderItem/OrderItem";
import { Table } from "../UI/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../redux/actions/order/order";
import "./Orders.scss";

const OrdersInner = () => {
  const { configureFilter, orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  return (
    <section className="orders">
      <ContentContainer>
        <Title>Заказы</Title>
        <Table configureFilter={configureFilter}>
          {orders.map((el) => {
            return <OrderItem order={el} key={el.id} id={el.id} />;
          })}
        </Table>
      </ContentContainer>
    </section>
  );
};

export const Orders = memo(OrdersInner);
