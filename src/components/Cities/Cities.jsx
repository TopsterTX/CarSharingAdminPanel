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
import { showLoader } from "./../../redux/actions/loader/loader";
import "./Cities.scss";

const CitiesInner = () => {
  const dispatch = useDispatch();
  const {
    cities = [],
    citiesOnPage = [],
    configureFilter,
    count,
    limit,
  } = useSelector((state) => state.cities);
  const { editCity } = useSelector((state) => state.citiesCard);
  const { name, id } = editCity;

  const addCompoent = (
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


  return (
    <section className="cities">
      <ContentContainer>
        <Title>Города</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={addCompoent}
          onChangePage={getCitiesOnPage}
          divisor={limit}
          count={count}
        >
          {citiesOnPage
            ? citiesOnPage.map((el) => {
                return <CitiesItem city={el} key={el.id} />;
              })
            : ""}
        </Table>
      </ContentContainer>
      <Popup type="change">
        <Input
          value={name}
          onChange={(e) => dispatch(changeCityName(e.target.value))}
        >
          Название города
        </Input>
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
        <Input
          value={name}
          onChange={(e) => dispatch(changeCityName(e.target.value))}
        >
          Название города
        </Input>
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
