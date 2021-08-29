import React, { useEffect, memo } from "react";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Title } from "./../UI/Title/Title";
import { OrderItem } from "./OrderItem/OrderItem";
import { Table } from "../UI/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../redux/actions/orderCard/orderCard";
import { getOrderOnPage } from "../../redux/actions/order/order";
import "./Orders.scss";
import { AddButton } from "./../UI/AddButton/AddButton";

const OrdersInner = () => {
  const { configureFilter, ordersOnPage, count, limit } = useSelector(
    (state) => state.order
  );
  const { emptyOrder } = useSelector((state) => state.orderCard);
  const dispatch = useDispatch();

  const addComponent = (
    <AddButton
      onClick={() => dispatch(getOrder(emptyOrder))}
      to="/admin/panel/card_order"
    >
      Заказ
    </AddButton>
  );

  return (
    <section className="orders">
      <ContentContainer>
        <Title>Заказы</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={addComponent}
          onChangePage={getOrderOnPage}
          count={count}
          divisor={limit}
        >
          {ordersOnPage.map((el) => {
            return <OrderItem order={el} key={el.id} id={el.id} />;
          })}
        </Table>
      </ContentContainer>
    </section>
  );
};

export const Orders = memo(OrdersInner);
