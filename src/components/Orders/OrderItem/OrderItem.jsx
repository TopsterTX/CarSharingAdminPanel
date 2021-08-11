import React from "react";
import car from '../../../images/car.png'
import { v4 as uuidv4 } from 'uuid'; 
import "./OrderItem.scss";

export const OrderItem = () => {

    (function basicCreate (){
        let random = uuidv4()
        let secret = '4cbcea96de'
        let basic = btoa(`${random}:${secret}`)
    })()


  return (
    <section className="order__item">
      <ul className="order__item-container">
        <li className="order__item-part">
          <img src={car} alt="" className="order__item-image" />
          <div className="order__item-info">
            <span className="order__item-place">
              ELANTRA в Ульяновск, Нариманова 42
            </span>
            <span className="order__item-date">
              12.06.2019 12:00 - 13.06.2019 12:00
            </span>
            <span className="order__item-color">Цвет: Голубой</span>
          </div>
        </li>
        <li className="order__item-part"></li>
        <li className="order__item-part"></li>
        <li className="order__item-part"></li>
      </ul>
    </section>
  );
};
