import React from "react";
import PropTypes from "prop-types";
import Image from "../../UI/Image/Image";
import { useDispatch, useSelector } from "react-redux";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import { v4 as uuidv4 } from "uuid";
import { getEditCar } from "../../../redux/actions/carCard/carCard";
import "./CarsItem.scss";
import { ButtonsContainer } from "./../../UI/ButtonsContainer/ButtonsContainer";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import { openedDeletePopup } from "../../../redux/actions/warningPopup/warningPopup";
import { deleteCar } from "../../../redux/actions/carCard/carCard";

function CarsItem({ car }) {
  const dispatch = useDispatch();
  
  const { thumbnail, colors, name, description, priceMax, priceMin } = car;
  const { path } = thumbnail;
  
    return (
    <section className="car__item">
      <ul className="car__item-container">
        <li className="car__item-part car__item-part --full-width">
          <div className="car__item-part --first-block">
            <Image path={path} />
            <div className="car__info">
              <p className="car__model">{name}</p>
              <p className="car__description">{description}</p>
            </div>
          </div>
          <div>
            <ul className="car__colors">
              <span>Цвета:</span>
              {colors.map((el) => {
                return (
                  <li className="car__colors-item" key={uuidv4()}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>

        <li className="car__item-part">
          <span className="car__price">
            {priceMin} ₽ - {priceMax} ₽
          </span>
        </li>
        <li className="car__item-part">
          <ButtonsContainer>
            <ButtonRoute
              to={"/admin/panel/card_car"}
              type={"default"}
              onClick={() => dispatch(getEditCar(car))}
            >
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/main"}
              type={"warning"}
              onClick={() => dispatch(openedDeletePopup(true))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
      <WarningPopup type={"delete"} onClick={() => dispatch(deleteCar(car.id))}>
        Вы действительно хотите удалить машину ?
      </WarningPopup>
    </section>
  );
}

CarsItem.propTypes = {
  car: PropTypes.shape({
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
};

export default CarsItem;
