import React from "react";
import { SECRET_KEY } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import logo from "../../icons/Logo.svg";
import {
  changeUsername,
  userAuthorize,
  changePassword,
} from "../../redux/actions/user/user";
import "./Login.scss";

export const Login = () => {
  const { username } = useSelector((state) => state.user);
  const { password } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const authUser = () => {
    let secret = SECRET_KEY;
    let random = uuidv4();
    let basicKey = btoa(`${random}:${secret}`);
    let body = {
      username: `${username}`,
      password: `${password}`,
    };

    dispatch(userAuthorize(body, basicKey));
  };

  const clickHandler = (e) => {
    e.preventDefault();

    authUser();
  };

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
              <input
                type="text"
                className="login__email"
                id="email"
                required
                value={username}
                onChange={(e) => dispatch(changeUsername(e.target.value))}
              />
              <label htmlFor="password">Пароль </label>
              <input
                type="password"
                className="login__password"
                id="password"
                required
                value={password}
                onChange={(e) => dispatch(changePassword(e.target.value))}
              />
              <div className="login__buttons">
                <button className="login__access">Запросить доступ</button>
                <button
                  className="login__enter"
                  type="submit"
                  onClick={(e) => clickHandler(e)}
                >
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
