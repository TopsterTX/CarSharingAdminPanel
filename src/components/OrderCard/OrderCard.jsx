import React from "react";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Setting } from "../UI/Setting/Setting";
import { Input } from "../UI/Input/Input";
import { Title } from "../UI/Title/Title";
import "./OrderCard.scss";
import { Selector } from "./../UI/Selector/Selector";
import { Checkbox } from "./../UI/Checkbox/Checkbox";

export function OrderCard() {
  const warn = false;

  return (
    <section className="order-card">
      <ContentContainer>
        <Title>Карточка заказа</Title>
        <Setting title={"Настройка заказа"}>
          <div className="order-card__container">
            <div className="order-card__main">
              <div className="order-card__main-wrapper">
                <Selector text={"Модель автомобиля"} />
              </div>
              <div className="order-card__main-wrapper">
                <Selector text={"Цвет"} />
              </div>
            </div>
            <div className="order-card__address">
              <div className="order-card__address-wrapper">
                <Selector text={"Город"} />
              </div>
              <div className="order-card__address-wrapper">
                <Selector text={"Улица"} />
              </div>
            </div>
            <div className="order-card__date">
              <div className="order-card__date-wrapper">
                <Input label={"Дата начала аренды"} type={"date"} />
              </div>
              <div className="order-card__date-wrapper">
                <Input label={"Дата окончания аренды"} type={"date"} />
              </div>
              <div className="order-card__date-wrapper"></div>
            </div>
            <div className="order-card__rate">
              <h2 className="order-card__rate-title">Тарифы</h2>
              <Checkbox label={"На сутки, 1990 Р"} />
              <Checkbox label={"В час, 799 P"} />
            </div>
            <div className="order-card__addons">
              <h2 className="order-card__addons-title">Дополнительные опции</h2>
              <Checkbox label={"Полный бак"} />
              <Checkbox label={"Детское кресло"} />
              <Checkbox label={"Правый руль"} />
            </div>
            <div className="order-card__price">
              <Input label={"Цена"} />
            </div>
          </div>
        </Setting>
      </ContentContainer>
    </section>
  );
}
