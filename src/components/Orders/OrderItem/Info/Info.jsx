import React from "react";
import PropTypes from "prop-types";
import "./Info.scss";

const Info = ({ color, carId, cityId, pointId, dateFrom, dateTo }) => {
  const dateBeggin = new Date(dateFrom).toLocaleDateString("ru-RU");
  const dateEnd = new Date(dateTo).toLocaleDateString("ru-RU");

  return (
    <div className="info">
      <span className="info__place">
        <span>{carId ? carId.name : ""}</span> в{" "}
        <span>{cityId ? cityId.name : ""}</span> ,
        {pointId ? pointId.address : ""}
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

Info.propTypes = {
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

export default Info;
