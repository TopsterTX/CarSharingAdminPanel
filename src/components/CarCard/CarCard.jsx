import React, { useEffect } from "react";
import Image from "../UI/Image/Image";
import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import { Title } from "../UI/Title/Title";
import { Setting } from "../UI/Setting/Setting";
import  Input  from "./../UI/Input/Input";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import {
  changeModelCar,
  changeDescriptionCar,
  changeTypeCar,
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
import CarColors from "./CarColors/CarColors";
import  Selector  from "../UI/Selector/Selector";
import { addCar } from "../../redux/actions/carCard/carCard";

const clickOnPlusHandler = (dispatch, value) => {
  if (value.length > 0) {
    dispatch(addColor(value));
    dispatch(changeColorsCar(""));
  } else {
    return;
  }
};

export function CarCard() {
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const warn = false;
  const dispatch = useDispatch();
  const { editCar, inputs, categories } = useSelector((state) => state.carCard);
  const { colors, thumbnail } = editCar;
  const { path } = thumbnail;

  return (
    <section className="car-card">
      <ContentContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car-card__wrapper">
          <InfoBlock
            car={<Image path={path} className="image image--card" />}
            label={editCar.name ? editCar.name : ""}
            subLabel={editCar.categoryId ? editCar.categoryId.name : ""}
            valueDescription={editCar.description ? editCar.description : ""}
            onChangeDescription={(e) =>
              dispatch(changeDescriptionCar(e.target.value))
            }
            valueFile={inputs.file ? inputs.file : ""}
            onChangeFile={(e) => console.log(e.target.value)}
          />
          <Setting
            title={"Настройка автомобиля"}
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
                    value={editCar.name ? editCar.name : ""}
                    onChange={(e) => dispatch(changeModelCar(e.target.value))}
                  >
                    Модель автомобиля
                  </Input>
                </div>
                <div className="car-card__main-wrapper">
                  <Selector
                    array={categories}
                    content={"name"}
                    onClick={applyCategory}
                  >
                    {editCar.categoryId.name}
                  </Selector>
                </div>
              </div>
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    warning={warn}
                    warningText={"Ошибка при добавлени цены"}
                    required
                    value={editCar.priceMin ? editCar.priceMin : ""}
                    onChange={(e) =>
                      dispatch(changePriceMinCar(e.target.value))
                    }
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
                    onChange={(e) =>
                      dispatch(changePriceMaxCar(e.target.value))
                    }
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
                    onClickButton={() =>
                      clickOnPlusHandler(dispatch, inputs.color)
                    }
                    value={inputs.color}
                    onChange={(e) => dispatch(changeColorsCar(e.target.value))}
                  >
                    Доступные цвета
                  </Input>

                  <CarColors
                    arr={colors}
                    onClick={() => dispatch(deleteColor(colors.length - 1))}
                  />
                </div>
              </div>
            </div>
          </Setting>
        </div>
      </ContentContainer>
      <WarningPopup
        type="create"
        onClick={() => dispatch(addCar(editCar.id, editCar))}
      >
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
