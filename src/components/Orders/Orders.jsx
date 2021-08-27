import React, { useEffect, memo } from "react";
import { NavLink } from "react-router-dom";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Title } from "./../UI/Title/Title";
import { OrderItem } from "./OrderItem/OrderItem";
import { Table } from "../UI/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getOrder as getOrderCard } from "../../redux/actions/orderCard/orderCard";
import { getOrder } from "../../redux/actions/order/order";
import "./Orders.scss";
import { AddButton } from "./../UI/AddButton/AddButton";

const OrdersInner = () => {
  const { configureFilter, orders } = useSelector((state) => state.order);
  const { emptyOrder } = useSelector((state) => state.orderCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrder());
    }
  }, []);

  return (
    <section className="orders">
      <ContentContainer>
        <Title>Заказы</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={
            <AddButton
              onClick={() => dispatch(getOrderCard(emptyOrder))}
              to="/admin/panel/card_order"
            >
              Заказ
            </AddButton>
          }
        >
          {orders.map((el) => {
            return <OrderItem order={el} key={el.id} id={el.id} />;
          })}
        </Table>
      </ContentContainer>
    </section>
  );
};

export const Orders = memo(OrdersInner);
