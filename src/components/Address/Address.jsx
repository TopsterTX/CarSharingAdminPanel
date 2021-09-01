import React, { useEffect, memo, useCallback, useState } from "react";
import Popup from "./../UI/Popup/Popup";
import { Button } from "../UI/Button/Button";
import { Table } from "../UI/Table/Table";
import { Title } from "../UI/Title/Title";
import { Filter } from "../UI/Filter/Filter";
import { FilterItem } from "../UI/Filter/FilterItem/FilterItem";
import { Pages } from "../UI/Pages/Pages";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Input } from "../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { AddressItem } from "./AddressItem/AddressItem";
import {
  getPointsOnPage,
  changeCity,
  changePage,
} from "../../redux/actions/address/address";
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
import { TableContainer } from "./../UI/TableContainer/TableContainer";

const AddressInner = () => {
  const dispatch = useDispatch();
  const { pointsOnPage, limit, count, page, changedCity } = useSelector(
    (state) => state.address
  );
  const { editAddress } = useSelector((state) => state.addressCard);
  const { name, cityId, address, id } = editAddress;
  const { cities } = useSelector((state) => state.cities);
  const addComponent = (
    <Button type="add" onClick={() => dispatch(createPopup(true))}>
      Пункт
    </Button>
  );

  const [filter, setFilter] = useState("");

  const onClickFilterApply = () => {
    dispatch(changePage(1));
    setFilter(
      (filter) => `${changedCity.id ? `&cityId=${changedCity.id}` : ""}`
    );
  };

  const onClickFilterReset = () => {
    dispatch(changePage(1));
    dispatch(changeCity({}));
    setFilter((filter) => "");
  };

  const changeCityInPointHandler = useCallback(
    (val) => {
      return dispatch(changeCityInPoint(val));
    },
    [cityId]
  );

  const createPointHandler = useCallback(
    (point) => {
      dispatch(createPopup(false));
      dispatch(addPoint(point));
    },
    [editAddress]
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
  }, []);

  const changePointHandler = useCallback(
    (val, id) => {
      dispatch(changePoint(val, id));
      dispatch(changePopup(false));
    },
    [editAddress, id]
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
  }, [editAddress]);

  useEffect(() => {
    if (!cities.length) {
      dispatch(getCities());
    }
  }, []);

  useEffect(() => {
    dispatch(getPointsOnPage(limit, page - 1, filter));
  }, [page, filter]);

  return (
    <section className="address">
      <ContentContainer>
        <Title>Адреса</Title>
        <TableContainer>
          <Filter
            addonComponent={addComponent}
            onClickApply={() => onClickFilterApply()}
            onClickReset={() => onClickFilterReset()}
          >
            <FilterItem>
              <Selector array={cities} content={"name"} onClick={changeCity}>
                {changedCity.name ? changedCity.name : "Город"}
              </Selector>
            </FilterItem>
          </Filter>
          <Table>
            {pointsOnPage.length
              ? pointsOnPage.map((el) => {
                  return <AddressItem point={el}></AddressItem>;
                })
              : "Нечего не найдено"}
          </Table>
          <Pages
            count={count}
            divisor={limit}
            changePage={changePage}
            page={page}
          />
        </TableContainer>
      </ContentContainer>
      <Popup type="create">
        <div className="popup__input">
          <Input
            value={name}
            onChange={(e) => dispatch(changePointName(e.target.value))}
          >
            Название пункта выдачи
          </Input>
        </div>
        <div className="popup__input">
          <Input
            value={address}
            onChange={(e) => dispatch(changeAddressName(e.target.value))}
          >
            Адресс пункта выдачи
          </Input>
        </div>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length ? cityId.name : "Выберите город"}
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
        <div className="popup__input">
          <Input
            value={name}
            onChange={(e) => dispatch(changePointName(e.target.value))}
          >
            Название пункта выдачи
          </Input>
        </div>
        <div className="popup__input">
          <Input
            value={address}
            onChange={(e) => dispatch(changeAddressName(e.target.value))}
          >
            Пункт выдачи
          </Input>
        </div>
        <Selector
          array={cities}
          content="name"
          onClick={changeCityInPointHandler}
        >
          {cityId.name.length ? cityId.name : "Выберите город"}
        </Selector>
        <div className="popup__buttons">
          <Button onClick={() => changePointHandler(editAddress, id)}>
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
