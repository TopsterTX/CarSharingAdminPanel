import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../UI/Table/Table";
import { Title } from "../UI/Title/Title";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { AddressItem } from "./AddressItem/AddressItem";
import { Popup } from "./../UI/Popup/Popup";
import  Input  from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { changePopup } from "../../redux/actions/popup/popup";
import "./Address.scss";

export const Address = () => {
  const { configureFilter } = useSelector((state) => state.entities);
  const dispatch = useDispatch();

  return (
    <section className="address">
      <ContentContainer>
        <Title>Адреса</Title>
        <Table configureFilter={configureFilter}>
          <AddressItem />
          <AddressItem />
          <AddressItem />
          <AddressItem />
          <AddressItem />
        </Table>
      </ContentContainer>
      <Popup>
        <Input label={"Город"} />
        <Input label={"Адрес"} />
        <Input label={"Пункт выдачи (название)"} />
        <div className="popup__buttons">
          <Button text={"Применить"}></Button>
          <Button
            type="cancel"
            text={"Отменить"}
            onClick={() => dispatch(changePopup(false))}
          ></Button>
        </div>
      </Popup>
    </section>
  );
};
