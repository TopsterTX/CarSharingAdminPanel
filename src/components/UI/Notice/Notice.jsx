import React, { useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  openNotice,
  warningNotice,
} from "../../../redux/actions/notice/notice";
import ReactDom from "react-dom";
import check from "../../../icons/notice/Check.svg";
import close from "../../../icons/notice/Close.svg";
import "./Notice.scss";

const NoticeInner = () => {
  const dispatch = useDispatch();
  const { isOpenNotice, isWarning } = useSelector((state) => state.notice);

  const clickHandler = useCallback(() => {
    dispatch(openNotice(false));
  }, [openNotice]);

  useEffect(() => {
    if (isOpenNotice) {
      setTimeout(() => {
        clickHandler();
      }, 3000);
    }
    if (isWarning) {
      setTimeout(() => {
        dispatch(warningNotice(false));
      }, 5000);
    }
  }, [isOpenNotice]);

  return ReactDom.createPortal(
    <section
      className={`notice ${isOpenNotice ? "active" : null} ${
        isWarning ? "warning" : null
      }`}
    >
      <div className="notice__container">
        {isWarning ? (
          <div className="notice__text">
            <img src={close} alt="" />
            <span>Операция не выполнена</span>
          </div>
        ) : (
          <div className="notice__text">
            <img src={check} alt="" />
            <span>Операция выполнена успешно</span>
          </div>
        )}
        <div className="notice__close">
          <button className="notice__button" onClick={() => clickHandler()}>
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("notice")
  );
};

export const Notice = memo(NoticeInner);
