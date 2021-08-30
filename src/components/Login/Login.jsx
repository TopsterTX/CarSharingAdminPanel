import React, { useCallback, memo } from "react";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
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

const LoginInner = () => {
  const { username, password, isUserLoginFailed } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const authUser = useCallback(() => {
    let secret = SECRET_KEY;
    let random = uuidv4();
    let basicKey = btoa(`${random}:${secret}`);
    let body = {
      username: `${username}`,
      password: `${password}`,
    };

    dispatch(userAuthorize(body, basicKey));
  }, [password, username]);

  const changeUsernameHandler = useCallback(
    (e) => {
      return dispatch(changeUsername(e.target.value));
    },
    [username, changeUsername]
  );

  const changePasswordHandler = useCallback(
    (e) => {
      return dispatch(changePassword(e.target.value));
    },
    [password, changeUsername]
  );

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
                warning={isUserLoginFailed}
                warningText={"Не правильный логин"}
                onChange={(e) => changeUsernameHandler(e)}
                value={username}
                required
              >
                Логин
              </Input>
              <Input
                warning={isUserLoginFailed}
                type={"password"}
                required
                value={password}
                onChange={(e) => changePasswordHandler(e)}
                warningText={"Не правильный пароль"}
              >
                Пароль
              </Input>
              <div className="login__buttons">
                <Button type={"link"}>Запросить доступ</Button>
                <Button onClick={() => authUser()}>Войти</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Login = memo(LoginInner);
