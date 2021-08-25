import React, { useEffect, useCallback, memo } from "react";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import { Title } from "../UI/Title/Title";
import { Setting } from "../UI/Setting/Setting";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import { Input } from "./../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModelCar,
  changeDescriptionCar,
  changeColorsCar,
  changePriceMinCar,
  changePriceMaxCar,
  sendChangesCar,
  cancelEditCar,
  addColor,
  deleteColor,
  getCategories,
  applyCategory,
  deleteCar,
} from "../../redux/actions/carCard/carCard";
import "./CarCard.scss";
import {
  openedCancelPopup,
  openedApplyPopup,
  openedDeletePopup,
  openedCreatePopup,
} from "../../redux/actions/warningPopup/warningPopup";
import { WarningPopup } from "./../UI/WarningPopup/WarningPopup";
import { CarColors } from "./CarColors/CarColors";
import { Selector } from "../UI/Selector/Selector";
import { addCar } from "../../redux/actions/carCard/carCard";

function CarCardInner() {
  const warn = false;
  const dispatch = useDispatch();
  const {
    editCar = {},
    inputs = {},
    categories = [],
  } = useSelector((state) => state.carCard);
  const {
    colors = [],
    thumbnail = {},
    categoryId = {},
    name = "",
    description = "",
    id = "",
    priceMin = 0,
    priceMax = 0,
  } = editCar;
  const { path = "" } = thumbnail;

  const changeDescriptionCarHandler = useCallback(
    (val) => {
      return dispatch(changeDescriptionCar(val));
    },
    [description, changeDescriptionCar]
  );

  const changeModelCarHandler = useCallback(
    (val) => {
      return dispatch(dispatch(changeModelCar(val)));
    },
    [name, changeModelCar]
  );

  const changePriceMinHandler = useCallback(
    (val) => {
      return dispatch(changePriceMinCar(val));
    },
    [priceMin, changePriceMinCar]
  );

  const changePriceMaxHandler = useCallback(
    (val) => {
      return dispatch(changePriceMaxCar(val));
    },
    [priceMax, changePriceMaxCar]
  );

  const clickOnPlusHandler = useCallback(
    (dispatch, value) => {
      if (value.length > 0) {
        dispatch(addColor(value));
        dispatch(changeColorsCar(""));
      } else {
        return;
      }
    },
    [addColor, inputs.color]
  );

  const changeCarColorHandler = useCallback(
    (val) => {
      return dispatch(changeColorsCar(val));
    },
    [inputs.color, changeColorsCar]
  );

  const deleteCarColorHandler = useCallback(
    (val) => {
      return dispatch(deleteColor(val));
    },
    [colors, deleteColor]
  );

  const applyCategoryHandler = useCallback(
    (el) => {
      return dispatch(applyCategory(el));
    },
    [categories, applyCategory]
  );

  console.log(editCar);
  return (
    <section className="car-card">
      <ContentContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car-card__wrapper">
          <InfoBlock
            path={path}
            label={name ? name : ""}
            subLabel={categoryId ? categoryId.name : ""}
            valueDescription={description ? description : ""}
            onChangeDescription={changeDescriptionCarHandler}
            valueFile={inputs.file ? inputs.file : ""}
          />
          <Setting
            title={"Настройка автомобиля"}
            checkTextKey="updatedAt"
            checkTextObj={editCar}
            onClickApply={() => {
              dispatch(openedApplyPopup(true));
            }}
            onClickCreate={() => dispatch(openedCreatePopup(true))}
            onClickCancel={() => dispatch(openedCancelPopup(true))}
            onClickDelete={() => dispatch(openedDeletePopup(true))}
          >
            <div className="car-card__container">
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    warning={warn}
                    warningText={"Неверно"}
                    required
                    value={name ? name : ""}
                    onChange={changeModelCarHandler}
                  >
                    Модель автомобиля
                  </Input>
                </div>
                <div className="car-card__main-wrapper">
                  <Selector
                    array={categories ? categories : ""}
                    content={"name"}
                    onClick={applyCategoryHandler}
                  >
                    {categoryId ? categoryId.name : "Нет категории"}
                  </Selector>
                </div>
              </div>
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    warning={warn}
                    warningText={"Ошибка при добавлени цены"}
                    required
                    value={priceMin ? priceMin : ""}
                    onChange={changePriceMinHandler}
                  >
                    Минимальная цена
                  </Input>
                </div>
                <div className="car-card__main-wrapper">
                  <Input
                    warningText={"Ошибка при добавлении цены"}
                    warning={warn}
                    required
                    value={editCar.priceMax ? editCar.priceMax : ""}
                    onChange={changePriceMaxHandler}
                  >
                    Максимальная цена
                  </Input>
                </div>
              </div>
              <div className="car-card__color">
                <div className="car-card__color-wrapper">
                  <Input
                    warningText={"Ошибка при добавлении цвета"}
                    warning={warn}
                    addButton
                    onClickButton={clickOnPlusHandler}
                    value={inputs.color}
                    onChange={changeCarColorHandler}
                  >
                    Доступные цвета
                  </Input>

                  <CarColors arr={colors} onClick={deleteCarColorHandler} />
                </div>
              </div>
            </div>
          </Setting>
        </div>
      </ContentContainer>
      <WarningPopup type="create" onClick={() => dispatch(addCar(editCar))}>
        Вы действительно хотите добавить автомобиль ?
      </WarningPopup>
      <WarningPopup
        type="apply"
        onClick={() => dispatch(sendChangesCar(editCar.id, editCar))}
      >
        Вы действительно хотите применить изменения ?
      </WarningPopup>
      <WarningPopup type="cancel" onClick={() => dispatch(cancelEditCar())}>
        Вы действительно хотите отменить изменение автомобиля ?
      </WarningPopup>
      <WarningPopup
        type="delete"
        onClick={() => dispatch(deleteCar(editCar.id))}
      >
        Вы действительно хотите удалить автомобиль ?
      </WarningPopup>
    </section>
  );
}

export const CarCard = memo(CarCardInner);
