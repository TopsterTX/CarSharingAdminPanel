import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Setting } from "../UI/Setting/Setting";
import { Input } from "../UI/Input/Input";
import { Title } from "../UI/Title/Title";
import "./OrderCard.scss";
import { Selector } from "../UI/Selector/Selector";
import { Checkbox } from "./../UI/Checkbox/Checkbox";
import { getCars } from "../../redux/actions/cars/cars";
import { getCities, getPoints } from "../../redux/actions/address/address";
import {
  getOrderStatus,
  getRates,
  getRatesType,
} from "../../redux/actions/order/order";
import { changeDateFrom } from "../../redux/actions/orderCard/orderCard";

export function OrderCard() {
  const dispatch = useDispatch();
  const warn = false;
  const { cars } = useSelector((state) => state.cars);
  const { rates, ratesType, orderStatus } = useSelector((state) => state.order);
  const { editOrder } = useSelector((state) => state.orderCard);
  const { cities, points } = useSelector((state) => state.address);

  const carsResult = useMemo(async () => await dispatch(getCars()), []);
  const citiesResult = useMemo(async () => await dispatch(getCities()), []);
  const pointsResult = useMemo(async () => await dispatch(getPoints()), []);
  const ratesResult = useMemo(async () => await dispatch(getRates()), []);
  const ratesTypeResult = useMemo(
    async () => await dispatch(getRatesType()),
    []
  );
  const orderStatusResult = useMemo(
    async () => await dispatch(getOrderStatus()),
    []
  );

  const {
    orderStatusId,
    cityId,
    pointId,
    carId,
    color,
    dateFrom,
    dateTo,
    rateId,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = editOrder;

  const dateBeggin = new Date(dateFrom).toLocaleDateString("ru-RU");
  const dateEnd = new Date(dateTo).toLocaleDateString("ru-RU");

  const sortPoints = (point, city) => {
    if (point.cityId.id === city.id) return true;
    return false;
  };

  return (
    <section className="order-card">
      <ContentContainer>
        <Title>Карточка заказа</Title>
        <Setting title={"Настройка заказа"}>
          <div className="order-card__container">
            <div className="order-card__main">
              <div className="order-card__main-wrapper">
                <Selector array={cars} content={"name"}>
                  {carId.name ? carId.name : "Модель машины"}
                </Selector>
              </div>
              <div className="order-card__main-wrapper">
                <Selector array={carId.colors} content={"el"}>
                  {color ? color : "Цвет"}
                </Selector>
              </div>
            </div>
            <div className="order-card__address">
              <div className="order-card__address-wrapper">
                <Selector array={cities} content={"name"}>
                  {cityId.name ? cityId.name : "Город"}
                </Selector>
              </div>
              <div className="order-card__address-wrapper">
                <Selector
                  array={points}
                  content={"address"}
                  sort={editOrder.cityId.id}
                >
                  {`${pointId.name ? pointId.name : "Пункт выдачи"} ,${
                    pointId.address ? pointId.address : "Адресс"
                  }`}
                </Selector>
              </div>
            </div>
            <div className="order-card__date">
              <div className="order-card__date-wrapper">
                <Input
                  type={"date"}
                  value={dateBeggin ? dateBeggin : ""}
                  onChange={(e) => dispatch(changeDateFrom(e.target.value))}
                >
                  Дата начала аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper">
                <Input type={"date"} value={dateEnd ? dateEnd : ""}>
                  Дата конца аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper"></div>
            </div>
            <div className="order-card__rate">
              <h2 className="order-card__rate-title">Тарифы</h2>
              {rates ? rates.map((el) => <Checkbox>{el.name}</Checkbox>) : ""}
            </div>
            <div className="order-card__addons">
              <h2 className="order-card__addons-title">Дополнительные опции</h2>
              <Checkbox active={isFullTank}>Полный бак</Checkbox>
              <Checkbox active={isNeedChildChair}>Детское кресло</Checkbox>
              <Checkbox active={isRightWheel}>Правый руль</Checkbox>
            </div>
            <div className="order-card__price">
              <Input value={price}>Цена</Input>
            </div>
          </div>
        </Setting>
      </ContentContainer>
    </section>
  );
}
