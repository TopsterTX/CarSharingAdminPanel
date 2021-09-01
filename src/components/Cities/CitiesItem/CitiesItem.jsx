import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ButtonsContainer } from "../../UI/ButtonsContainer/ButtonsContainer";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import { deleteCity } from "../../../redux/actions/citiesCard/citiesCard";
import { changePopup } from "../../../redux/actions/popup/popup";
import { getEditCity } from "../../../redux/actions/citiesCard/citiesCard";
import "./CitiesItem.scss";

const CitiesItemInner = ({ city }) => {
  const dispatch = useDispatch();
  const { name } = city;

  const changePopupHandler = useCallback(
    (val) => {
      dispatch(changePopup(true));
      dispatch(getEditCity(val));
    },
    [city, getEditCity, changePopup]
  );

  return (
    <div className="cities-item">
      <ul className="cities-item__container">
        <li className="cities-item__part">
          <span className="cities-item__name">{name}</span>
        </li>
        <li className="cities-item__part ">
          <ButtonsContainer>
            <ButtonRoute
              to={"/admin/panel/cities"}
              type={"default"}
              onClick={() => changePopupHandler(city)}
            >
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/cities"}
              type={"warning"}
              onClick={() => dispatch(deleteCity(city.id))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
    </div>
  );
};

CitiesItemInner.propTypes = {
  name: PropTypes.string.isRequired,
};

export const CitiesItem = memo(CitiesItemInner);
