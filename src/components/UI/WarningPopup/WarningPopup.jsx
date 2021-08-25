import React from "react";
import ReactDom from "react-dom";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  openedCancelPopup,
  openedApplyPopup,
  openedDeletePopup,
  openedCreatePopup,
} from "../../../redux/actions/warningPopup/warningPopup";
import "./WarningPopup.scss";
import PropTypes from "prop-types";

export const WarningPopup = ({
  children = "",
  onClick = () => {},
  type = "",
}) => {
  const dispatch = useDispatch();
  const { popupIsCancel, popupIsApply, popupIsDelete, popupIsCreate } =
    useSelector((state) => state.warningPopup);

  const clickHandlerYes = (type) => {
    if (type === "apply") {
      dispatch(openedApplyPopup(false));
      onClick();
    } else if (type === "cancel") {
      dispatch(openedCancelPopup(false));
      onClick();
    } else if (type === "delete") {
      dispatch(openedDeletePopup(false));
      onClick();
    } else if (type === "create") {
      dispatch(openedCreatePopup(false));
      onClick();
    } else {
      return null;
    }
  };

  const clickHandlerNo = (type) => {
    if (type === "apply") {
      return dispatch(openedApplyPopup(false));
    } else if (type === "cancel") {
      return dispatch(openedCancelPopup(false));
    } else if (type === "create") {
      return dispatch(openedCreatePopup(false));
    } else if (type === "delete") {
      return dispatch(openedDeletePopup(false));
    } else {
      return null;
    }
  };

  return ReactDom.createPortal(
    <div
      className={`warning-popup 
        ${popupIsApply && type === "apply" ? "active" : null}
        ${popupIsCancel && type === "cancel" ? "active" : null}
        ${popupIsDelete && type === "delete" ? "active" : null}
        ${popupIsCreate && type === "create" ? "active" : null}
        `}
    >
      <div className="warning-popup__container">
        <div className="warning-popup__block">
          <span className="warning-popup__text">{children}</span>
          <div className="warning-popup__buttons">
            <Button onClick={() => clickHandlerYes(type)}>Да</Button>
            <Button type={"warning"} onClick={() => clickHandlerNo(type)}>
              Нет
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};

WarningPopup.propTypes = {
  children: PropTypes.any.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
