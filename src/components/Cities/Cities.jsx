import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../UI/Title/Title";
import { Table } from "../UI/Table/Table";
import { ContentContainer } from "../UI/ContentContainer/ContentContainer";
import Popup from "./../UI/Popup/Popup";
import { CitiesItem } from "./CitiesItem/CitiesItem";
import { getCitiesOnPage } from "../../redux/actions/cities/cities";

const CitiesInner = () => {
  const dispatch = useDispatch();
  const {
    cities = [],
    citiesOnPage = [],
    configureFilter,
  } = useSelector((state) => state.cities);
  const { editCity } = useSelector((state) => state.citiesCard);
  const { name } = editCity;

  useEffect(() => {
    if (!citiesOnPage.length) {
      dispatch(getCitiesOnPage(1));
    }
    console.log(citiesOnPage);
  }, []);

  return (
    <section className="cities">
      <ContentContainer>
        <Title>Города</Title>
        <Table configureFilter={configureFilter} addonComponent={<></>}>
          {citiesOnPage
            ? citiesOnPage.map((el) => {
                return <CitiesItem city={el} key={el.id} />;
              })
            : ""}
        </Table>
      </ContentContainer>
      <Popup type="city"></Popup>
      <Popup type="point"></Popup>
      <Popup type="change"></Popup>
    </section>
  );
};

export const Cities = memo(CitiesInner);
