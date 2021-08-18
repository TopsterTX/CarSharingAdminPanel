import React from "react";
import logo from "../../icons/Logo.svg";
import "./Login.scss";

export const Login = () => {
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login__logo">
          <img src={logo} alt="logo" className="login__svg" />
          <span className="login__title">Need for drive</span>
        </div>
        <div className="login__block">
          <div className="login__container">
            <div className="login__subtitle">Вход</div>
            <form action="#" className="login__form">
              <label htmlFor="email">Почта</label>
              <input type="text" className="login__email" id="email" required />
              <label htmlFor="password">Пароль </label>
              <input
                type="password"
                className="login__password"
                id="password"
                required
              />
              <div className="login__buttons">
                <button className="login__access">Запросить доступ</button>
                <button className="login__enter" type="submit">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
