import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import "./Setting.scss";

const SettingInner = ({
  title = "",
  type = "",
  children = "",
  checkTextKey = "",
  checkTextObj = {},
  onClickApply = () => {},
  onClickCancel = () => {},
  onClickDelete = () => {},
  onClickCreate = () => {},
  buttonsDisabled = false,
}) => {
  const { editCar } = useSelector((state) => state.carCard);

  const checkText = useCallback(
    (key, obj) => {
      if (key in obj) {
        return "Применить";
      } else {
        return "Создать";
      }
    },
    [checkTextKey, checkTextObj]
  );

  const applyOrCreateHandler = useCallback(() => {
    if (checkText(checkTextKey, checkTextObj) === "Применить") {
      return onClickApply;
    } else {
      return onClickCreate;
    }
  }, [checkTextKey, checkTextObj]);

  return (
    <form action="#" type="submit" className="setting">
      <div className="setting__block">
        <div className="setting__container">
          <h2 className="setting__title">{title}</h2>
          <div className="setting__main">{children}</div>
          <div className="setting__buttons">
            <div className="setting__buttons-wrapper">
              <Button onClick={applyOrCreateHandler()} disabled={true}>
                {checkText(checkTextKey, checkTextObj)}
              </Button>
              <Button
                type={"cancel"}
                onClick={onClickCancel}
                disabled={buttonsDisabled}
              >
                Отменить
              </Button>
            </div>
            <Button
              type={"warning"}
              onClick={onClickDelete}
              disabled={buttonsDisabled}
            >
              Удалить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

SettingInner.propTypes = {
  buttonsDisabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClickApply: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired,
  checkTextKey: PropTypes.string,
  checkTextObj: PropTypes.object,
};

export const Setting = memo(SettingInner);
