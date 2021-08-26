import React, { useEffect, useCallback, memo } from "react";
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
import {
  getOrderStatus,
  getRates,
  getRatesType,
} from "../../redux/actions/order/order";
import {
  changeDateFrom,
  changeDateTo,
  changeCar,
  changeColor,
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
} from "../../redux/actions/orderCard/orderCard";
import {
  openedApplyPopup,
  openedCreatePopup,
  openedDeletePopup,
  openedCancelPopup,
} from "../../redux/actions/warningPopup/warningPopup";
import "./OrderCard.scss";

export function OrderCardInner() {
  const dispatch = useDispatch();
  const warn = false;
  const { cars = [] } = useSelector((state) => state.cars);
  const {
    rates = [],
    ratesType = [],
    orderStatus = [],
  } = useSelector((state) => state.order);
  const { editOrder } = useSelector((state) => state.orderCard);
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

  const dateBeggin = dateFrom
    ? new Date(dateFrom).toISOString().substr(0, 10)
    : "0000-00-00";
  const dateEnd = dateTo
    ? new Date(dateTo).toISOString().substr(0, 10)
    : "0000-00-00";

  // useEffect(() => {
  //   if (!cars.length) dispatch(getCars());
  //   if (!cities.length) dispatch(getCities());
  //   dispatch(getPoints());
  //   dispatch(getRates());
  //   dispatch(getOrderStatus());
  // }, []);

  const changeDateFromHandler = useCallback(
    (value) => {
      return dispatch(changeDateFrom(value));
    },
    [dateFrom, changeDateFrom]
  );

  const changeDateToHandler = useCallback(
    (value) => {
      return dispatch(changeDateTo(value));
    },
    [dateTo, changeDateTo]
  );

  const changeColorHandler = useCallback(
    (value) => {
      return dispatch(changeColor(value));
    },
    [color, changeColor]
  );

  const changePointHandler = useCallback(
    (value) => {
      return dispatch(changePoint(value));
    },
    [pointId, changePoint]
  );

  const changeCityHandler = useCallback(
    (value) => {
      return dispatch(changeCity(value));
    },
    [cityId, changeCity]
  );

  const changeCarHandler = useCallback(
    (value) => {
      return dispatch(changeCar(value));
    },
    [carId, changeCar]
  );

  const changePriceHandler = useCallback(
    (value) => {
      return dispatch(changePrice(value));
    },
    [price, changePrice]
  );

  const changeRateHandler = useCallback(
    (el) => {
      return dispatch(changeRate(el));
    },
    [rateId, changeRate]
  );

  const changeStatusHandler = useCallback(
    (el) => {
      return dispatch(changeOrderStatus(el));
    },
    [orderStatusId, changeOrderStatus]
  );

  const changeIsNeedChildChairHandler = useCallback(
    (active) => {
      return dispatch(changeIsNeedChildChair(active));
    },
    [isNeedChildChair, changeIsNeedChildChair]
  );

  const changeIsFullTankHandler = useCallback(
    (active) => {
      return dispatch(changeIsFullTank(active));
    },
    [isFullTank, changeIsFullTank]
  );

  const changeIsRightWheelHandler = useCallback(
    (active) => {
      return dispatch(changeIsRightWheel(active));
    },
    [isRightWheel, changeIsRightWheel]
  );

  return (
    <section className="order-card">
      <ContentContainer>
        <Title>Карточка заказа</Title>
        <Setting
          title={"Настройка заказа"}
          checkTextObj={editOrder}
          checkTextKey="updatedAt"
          onClickApply={() => dispatch(openedApplyPopup(true))}
          onClickCreate={() => dispatch(openedCreatePopup(true))}
          onClickCancel={() => dispatch(openedCancelPopup(true))}
          onClickDelete={() => dispatch(openedDeletePopup(true))}
        >
          <div className="order-card__container">
            <div className="order-card__main">
              <div className="order-card__main-wrapper">
                <Selector
                  array={cars}
                  content={"name"}
                  onClick={changeCarHandler}
                >
                  {carId ? carId.name : "Модель машины"}
                </Selector>
              </div>
              <div className="order-card__main-wrapper">
                <Selector
                  array={carId ? carId.colors : []}
                  content={"el"}
                  onClick={changeColorHandler}
                >
                  {color ? color : "Цвет"}
                </Selector>
              </div>
            </div>
            <div className="order-card__address">
              <div className="order-card__address-wrapper">
                <Selector
                  array={cities}
                  content={"name"}
                  onClick={changeCityHandler}
                >
                  {cityId ? cityId.name : "Город"}
                </Selector>
              </div>
              <div className="order-card__address-wrapper">
                <Selector
                  array={points ? points : []}
                  content={"address"}
                  sortId={cityId ? cityId.id : ""}
                  onClick={changePointHandler}
                >
                  {`${
                    pointId
                      ? pointId.name
                      : pointId.name === ""
                      ? "Пункт выдачи ,"
                      : pointId.name
                  } ${pointId ? pointId.address : "Адресс"}`}
                </Selector>
              </div>
            </div>
            <div className="order-card__date">
              <div className="order-card__date-wrapper">
                <Input
                  type={"date"}
                  required
                  value={dateBeggin ? dateBeggin : ""}
                  onChange={changeDateFromHandler}
                >
                  Дата начала аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper">
                <Input
                  type={"date"}
                  value={dateEnd ? dateEnd : ""}
                  required
                  onChange={changeDateToHandler}
                >
                  Дата конца аренды
                </Input>
              </div>
              <div className="order-card__date-wrapper"></div>
            </div>
            <div className="order-card__rate">
              <h2 className="order-card__title">Тарифы</h2>
              <div className="order-card__rate-block">
                {rates
                  ? rates.map((el) => (
                      <Radio
                        key={el.id}
                        item={el}
                        active={rateId ? el.id === rateId.id : null}
                        onClick={changeRateHandler}
                      >
                        {el.rateTypeId.name}, {el.price} ₽
                      </Radio>
                    ))
                  : ""}
              </div>
            </div>
            <div className="order-card__addons">
              <h2 className="order-card__title">Дополнительные опции</h2>
              <CheckboxPrimary
                active={isFullTank}
                onClick={changeIsFullTankHandler}
              >
                Полный бак
              </CheckboxPrimary>
              <CheckboxPrimary
                active={isNeedChildChair}
                onClick={changeIsNeedChildChairHandler}
              >
                Детское кресло
              </CheckboxPrimary>
              <CheckboxPrimary
                active={isRightWheel}
                onClick={changeIsRightWheelHandler}
              >
                Правый руль
              </CheckboxPrimary>
            </div>
            <div className="order-card__price">
              <Input value={price} onChange={changePriceHandler}>
                Цена
              </Input>
            </div>
            <div className="order-card__status">
              <h2 className="order-card__title">Статус заказа</h2>
              <div className="order-card__status-block">
                {orderStatus
                  ? orderStatus.map((el) => {
                      return (
                        <Radio
                          key={el.id}
                          item={el}
                          active={el.id === orderStatusId.id}
                          onClick={changeStatusHandler}
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
      <WarningPopup type="create" onClick={() => dispatch(addOrder(editOrder))}>
        Вы действительно хотите добавить заказ ?
      </WarningPopup>
      <WarningPopup
        type="apply"
        onClick={() => dispatch(changeOrder(editOrder.id, editOrder))}
      >
        Вы действительно хотите применить изменения ?
      </WarningPopup>
      <WarningPopup type="cancel" onClick={() => dispatch(cancelChangeOrder())}>
        Вы действительно хотите отменить изменение заказа ?
      </WarningPopup>
      <WarningPopup
        type="delete"
        onClick={() => dispatch(deleteOrder(editOrder.id))}
      >
        Вы действительно хотите удалить заказ ?
      </WarningPopup>
    </section>
  );
}

export const OrderCard = memo(OrderCardInner);
