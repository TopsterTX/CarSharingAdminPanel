import React, { useEffect } from "react";
import car from "../../images/car2.png";
import carCreate from "../../images/carCreate.png";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import { Title } from "../UI/Title/Title";
import { Setting } from "../UI/Setting/Setting";
import { Input } from "./../UI/Input/Input";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import { Checkbox } from "./../UI/Checkbox/Checkbox";
import {
  changeModelCar,
  changeDescriptionCar,
  changeTypeCar,
  changeColorsCar,
  changePriceMinCar,
  changePriceMaxCar,
  changePhotoCar,
} from "../../redux/actions/carCard/carCard";
import { getCars } from "../../redux/actions/cars/cars";
import "./CarCard.scss";

export function CarCard() {
  let src;
  const warn = false;
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.cars);
  const { editCar, inputs } = useSelector((state) => state.carCard);
  const { colors, thumbnail } = editCar;

  useEffect(() => {
    dispatch(getCars(page));
    imageHandler();
  }, []);

  function imageHandler() {
    if (thumbnail.path === null) {
      return src;
    }
    if (thumbnail.path.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${thumbnail.path}`;
    } else {
      src = thumbnail.path;
    }
  }

  return (
    <section className="car-card">
      <ContentContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car-card__wrapper">
          <InfoBlock
            car={src ? src : car}
            label={editCar.name}
            subLabel={editCar.categoryId.name}
            valueDescription={editCar.description}
            onChangeDescription={(e) =>
              dispatch(changeDescriptionCar(e.target.value))
            }
            valueFile={inputs.file}
            onChangeFile={(e) => console.log(e.target.value)}
          />
          <Setting title={"Настройка автомобиля"}>
            <div className="car-card__container">
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    label={"Модель автомобиля"}
                    warning={warn}
                    warningText={"Неверно"}
                    required
                    value={editCar.name}
                    onChange={(e) => dispatch(changeModelCar(e.target.value))}
                  />
                </div>
                <div className="car-card__main-wrapper">
                  <Input
                    label={"Тип автомобиля"}
                    warningText={"Неверный тип автомобиля"}
                    warning={warn}
                    required
                    value={editCar.categoryId.name}
                    onChange={(e) => dispatch(changeTypeCar(e.target.value))}
                  />
                </div>
              </div>
              <div className="car-card__main">
                <div className="car-card__main-wrapper">
                  <Input
                    label={"Минимальная цена"}
                    warning={warn}
                    warningText={"Неверно"}
                    required
                    value={editCar.priceMin}
                    onChange={(e) =>
                      dispatch(changePriceMinCar(e.target.value))
                    }
                  />
                </div>
                <div className="car-card__main-wrapper">
                  <Input
                    label={"Максимальная цена"}
                    warningText={"Неверный тип автомобиля"}
                    warning={warn}
                    required
                    value={editCar.priceMax}
                    onChange={(e) =>
                      dispatch(changePriceMaxCar(e.target.value))
                    }
                  />
                </div>
              </div>
              <div className="car-card__color">
                <div className="car-card__color-wrapper">
                  <Input
                    label={"Доступные цвета"}
                    warningText={"Ошибка при добавлении цвета"}
                    warning={warn}
                    addButton
                    value={inputs.colors}
                    onChange={(e) => dispatch(changeColorsCar(e.target.value))}
                  />

                  <div className="car-card__color-checkbox">
                    {colors
                      ? colors.map((el) => {
                          return <Checkbox label={el} key={uuidv4()} />;
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </Setting>
        </div>
      </ContentContainer>
    </section>
  );
}
