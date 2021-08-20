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
                <Selector>Модель автомобиля</Selector>
              </div>
              <div className="order-card__main-wrapper">
                <Selector>Цвет</Selector>
              </div>
            </div>
            <div className="order-card__address">
              <div className="order-card__address-wrapper">
                <Selector>Город</Selector>
              </div>
              <div className="order-card__address-wrapper">
                <Selector>Улица</Selector>
              </div>
            </div>
            <div className="order-card__date">
              <div className="order-card__date-wrapper">
                <Input type={"date"}>Дата начала аренды</Input>
              </div>
              <div className="order-card__date-wrapper">
                <Input type={"date"}>Дата окончания аренды</Input>
              </div>
              <div className="order-card__date-wrapper"></div>
            </div>
            <div className="order-card__rate">
              <h2 className="order-card__rate-title">Тарифы</h2>
              <Checkbox>На сутки, 1990 Р</Checkbox>
              <Checkbox>В час, 799 P</Checkbox>
            </div>
            <div className="order-card__addons">
              <h2 className="order-card__addons-title">Дополнительные опции</h2>
              <Checkbox>Полный бак</Checkbox>
              <Checkbox>Детское кресло</Checkbox>
              <Checkbox>Правый руль</Checkbox>
            </div>
            <div className="order-card__price">
              <Input>Цена</Input>
            </div>
          </div>
        </Setting>
      </ContentContainer>
    </section>
  );
}
