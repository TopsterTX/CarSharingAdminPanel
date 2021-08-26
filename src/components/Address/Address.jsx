import React, { useEffect, memo, useCallback } from "react";
import Popup from "./../UI/Popup/Popup";
import { Button } from "../UI/Button/Button";
import { Table } from "../UI/Table/Table";
import { Title } from "../UI/Title/Title";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Input } from "../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { AddressItem } from "./AddressItem/AddressItem";
import { showPopup } from "../../redux/actions/popup/popup";
import { getPointsOnPage } from "../../redux/actions/address/address";
import { getPoints } from "./../../redux/actions/address/address";
import { getCities } from "../../redux/actions/cities/cities";
import "./Address.scss";
import { Selector } from "./../UI/Selector/Selector";
import { createPopup, changePopup } from "../../redux/actions/popup/popup";
import {
  changePointName,
  changeAddressName,
  changeCityInPoint,
  addPoint,
  changePoint,
} from "../../redux/actions/addressCard/addressCard";

const AddressInner = () => {
  const {
    configureFilter,
    pointsOnPage,
    points = [],
  } = useSelector((state) => state.address);
  const { editAddress } = useSelector((state) => state.addressCard);
  const { name, cityId, address, id } = editAddress;
  const { cities = [] } = useSelector((state) => state.cities);
  console.log(cities);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!pointsOnPage.length) {
  //     dispatch(getPointsOnPage());
  //   }
  //   if (!points.length) {
  //     dispatch(getPoints());
  //   }
  //   if (!cities.length) {
  //     dispatch(getCities());
  //   }
  // }, []);

  const changeNameHandler = useCallback(
    (val) => {
      return dispatch(changePointName(val));
    },
    [name, changePointName]
  );

  const changeAddressHandler = useCallback(
    (val) => {
      return dispatch(changeAddressName(val));
    },
    [address, changeAddressName]
  );

  const changeCityInPointHandler = useCallback(
    (val) => {
      return dispatch(changeCityInPoint(val));
    },
    [cityId, changeCityInPoint]
  );

  const createPointHandler = useCallback(
    (point) => {
      dispatch(createPopup(false));
      dispatch(addPoint(point));
    },
    [editAddress, createPopup, addPoint]
  );

  const closeCreatePopup = useCallback(() => {
    return createPopup(false);
  }, [createPopup]);

  const changePointHandler = useCallback(
    (val) => {
      return dispatch(changePoint(val));
    },
    [editAddress, changePoint]
  );

  const closeChangePopup = useCallback(() => {
    return changePopup(false);
  }, [editAddress, changePopup]);

  return (
    <section className="address">
      <ContentContainer>
        <Title>Адреса</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={
            <Button type="add" onClick={() => dispatch(createPopup(true))}>
              Пункт
            </Button>
          }
        >
          {pointsOnPage
            ? pointsOnPage.map((el) => {
                return <AddressItem point={el}></AddressItem>;
              })
            : ""}
        </Table>
      </ContentContainer>
      <Popup type="create">
        <Input value={name} onChange={changeNameHandler}>
          Название пункта выдачи
        </Input>
        <Input value={address} onChange={changeAddressHandler}>
          Пункт выдачи
        </Input>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length > 0 ? cityId.name : "Выберите город"}
        </Selector>
        <Button onClick={() => createPointHandler(editAddress)}>Создать</Button>
        <Button type="warning" onClick={closeCreatePopup}>
          Отменить
        </Button>
      </Popup>
      <Popup type="change">
        <Input value={name} onChange={changeNameHandler}>
          Название пункта выдачи
        </Input>
        <Input value={address} onChange={changeAddressHandler}>
          Пункт выдачи
        </Input>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length > 0 ? cityId.name : "Выберите город"}
        </Selector>
        <Button onClick={changePointHandler}>Применить</Button>
        <Button type="warning" onClick={closeChangePopup}>
          Отменить
        </Button>
      </Popup>
    </section>
  );
};

export const Address = memo(AddressInner);
