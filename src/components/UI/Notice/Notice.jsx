import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNotice } from "../../../redux/actions/notice/notice";
import ReactDom from "react-dom";
import check from "../../../icons/notice/Check.svg";
import close from "../../../icons/notice/Close.svg";
import "./Notice.scss";

export const Notice = () => {
  const dispatch = useDispatch();
  const { isOpenNotice } = useSelector((state) => state.notice);

  useEffect(() => {
    if (isOpenNotice) {
      setTimeout(() => {
        dispatch(openNotice(false));
      }, 3000);
    }
  }, []);

  return ReactDom.createPortal(
    <section className={`notice ${isOpenNotice ? "active" : null}`}>
      <div className="notice__container">
        <div className="notice__text">
          <img src={check} alt="" />
          <span>Операция выполнена успешно</span>
        </div>
        <div className="notice__close">
          <button
            className="notice__button"
            onClick={() => dispatch(openNotice(false))}
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("notice")
  );
};
