import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import "./CarColors.scss";

export const CarColors = ({ arr }) => {
  return (
    <div className="car-card__color-checkbox">
      {arr
        ? arr.map((el) => {
            return <Checkbox key={uuidv4()}>{el}</Checkbox>;
          })
        : ""}
    </div>
  );
};
