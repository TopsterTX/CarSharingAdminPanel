import React from "react";
import "./Info.scss";

export const Info = () => {
  return (
    <div className="info">
      <span className="info__place">
        <span>ELANTRA</span> в <span>Ульяновск</span> , Нариманова 42
      </span>
      <span className="info__date">12.06.2019 12:00 - 13.06.2019 12:00</span>
      <span className="info__color">
        Цвет: <span>Голубой</span>
      </span>
    </div>
  );
};
