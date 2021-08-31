import React, { useEffect, memo, useState, useCallback } from "react";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Title } from "./../UI/Title/Title";
import { OrderItem } from "./OrderItem/OrderItem";
import { Table } from "../UI/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../redux/actions/orderCard/orderCard";
import {
  getOrderOnPage,
  changeCity,
  changeFilterMinPrice,
  changeFilterMaxPrice,
  changePage,
} from "../../redux/actions/order/order";
import "./Orders.scss";
import { AddButton } from "./../UI/AddButton/AddButton";
import { FilterItem } from "./../UI/Filter/FilterItem/FilterItem";
import { Selector } from "./../UI/Selector/Selector";
import { Filter } from "../UI/Filter/Filter";
import { Input } from "../UI/Input/Input";
import { TableContainer } from "./../UI/TableContainer/TableContainer";
import { Pages } from "../UI/Pages/Pages";
import { getCities } from "../../redux/actions/cities/cities";

const OrdersInner = () => {
  const dispatch = useDispatch();
  const {
    ordersOnPage,
    count,
    limit,
    inputMaxPrice,
    inputMinPrice,
    changedCity,
    page,
  } = useSelector((state) => state.order);
  const { cities } = useSelector((state) => state.cities);
  const { emptyOrder } = useSelector((state) => state.orderCard);

  const [filter, setFilter] = useState("");

  const addComponent = (
    <AddButton
      onClick={() => dispatch(getOrder(emptyOrder))}
      to="/admin/panel/card_order"
    >
      Заказ
    </AddButton>
  );

  const onClickFilterApply = () => {
    dispatch(changePage(1));
    setFilter(
      (filter) =>
        `${inputMinPrice > 0 ? `&price[$gt]=${inputMinPrice}` : ""}${
          inputMaxPrice > 0 ? `&price[$lt]=${inputMaxPrice}` : ""
        }${changedCity.id ? `&cityId=${changedCity.id}` : ""}`
    );
  };

  const onClickFilterReset = () => {
    dispatch(changePage(1));
    dispatch(changeFilterMinPrice(""));
    dispatch(changeFilterMaxPrice(""));
    dispatch(changeCity({}));
    setFilter((filter) => "");
  };

  const changeInputMinPriceHandler = useCallback(
    (e) => {
      dispatch(changeFilterMinPrice(Number(e.target.value)));
    },
    [inputMinPrice, changeFilterMinPrice]
  );

  const changeInputMaxPriceHandler = useCallback(
    (e) => {
      dispatch(changeFilterMaxPrice(Number(e.target.value)));
    },
    [inputMaxPrice, changeFilterMaxPrice]
  );

  useEffect(() => {
    if (cities.length < 1) {
      dispatch(getCities());
    }
  }, []);

  useEffect(() => {
    dispatch(getOrderOnPage(limit, page - 1, filter));
  }, [page, filter]);

  return (
    <section className="orders">
      <ContentContainer>
        <Title>Заказы</Title>
        <TableContainer>
          <Filter
            addonComponent={addComponent}
            onClickApply={() => onClickFilterApply()}
            onClickReset={() => onClickFilterReset()}
          >
            <FilterItem>
              <Input
                type="filter"
                filterPlaceholder="Мин. цена"
                value={inputMinPrice}
                onChange={changeInputMinPriceHandler}
              />
            </FilterItem>
            <FilterItem>
              <Input
                type="filter"
                filterPlaceholder="Макс. цена"
                value={inputMaxPrice}
                onChange={changeInputMaxPriceHandler}
              />
            </FilterItem>
            <FilterItem>
              <Selector array={cities} content={"name"} onClick={changeCity}>
                {changedCity.name ? changedCity.name : "Город"}
              </Selector>
            </FilterItem>
          </Filter>
          <Table>
            {ordersOnPage.length
              ? ordersOnPage.map((el) => {
                  return <OrderItem order={el} key={el.id} id={el.id} />;
                })
              : "Ничего не найдено"}
          </Table>
          <Pages
            count={count}
            divisor={limit}
            changePage={changePage}
            page={page}
          ></Pages>
        </TableContainer>
      </ContentContainer>
    </section>
  );
};

export const Orders = memo(OrdersInner);
