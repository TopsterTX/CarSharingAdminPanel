import React from "react";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import { Title } from "../UI/Title/Title";
import { Setting } from "../UI/Setting/Setting";
import { Input } from "./../UI/Input/Input";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import car from "../../images/car2.png";
import "./CarCard.scss";
import { Checkbox } from "./../UI/Checkbox/Checkbox";

export function CarCard() {
  const warn = false;

  return (
    <section className="car-card">
      <ContentContainer>
        <Title>Карточка автомобиля</Title>
        <div className="car-card__wrapper">
          <InfoBlock
            car={car}
            label={"Hyundai, i30"}
            subLabel={"Компакт-кар"}
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
                  />
                </div>
                <div className="car-card__main-wrapper">
                  <Input
                    label={"Тип автомобиля"}
                    warningText={"Неверный тип автомобиля"}
                    warning={warn}
                    required
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
                  />

                  <div className="car-card__color-checkbox">
                    {/* //* Итерировать массив */}
                    <Checkbox label={'Красный'}/>
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
