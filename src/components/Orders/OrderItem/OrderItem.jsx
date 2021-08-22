import React from "react";
import car from "../../../images/car.png";
import { useSelector, useDispatch } from "react-redux";
import { CheckboxOrder } from "./CheckboxOrder/CheckboxOrder";
import { Info } from "./Info/Info";
import { ButtonsContainer } from "./../../UI/ButtonsContainer/ButtonsContainer";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import { getOrder } from "../../../redux/actions/order/order";
import "./OrderItem.scss";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import {
  openedApplyPopup,
  openedDeletePopup,
} from "../../../redux/actions/warningPopup/warningPopup";

const imageHandler = (thumbnail) => {
  if (thumbnail.path === null) {
    return "";
  } else if (thumbnail.path.indexOf("data:image/png;") !== -1) {
    return thumbnail.path;
  } else {
    return `https://api-factory.simbirsoft1.com${thumbnail.path}`;
  }
};

export const OrderItem = ({ order }) => {
  const dispatch = useDispatch();

  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part order__item-part--wrapper">
          <div className="order__item-part order__item-part--full-width">
            <img
              src={imageHandler(order.carId.thumbnail)}
              alt=""
              className="order__item-image"
            />
            <Info order={order} />
          </div>
          <CheckboxOrder order={order} />
        </li>
        <li className="order__item-part">
          <span className="order__item-price">{order.price} ₽</span>
        </li>
        <li className="order__item-part">
          <ButtonsContainer>
            <ButtonRoute
              to={"/admin/panel/orders"}
              type={"primary"}
              onClick={() => dispatch(openedApplyPopup(true))}
            >
              Готово
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/card_order"}
              type={"default"}
              onClick={() => dispatch(getOrder(order))}
            >
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/orders"}
              type={"warning"}
              onClick={() => dispatch(openedDeletePopup(true))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
      <WarningPopup type="apply">
        Вы действительно потдверждаете заказ ?
      </WarningPopup>

      <WarningPopup type="delete">
        Вы действительно хотите удалить заказ ?
      </WarningPopup>
    </section>
  );
};
