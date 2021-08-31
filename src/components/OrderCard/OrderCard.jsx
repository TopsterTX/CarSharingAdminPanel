import React, { useEffect, useState, useCallback, memo } from "react";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Setting } from "../UI/Setting/Setting";
import { Title } from "../UI/Title/Title";
import { Radio } from "../UI/Radio/Radio";
import { Selector } from "../UI/Selector/Selector";
import { WarningPopup } from "../UI/WarningPopup/WarningPopup";
import { Input } from "../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars/cars";
import { getPoints } from "../../redux/actions/address/address";
import { getCities } from "../../redux/actions/cities/cities";
import { CheckboxPrimary } from "../UI/CheckboxPrimary/CheckboxPrimary";
import { getOrderStatus, getRates } from "../../redux/actions/order/order";
import {
  changeDateFrom,
  changeDateTo,
  changeCity,
  changePoint,
  changePrice,
  changeRate,
  addOrder,
  changeOrder,
  cancelChangeOrder,
  deleteOrder,
  changeOrderStatus,
  changeIsFullTank,
  changeIsNeedChildChair,
  changeIsRightWheel,
  changeCar,
  changeColor,
} from "../../redux/actions/orderCard/orderCard";
import {
  openedApplyPopup,
  openedCreatePopup,
  openedDeletePopup,
  openedCancelPopup,
} from "../../redux/actions/warningPopup/warningPopup";
import { validateHandler } from "../CarCard/CarCard";
import "./OrderCard.scss";
import { showLoader } from "./../../redux/actions/loader/loader";

export function OrderCardInner() {
  const dispatch = useDispatch();
  const warn = false;
  const { cars = [] } = useSelector((state) => state.cars);
  const {
    rates = [],
    ratesType = [],
    orderStatus = [],
  } = useSelector((state) => state.order);
  const { editOrder, emptyOrder } = useSelector((state) => state.orderCard);
  const { points = [] } = useSelector((state) => state.address);
  const { cities = [] } = useSelector((state) => state.cities);
  const {
    orderStatusId = {},
    cityId = {},
    pointId = {},
    carId = {},
    color = "",
    dateFrom = "",
    dateTo = "",
    rateId = {},
    price = 0,
    isFullTank = false,
    isNeedChildChair = false,
    isRightWheel = false,
  } = editOrder;
  const { colors } = carId ? carId : [];

  const [priceWarn, setPriceWarn] = useState(false);

  const dateBeggin = dateFrom
    ? new Date(dateFrom).toISOString().substr(0, 10)
    : "0000-00-00";
  const dateEnd = dateTo
    ? new Date(dateTo).toISOString().substr(0, 10)
    : "0000-00-00";

  useEffect(() => {
    dispatch(showLoader(true));
    if (!cars.length) {
      dispatch(getCars());
    }
    if (!cities.length) {
      dispatch(getCities());
    }
    if (!points.length) {
      dispatch(getPoints());
    }
    if (!rates.length) {
      dispatch(getRates());
    }
    if (!orderStatus.length) {
      dispatch(getOrderStatus());
    }
  }, []);

  useEffect(() => {
    if (
      cars.length &&
      cities.length &&
      points.length &&
      rates.length &&
      orderStatus.length
    ) {
      dispatch(showLoader(false));
    }
  }, [cars, cities, points, rates, orderStatus]);

  const changePriceHandler = useCallback(
    (e) => {
      validateHandler(setPriceWarn, e.target.value, /\d/g);
      dispatch(changePrice(e.target.value));
    },
    [price]
  );

  const changeDateFromHandler = useCallback(
    (e) => {
      return dispatch(changeDateFrom(new Date(e.target.value).getTime()));
    },
    [dateFrom]
  );

  const changeDateToHandler = useCallback(
    (e) => {
      return dispatch(changeDateTo(new Date(e.target.value).getTime()));
    },
    [dateTo]
  );

  return (
    <section className="order-card">
      <ContentContainer>
        <Title>Карточка заказа</Title>
        <Setting
          title={"Настройка заказа"}
          checkTextObj={editOrder}
          checkTextKey="updatedAt"
          onClickApply={() =>
            priceWarn ? () => {} : dispatch(openedApplyPopup(true))
          }
          onClickCreate={() =>
            priceWarn ? () => {} : dispatch(openedCreatePopup(true))
          }
          onClickCancel={() => dispatch(openedCancelPopup(true))}
          onClickDelete={() => dispatch(openedDeletePopup(true))}
        >
          <div className="order-card__container">
            <div className="order-card__main">
              <div className="order-card__main-wrapper">
                <Selector array={cars} content={"name"} onClick={changeCar}>
                  {carId
                    ? carId.name.length
                      ? carId.name
                      : "Модель машины"
                    : "Модель машины"}
                </Selector>
              </div>
              <div className="order-card__main-wrapper">
                <Selector array={colors} content={"el"} onClick={changeColor}>
                  {color ? color : "Цвет"}
                </Selector>
              </div>
            </div>
            <div className="order-card__address">
              <div className="order-card__address-wrapper">
                <Selector array={cities} content={"name"} onClick={changeCity}>
                  {cityId
                    ? cityId.name.length
                      ? cityId.name
                      : "Город"
                    : "Город"}
                </Selector>
              </div>
              <div className="order-card__address-wrapper">
                <Selector
                  array={points ? points : []}
                  content={"address"}
                  sortId={cityId ? cityId.id : ""}
                  onClick={changePoint}
                >
                  {`${
                    pointId
                      ? pointId.name.length
                        ? pointId.name
                        : "Пункт выдачи ,"
                      : "Пункт выдачи ,"
                  } ${
                    pointId
                      ? pointId.address.length
                        ? pointId.address
                        : "Адресс"
                      : "Адресс"
                  }`}
                </Selector>
              </div>
            </div>
            <div className="order-card__date">
              <div className="order-card__date-wrapper order-card__date-wrapper--input">
                <Input
                  type={"date"}
                  required
                  value={dateBeggin ? dateBeggin : ""}
                  dispatched={true}
                  onChange={changeDateFromHandler}
                >
                  Дата начала аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper order-card__date-wrapper--input">
                <Input
                  type={"date"}
                  value={dateEnd ? dateEnd : ""}
                  required
                  dispatched={true}
                  onChange={changeDateToHandler}
                >
                  Дата конца аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper"></div>
            </div>
            <div className="order-card__rate">
              <h2 className="order-card__title">
                <span>*</span>Тарифы
              </h2>
              <div className="order-card__rate-block">
                {rates
                  ? rates.map((el) => {
                      return (
                        <Radio
                          key={el.id}
                          item={el}
                          active={rateId ? el.id === rateId.id : false}
                          onClick={changeRate}
                        >
                          {el.rateTypeId.name}, {el.price} ₽
                        </Radio>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="order-card__addons">
              <h2 className="order-card__title">Дополнительные опции</h2>
              <CheckboxPrimary active={isFullTank} onClick={changeIsFullTank}>
                Полный бак
              </CheckboxPrimary>
              <CheckboxPrimary
                active={isNeedChildChair}
                onClick={changeIsNeedChildChair}
              >
                Детское кресло
              </CheckboxPrimary>
              <CheckboxPrimary
                active={isRightWheel}
                onClick={changeIsRightWheel}
              >
                Правый руль
              </CheckboxPrimary>
            </div>
            <div className="order-card__price order-card__price--input">
              <Input
                value={price}
                warning={priceWarn}
                warningText={"Недопустимый символ"}
                onChange={changePriceHandler}
                required
              >
                Цена
              </Input>
            </div>
            <div className="order-card__status">
              <h2 className="order-card__title">
                <span>*</span>Статус заказа
              </h2>
              <div className="order-card__status-block">
                {orderStatus
                  ? orderStatus.map((el) => {
                      return (
                        <Radio
                          key={el.id}
                          item={el}
                          active={el.id === orderStatusId.id}
                          onClick={changeOrderStatus}
                        >
                          {el.name}
                        </Radio>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </Setting>
      </ContentContainer>
      <WarningPopup
        type="create"
        onClick={() => dispatch(addOrder(editOrder, emptyOrder))}
      >
        Вы действительно хотите добавить заказ ?
      </WarningPopup>
      <WarningPopup
        type="apply"
        onClick={() =>
          dispatch(changeOrder(editOrder.id, editOrder, emptyOrder))
        }
      >
        Вы действительно хотите применить изменения ?
      </WarningPopup>
      <WarningPopup type="cancel" onClick={() => dispatch(cancelChangeOrder())}>
        Вы действительно хотите отменить изменение заказа ?
      </WarningPopup>
      <WarningPopup
        type="delete"
        onClick={() => dispatch(deleteOrder(editOrder.id, emptyOrder))}
      >
        Вы действительно хотите удалить заказ ?
      </WarningPopup>
    </section>
  );
}

export const OrderCard = memo(OrderCardInner);
