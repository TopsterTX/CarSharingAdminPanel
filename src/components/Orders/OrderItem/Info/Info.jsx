import React from "react";
import "./Info.scss";

export const Info = ({ order }) => {
  const { color, carId, cityId, pointId, dateFrom, dateTo } = order;
  const dateBeggin = new Date(dateFrom).toLocaleDateString("ru-RU");
  const dateEnd = new Date(dateTo).toLocaleDateString("ru-RU");

  return (
    <div className="info">
      <span className="info__place">
        <span>{carId.name}</span> в <span>{cityId.name}</span> ,
        {pointId === null ? "" : pointId.address}
      </span>
      <span className="info__date">
        {dateBeggin} - {dateEnd}
      </span>
      <span className="info__color">
        Цвет: <span>{color}</span>
      </span>
    </div>
  );
};
