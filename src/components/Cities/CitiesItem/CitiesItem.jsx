import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ButtonsContainer } from "../../UI/ButtonsContainer/ButtonsContainer";
import { ButtonRoute } from "../../UI/ButtonRoute/ButtonRoute";
import { deleteCity } from "../../../redux/actions/citiesCard/citiesCard";

const CitiesItemInner = ({ city }) => {
  const dispatch = useDispatch();
  const { name } = city;

  return (
    <div className="cities-item">
      <ul className="cities-item__container">
        <li className="cities-item__part">
          <span>{name}</span>
        </li>
        <li className="cities-item__part">
          <ButtonsContainer>
            <ButtonRoute to={"/admin/panel/cities"} type={"default"}>
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
