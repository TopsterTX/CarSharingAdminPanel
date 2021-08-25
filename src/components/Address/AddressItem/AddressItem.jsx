import React, { memo } from "react";
import PropTypes from "prop-types";
import { ButtonRoute } from "./../../UI/ButtonRoute/ButtonRoute";
import { ButtonsContainer } from "../../UI/ButtonsContainer/ButtonsContainer";
import { WarningPopup } from "./../../UI/WarningPopup/WarningPopup";
import { useDispatch } from "react-redux";
import { deletePoint } from "../../../redux/actions/addressCard/addressCard";
import { openedDeletePopup } from "../../../redux/actions/warningPopup/warningPopup";
import "./AddressItem.scss";

function AddressItemInner({ point = {}, onClick = () => {} }) {
  const dispatch = useDispatch();
  const { name, address, id, cityId } = point;

  return (
    <div className="address-item">
      <ul className="address-item__container">
        <li className="address-item__part address-item__part--sub">
          <div className="address-item__part-block">
            <span className="address-item__city">
              {cityId ? cityId.name : "Город не указан"}
            </span>
          </div>
          <div className="address-item__part-block">
            <span className="address-item__point">{name ? name : ""}</span>
            <span className="address-item__address">
              {address ? address : ""}
            </span>
          </div>
        </li>
        <li className="address-item__part">
          <ButtonsContainer>
            <ButtonRoute to={"/admin/panel/address"} type={"default"}>
              Изменить
            </ButtonRoute>
            <ButtonRoute
              to={"/admin/panel/address"}
              type={"warning"}
              onClick={() => dispatch(deletePoint(id))}
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

AddressItemInner.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  cityId: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export const AddressItem = memo(AddressItemInner);
