import React, { memo } from "react";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import { Image } from "../../UI/Image/Image";
import Info from "./Info/Info";
import { ButtonsContainer } from "./../../UI/ButtonsContainer/ButtonsContainer";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { CheckboxOrder } from "./CheckboxOrder/CheckboxOrder";
import {
  getOrder,
  deleteOrder,
} from "../../../redux/actions/orderCard/orderCard";
import "./OrderItem.scss";
import {
  openedApplyPopup,
  openedDeletePopup,
} from "../../../redux/actions/warningPopup/warningPopup";

export const OrderItem = ({ order, id }) => {
  const dispatch = useDispatch();

  const {
    carId = {},
    pointId = {},
    cityId = {},
    color = "",
    rateId = {},
    orderStatusId = {},
    dateFrom = "",
    dateTo = "",
    price = 0,
    isFullTank = false,
    isRightWheel = false,
    isNeedChildChair = false,
  } = order;

  const clickDeleteHandler = (id) => {
    return console.log(id);
  };

  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part order__item-part--wrapper">
          <div className="order__item-part order__item-part--full-width">
            <Image
              path={carId ? (carId.thumbnail ? carId.thumbnail.path : "") : ""}
            />
            <Info {...order} />
          </div>
          <CheckboxOrder
            isFullTank={isFullTank}
            isNeedChildChair={isNeedChildChair}
            isRightWheel={isRightWheel}
          />
        </li>
        <li className="order__item-part">
          <span className="order__item-price">{price} ₽</span>
        </li>
        <li className="order__item-part">
          <ButtonsContainer>
            <ButtonRoute
              to={"/admin/panel/orders"}
              type={"primary"}
              onClick={() => console.log(id)}
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
              onClick={() => dispatch(deleteOrder(id))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
    </section>
  );
};

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    dateFrom: PropTypes.number.isRequired,
    dateTo: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isFullTank: PropTypes.bool.isRequired,
    isNeedChildChair: PropTypes.bool.isRequired,
    isRightWheel: PropTypes.bool.isRequired,
    orderStatusId: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    cityId: PropTypes.objectOf(PropTypes.string).isRequired,
    pointId: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      cityId: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    }),
    carId: PropTypes.shape({
      id: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      categoryId: PropTypes.objectOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      priceMin: PropTypes.number.isRequired,
      priceMax: PropTypes.number.isRequired,
      thumbnail: PropTypes.shape({
        size: PropTypes.number.isRequired,
        originalname: PropTypes.string.isRequired,
        mimetype: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    rateId: PropTypes.shape({
      rateTypeId: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
