import React from "react";
import { ButtonRoute } from "./../../UI/ButtonRoute/ButtonRoute";
import { ButtonsContainer } from "../../UI/ButtonsContainer/ButtonsContainer";
import { useDispatch } from "react-redux";
import { changePopup } from "../../../redux/actions/popup/popup";
import "./AddressItem.scss";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import { openedDeletePopup } from "../../../redux/actions/warningPopup/warningPopup";

export function AddressItem() {
  const dispatch = useDispatch();

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
          <ButtonsContainer>
            <ButtonRoute to={"/admin/panel/address"} type={"default"}>
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/address"}
              type={"warning"}
              onClick={() => dispatch(openedDeletePopup(true))}
            >
              Удалить
            </ButtonRoute>
          </ButtonsContainer>
        </li>
      </ul>
      <WarningPopup type={"delete"}>
        Вы действительно хотите удалить пункт выдачи ?
      </WarningPopup>
    </div>
  );
}
