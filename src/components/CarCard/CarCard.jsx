import React from "react";
import car from "../../images/car2.png";

import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import { Title } from "../UI/Title/Title";
import { Setting } from "../UI/Setting/Setting";
import { Input } from "./../UI/Input/Input";
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
} from "../../redux/actions/carCard/carCard";
import "./CarCard.scss";

import {
  openedCancelPopup,
  openedApplyPopup,
  openedDeletePopup,
} from "../../redux/actions/warningPopup/warningPopup";
import { WarningPopup } from "./../UI/WarningPopup/WarningPopup";
import { CarColors } from "./CarColors/CarColors";

export function CarCard() {
  let src;
  const warn = false;
  const dispatch = useDispatch();
  const { editCar, inputs } = useSelector((state) => state.carCard);
  const { colors, thumbnail } = editCar;

  (function imageHandler() {
    if (thumbnail.path === null) {
      return src;
    }
    if (thumbnail.path.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${thumbnail.path}`;
    } else {
      src = thumbnail.path;
    }
  })();

  return (
    <section className="car-card">
      <ContentContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car-card__wrapper">
          <InfoBlock
            car={src ? src : car}
            label={editCar.name ? editCar.name : ""}
            subLabel={editCar.categoryId != null ? editCar.categoryId.name : ""}
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
                  <Input
                    warningText={"Неверный тип автомобиля"}
                    warning={warn}
                    required
                    value={
                      editCar.categoryId != null ? editCar.categoryId.name : ""
                    }
                    onChange={(e) => dispatch(changeTypeCar(e.target.value))}
                  >
                    Тип автомобиля
                  </Input>
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
                    onClickButton={() => dispatch(addColor(inputs.color))}
                    value={inputs.color}
                    onChange={(e) => dispatch(changeColorsCar(e.target.value))}
                  >
                    Доступные цвета
                  </Input>

                  <CarColors arr={colors} />
                </div>
              </div>
              {/* <div className="car-card__color-button">
                <Button type="link">Удалить выбранные</Button>
              </div> */}
            </div>
          </Setting>
        </div>
      </ContentContainer>
      <WarningPopup
        type="apply"
        onClick={() => dispatch(sendChangesCar(editCar.id, editCar))}
      >
        Вы действительно хотите изменить этот автомобиль?
      </WarningPopup>
      <WarningPopup type="cancel" onClick={() => dispatch(cancelEditCar())}>
        Вы действительно хотите отменить изменение автомобиля?
      </WarningPopup>
      <WarningPopup type="delete">
        Вы действительно хотите удалить автомобиль?
      </WarningPopup>
    </section>
  );
}
