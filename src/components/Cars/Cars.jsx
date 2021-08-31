import React, { useEffect, useCallback, useState } from "react";
import { AddButton } from "../UI/AddButton/AddButton";
import { getEditCar } from "../../redux/actions/carCard/carCard";
import { CarsItem } from "./CarsItem/CarsItem";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Table } from "../UI/Table/Table";
import { Title } from "./../UI/Title/Title";
import { useSelector, useDispatch } from "react-redux";
import {
  getCarsOnPage,
  getCategories,
  changeFilterMinPrice,
  changeFilterMaxPrice,
  changeCategory,
  changePage,
} from "../../redux/actions/cars/cars";
import "./Cars.scss";
import { TableContainer } from "./../UI/TableContainer/TableContainer";
import { Filter } from "./../UI/Filter/Filter";
import { Pages } from "./../UI/Pages/Pages";
import { FilterItem } from "../UI/Filter/FilterItem/FilterItem";
import { Input } from "./../UI/Input/Input";
import { Selector } from "./../UI/Selector/Selector";

export const Cars = () => {
  const dispatch = useDispatch();

  const {
    carsOnPage,
    count,
    limit,
    page,
    categories,
    inputMinPrice,
    inputMaxPrice,
    changedCategory,
  } = useSelector((state) => state.cars);

  const { emptyCar } = useSelector((state) => state.carCard);
  const [filter, setFilter] = useState("");
  const addComponent = (
    <AddButton
      onClick={() => dispatch(getEditCar(emptyCar))}
      to="/admin/panel/card_car"
    >
      Автомобиль
    </AddButton>
  );

  const onClickFilterApply = () => {
    dispatch(changePage(1));
    setFilter(
      (filter) =>
        `${inputMinPrice > 0 ? `&priceMin[$gt]=${inputMinPrice}` : ""}${
          inputMaxPrice > 0 ? `&priceMax[$lt]=${inputMaxPrice}` : ""
        }${changedCategory.id ? `&categoryId=${changedCategory.id}` : ""}`
    );
  };

  const onClickFilterReset = () => {
    dispatch(changePage(1));
    dispatch(changeFilterMinPrice(""));
    dispatch(changeFilterMaxPrice(""));
    dispatch(changeCategory({}));
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
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [categories]);

  useEffect(() => {
    dispatch(getCarsOnPage(limit, page - 1, filter));
  }, [page, filter]);

  return (
    <section className="cars">
      <ContentContainer>
        <Title>Список автомобилей</Title>
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
              <Selector
                array={categories}
                content={"name"}
                onClick={changeCategory}
              >
                {changedCategory.name ? changedCategory.name : "Категория"}
              </Selector>
            </FilterItem>
          </Filter>
          <Table>
            {carsOnPage.length
              ? carsOnPage.map((el) => {
                  return <CarsItem key={el.id} car={el} />;
                })
              : "Ничего не найдено"}
          </Table>
          <Pages
            count={count}
            divisor={limit}
            changePage={changePage}
            page={page}
          />
        </TableContainer>
      </ContentContainer>
    </section>
  );
};
