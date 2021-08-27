import React, { useCallback, useState, memo } from "react";
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

export const validateHandler = (setState, string = "", regExp) => {
  return string
    ? setState(
        () =>
          JSON.stringify(String(string).match(regExp).join("")) !==
          JSON.stringify(String(string))
      )
    : false;
};

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
    priceMin = "",
    priceMax = "",
  } = editCar;
  const { path = "" } = thumbnail;
  const { color } = inputs;

  const [priceMinWarn, setPriceMinWarn] = useState(false);
  const [priceMaxWarn, setPriceMaxWarn] = useState(false);
  const [colorWarn, setColorWarn] = useState(false);
  const disabledButtons = priceMaxWarn || priceMinWarn;

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

  const changePriceMinHandler = useCallback(
    (e) => {
      validateHandler(setPriceMinWarn, e.target.value, /\d/g);
      dispatch(changePriceMinCar(e.target.value));
    },
    [priceMin]
  );

  const changeColorCarHandler = useCallback(
    (e) => {
      validateHandler(setColorWarn, e.target.value, /\D/g);
      dispatch(changeColorsCar(e.target.value));
    },
    [color]
  );

  const changePriceMaxHandler = useCallback(
    (e) => {
      validateHandler(setPriceMaxWarn, e.target.value, /\d/g);
      dispatch(changePriceMaxCar(e.target.value));
    },
    [priceMax]
  );

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
            onChangeDescription={changeDescriptionCar}
            valueFile={inputs.file ? inputs.file : ""}
          />
          <Setting
            title={"Настройка автомобиля"}
            checkTextKey="updatedAt"
            checkTextObj={editCar}
            onClickApply={() =>
              disabledButtons ? () => {} : dispatch(openedApplyPopup(true))
            }
            buttonsDisabled={false}
            onClickCreate={() =>
              disabledButtons ? () => {} : dispatch(openedCreatePopup(true))
            }
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
                    onChange={(e) => dispatch(changeModelCar(e.target.value))}
                  >
                    Модель автомобиля
                  </Input>
                </div>
                <div className="car-card__main-wrapper">
                  <Selector
                    array={categories ? categories : ""}
                    content={"name"}
                    onClick={applyCategory}
                  >
                    {categoryId ? categoryId.name : "Нет категории"}
                  </Selector>
                </div>
              </div>
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    warning={priceMinWarn}
                    warningText={"Недопустимый символ"}
                    required
                    value={priceMin ? priceMin : ""}
                    onChange={(e) => changePriceMinHandler(e)}
                  >
                    Минимальная цена
                  </Input>
                </div>
                <div className="car-card__main-wrapper">
                  <Input
                    warningText={"Недопустимый символ"}
                    warning={priceMaxWarn}
                    required
                    value={priceMax ? priceMax : ""}
                    onChange={(e) => changePriceMaxHandler(e)}
                  >
                    Максимальная цена
                  </Input>
                </div>
              </div>
              <div className="car-card__color">
                <div className="car-card__color-wrapper">
                  <Input
                    warningText={"Недопустимый символ"}
                    warning={colorWarn}
                    addButton
                    onClickButton={clickOnPlusHandler}
                    value={color}
                    onChange={(e) => changeColorCarHandler(e)}
                  >
                    Доступные цвета
                  </Input>

                  <CarColors arr={colors} onClick={deleteColor} />
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
        Вы действительно хотите отменить внесённые изменения ?
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
