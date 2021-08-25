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
import { createPopup } from "../../redux/actions/popup/popup";
import {changePointName} from '../../redux/actions/addressCard/addressCard'

const AddressInner = () => {
  const {
    configureFilter,
    pointsOnPage,
    points = [],
    cities = [],
  } = useSelector((state) => state.address);
  const { editAddress } = useSelector((state) => state.addressCard);
  const { name, cityId, address, id } = editAddress;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pointsOnPage.length) {
      dispatch(getPointsOnPage());
    }
    if (!points.length) {
      dispatch(getPoints());
    }
    if (!cities.length) {
      dispatch(getCities());
    }
  }, []);

  const changeNameHandler = useCallback(
    (val) => {
      return dispatch(changePointName(val));
    },
    [name, changePointName]
  );

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
        <Input value={address}>Пункт выдачи</Input>
        <Selector arr={cities} content="name">
          {"Выберите город"}
        </Selector>
        <Button>Создать</Button>
        <Button type="warning" onClick={() => dispatch(createPopup(false))}>
          Отменить
        </Button>
      </Popup>
      <Popup type="change"></Popup>
    </section>
  );
};

export const Address = memo(AddressInner);
