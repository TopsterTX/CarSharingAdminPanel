import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showError } from "../../redux/actions/error/error";
import "./Error.scss";

const ErrorInner = ({}) => {
  const dispatch = useDispatch();
  const { status, isShow } = useSelector((state) => state.error);

  return (
    <section className="error">
      <div className="error__container">
        <h2 className="error__status">{status}</h2>
        <p className="error__label">Что-то пошло не так</p>
        <p className="error__sublabel">Попробуйте перезагрузить страницу !</p>
        <NavLink
          to="/admin/panel/main"
          type="primary"
          className="error__button"
          onClick={() => dispatch(showError(false))}
        >
          Обновить
        </NavLink>
      </div>
    </section>
  );
};

export const Error = memo(ErrorInner);
