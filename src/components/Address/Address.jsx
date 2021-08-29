import React, { useEffect, memo, useCallback } from "react";
import Popup from "./../UI/Popup/Popup";
import { Button } from "../UI/Button/Button";
import { Table } from "../UI/Table/Table";
import { Title } from "../UI/Title/Title";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Input } from "../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { AddressItem } from "./AddressItem/AddressItem";
import {
  getPointsOnPage,
  getPoints,
} from "../../redux/actions/address/address";
import { showLoader } from "./../../redux/actions/loader/loader";
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
  getEditPoint,
} from "../../redux/actions/addressCard/addressCard";

const AddressInner = () => {
  const dispatch = useDispatch();
  const {
    configureFilter,
    pointsOnPage,
    points = [],
    limit,
    count,
  } = useSelector((state) => state.address);
  const { editAddress } = useSelector((state) => state.addressCard);
  const { name, cityId, address, id } = editAddress;
  const { cities = [] } = useSelector((state) => state.cities);
  const addComponent = (
    <Button type="add" onClick={() => dispatch(createPopup(true))}>
      Пункт
    </Button>
  );

  useEffect(() => {
    dispatch(showLoader(true));
    if (!points.length) {
      dispatch(getPoints());
    }
    if (!cities.length) {
      dispatch(getCities());
    }
  }, []);

  useEffect(() => {
    if (points.length && cities.length) {
      dispatch(showLoader(false));
    }
  }, [points, cities]);

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
    dispatch(createPopup(false));
    dispatch(
      getEditPoint({
        id: "",
        address: "",
        name: "",
        cityId: {
          name: "",
          id: "",
        },
      })
    );
  }, [createPopup]);

  const changePointHandler = useCallback(
    (val, id) => {
      dispatch(changePoint(val, id));
      dispatch(changePopup(false));
    },
    [editAddress, changePoint, changePopup]
  );

  const closeChangePopup = useCallback(() => {
    dispatch(changePopup(false));
    dispatch(
      getEditPoint({
        id: "",
        address: "",
        name: "",
        cityId: {
          name: "",
          id: "",
        },
      })
    );
  }, [editAddress, changePopup]);

  return (
    <section className="address">
      <ContentContainer>
        <Title>Адреса</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={addComponent}
          onChangePage={getPointsOnPage}
          divisor={limit}
          count={count}
        >
          {pointsOnPage
            ? pointsOnPage.map((el) => {
                return <AddressItem point={el}></AddressItem>;
              })
            : ""}
        </Table>
      </ContentContainer>
      <Popup type="create">
        <Input
          value={name}
          onChange={(e) => dispatch(changePointName(e.target.value))}
        >
          Название пункта выдачи
        </Input>
        <Input
          value={address}
          onChange={(e) => dispatch(changeAddressName(e.target.value))}
        >
          Адресс пункта выдачи
        </Input>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length > 0 ? cityId.name : "Выберите город"}
        </Selector>
        <div className="popup__buttons">
          <Button onClick={() => createPointHandler(editAddress)}>
            Создать
          </Button>
          <Button type="warning" onClick={() => closeCreatePopup()}>
            Отменить
          </Button>
        </div>
      </Popup>
      <Popup type="change">
        <Input
          value={name}
          onChange={(e) => dispatch(changePointName(e.target.value))}
        >
          Название пункта выдачи
        </Input>
        <Input
          value={address}
          onChange={(e) => dispatch(changeAddressName(e.target.value))}
        >
          Пункт выдачи
        </Input>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length > 0 ? cityId.name : "Выберите город"}
        </Selector>
        <div className="popup__buttons">
          <Button
            onClick={() => changePointHandler(editAddress, editAddress.id)}
          >
            Применить
          </Button>
          <Button type="warning" onClick={() => closeChangePopup()}>
            Отменить
          </Button>
        </div>
      </Popup>
    </section>
  );
};

export const Address = memo(AddressInner);
