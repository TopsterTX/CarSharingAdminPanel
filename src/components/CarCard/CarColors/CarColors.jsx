import React from "react";
import Checkbox from "../../UI/Checkbox/Checkbox";
import "./CarColors.scss";
import { Button } from "./../../UI/Button/Button";
import PropTypes from "prop-types";

const CarColors = ({ arr, onClick }) => {
  return (
    <div className="car-card__color-checkbox">
      {arr
        ? arr.map((el) => {
            return <Checkbox key={el.id}>{el}</Checkbox>;
          })
        : ""}

      <Button onClick={onClick} type="link" className="car-card__button-color">
        Удалить последний
      </Button>
    </div>
  );
};

CarColors.propTypes = {
  arr: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarColors;