import React, { memo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../UI/Title/Title";
import { Table } from "../UI/Table/Table";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import Popup from "./../UI/Popup/Popup";
import { CitiesItem } from "./CitiesItem/CitiesItem";
import { getCitiesOnPage } from "../../redux/actions/cities/cities";
import { changePopup, createPopup } from "../../redux/actions/popup/popup";
import {
  getEditCity,
  changeCity,
  changeCityName,
  addCity,
} from "../../redux/actions/citiesCard/citiesCard";
import { changePage } from "../../redux/actions/cities/cities";
import "./Cities.scss";
import { TableContainer } from "./../UI/TableContainer/TableContainer";
import { Filter } from "./../UI/Filter/Filter";
import { Pages } from "../UI/Pages/Pages";

const CitiesInner = () => {
  const dispatch = useDispatch();
  const {
    cities,
    citiesOnPage,
    configureFilter,
    count,
    limit,
    page,
  } = useSelector((state) => state.cities);
  const { editCity } = useSelector((state) => state.citiesCard);
  const { name, id } = editCity;

  const addComponent = (
    <Button onClick={() => dispatch(createPopup(true))} type="add">
      Город
    </Button>
  );

  const changeCityHandler = useCallback(
    (val, ID) => {
      dispatch(changeCity(val, ID));
      dispatch(changePopup(false));
    },
    [editCity, changeCity]
  );

  const createCityHandler = useCallback(
    (val) => {
      dispatch(addCity(val));
      dispatch(createPopup(false));
    },
    [editCity, addCity]
  );

  const closeChangePopupHandler = useCallback(() => {
    dispatch(
      getEditCity({
        id: "",
        name: "",
      })
    );
    dispatch(changePopup(false));
  }, [getEditCity, changePopup]);

  const closeCreatePopupHandler = useCallback(() => {
    dispatch(
      getEditCity({
        id: "",
        name: "",
      })
    );
    dispatch(createPopup(false));
  }, [getEditCity, createPopup]);

  useEffect(() => {
    dispatch(getCitiesOnPage(limit, page - 1));
  }, [page]);

  return (
    <section className="cities">
      <ContentContainer>
        <Title>Города</Title>
        <TableContainer>
          <Filter addonComponent={addComponent} />
          <Table>
            {citiesOnPage
              ? citiesOnPage.map((el) => {
                  return <CitiesItem city={el} key={el.id} />;
                })
              : ""}
          </Table>
          <Pages
            count={count}
            page={page}
            changePage={changePage}
            divisor={limit}
          />
        </TableContainer>
      </ContentContainer>
      <Popup type="change">
        <div className="popup__input">
          <Input
            value={name}
            onChange={(e) => dispatch(changeCityName(e.target.value))}
          >
            Название города
          </Input>
        </div>
        <div className="popup__buttons">
          <Button onClick={() => changeCityHandler(editCity, id)}>
            Применить
          </Button>
          <Button type="warning" onClick={() => closeChangePopupHandler()}>
            Отменить
          </Button>
        </div>
      </Popup>
      <Popup type="create">
        <div className="popup__input">
          <Input
            value={name}
            onChange={(e) => dispatch(changeCityName(e.target.value))}
          >
            Название города
          </Input>
        </div>
        <div className="popup__buttons">
          <Button onClick={() => createCityHandler(editCity)}>Применить</Button>
          <Button type="warning" onClick={() => closeCreatePopupHandler()}>
            Отменить
          </Button>
        </div>
      </Popup>
    </section>
  );
};

export const Cities = memo(CitiesInner);
