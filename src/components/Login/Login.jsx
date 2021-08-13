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
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import "./Login.scss";
import { userLogin } from "./../../redux/actions/user/user";

export const Login = () => {
  const { username, password, isUserLoginFailed } = useSelector(
    (state) => state.user
  );
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
    return authUser();
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
            <form action="" className="login__form">
              <Input
                label={"Логин"}
                warning={isUserLoginFailed}
                warningText={"Не правильный логин"}
                onChange={(e) => dispatch(changeUsername(e.target.value))}
                value={username}
                required
              />
              <Input
                label={"Пароль"}
                warning={isUserLoginFailed}
                type={"password"}
                required
                value={password}
                onChange={(e) => dispatch(changePassword(e.target.value))}
                warningText={"Не правильный пароль"}
              />
              <div className="login__buttons">
                <Button text={"Запросить доступ"} type={"link"} />
                <Button text={"Войти"} onClick={(e) => clickHandler(e)} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
