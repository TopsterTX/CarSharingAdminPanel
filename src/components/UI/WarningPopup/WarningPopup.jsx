import React from "react";
import ReactDom from "react-dom";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  openedCancelPopup,
  openedApplyPopup,
  openedDeletePopup,
} from "../../../redux/actions/warningPopup/warningPopup";
import "./WarningPopup.scss";

export const WarningPopup = ({ children, onClick, type }) => {
  const dispatch = useDispatch();
  const { popupIsCancel, popupIsApply, popupIsDelete } = useSelector(
    (state) => state.warningPopup
  );

  return ReactDom.createPortal(
    <div
      className={`warning-popup 
        ${popupIsApply && type === "apply" ? "active" : null}
        ${popupIsCancel && type === "cancel" ? "active" : null}
        ${popupIsDelete && type === "delete" ? "active" : null}
        `}
    >
      <div className="warning-popup__container">
        <div className="warning-popup__block">
          <span className="warning-popup__text">{children}</span>
          <div className="warning-popup__buttons">
            <Button
              onClick={() => {
                if (type === "apply") {
                  dispatch(openedApplyPopup(false));
                  onClick();
                } else if (type === "cancel") {
                  dispatch(openedCancelPopup(false));
                  onClick();
                } else if (type === "delete") {
                  dispatch(openedDeletePopup(false));
                  onClick();
                } else {
                  return null;
                }
              }}
            >
              Да
            </Button>
            <Button
              type={"warning"}
              onClick={() =>
                type === "apply"
                  ? dispatch(openedApplyPopup(false))
                  : type === "cancel"
                  ? dispatch(openedCancelPopup(false))
                  : type === "delete"
                  ? dispatch(openedDeletePopup(false))
                  : null
              }
            >
              Нет
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};
