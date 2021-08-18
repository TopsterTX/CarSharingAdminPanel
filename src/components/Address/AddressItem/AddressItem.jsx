import React from "react";
import { Buttons } from "./../../UI/Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { changePopup } from "../../../redux/actions/popup/popup";
import "./AddressItem.scss";

export function AddressItem() {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.popup);
  const buttonsProps = {
    buttons: [
      {
        type: "default",
        onClick: () => dispatch(changePopup(true)),
        to: "/admin/panel/address",
      },
    ],
  };

  return (
    <div className="address-item">
      <ul className="address-item__container">
        <li className="address-item__part">
          <span className="address-item__city">Краснодар</span>
        </li>
        <li className="address-item__part">
          <span className="address-item__point">ТЦ Галерея</span>
          <span className="address-item__address">ул. Северная 233</span>
        </li>
        <li className="address-item__part">
          <Buttons buttonsProps={buttonsProps} />
        </li>
      </ul>
    </div>
  );
}
