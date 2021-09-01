import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CheckboxPrimary } from "../../UI/CheckboxPrimary/CheckboxPrimary";
import { Button } from "./../../UI/Button/Button";
import PropTypes from "prop-types";
import "./CarColors.scss";

const CarColorsInner = ({ arr, onClick }) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(
    (arr) => {
      dispatch(onClick(arr.length - 1));
    },
    [arr, onClick]
  );

  return (
    <div className="car-card__color-checkbox">
      {arr
        ? arr.map((el) => {
            return (
              <CheckboxPrimary key={el.id} onClick={() => {}}>
                {el}
              </CheckboxPrimary>
            );
          })
        : ""}

      <Button
        onClick={() => clickHandler(arr)}
        type="link"
        className="car-card__button-color"
      >
        Удалить последний
      </Button>
    </div>
  );
};

CarColorsInner.propTypes = {
  arr: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const CarColors = memo(CarColorsInner);
